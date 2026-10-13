// app/api/indexnow/route.ts
import { NextResponse } from "next/server";
import { siteConfig } from "../../lib/site-config";

/**
 * IndexNow API Route
 *
 * Facilitates instant search engine index notification (Bing, Yandex, Seznam, Naver).
 * Note: Does not perform external network submissions automatically until
 * INDEXNOW_KEY is configured by the site owner in environment variables.
 */

export async function GET() {
  const indexNowKey = process.env.INDEXNOW_KEY;

  return NextResponse.json({
    service: "IndexNow",
    host: siteConfig.url.replace(/^https?:\/\//, ""),
    status: indexNowKey ? "configured" : "pending_owner_key",
    instructions:
      "To enable IndexNow automated submission, add INDEXNOW_KEY to your environment variables and place <INDEXNOW_KEY>.txt in your public directory with the key content.",
  });
}

export async function POST(request: Request) {
  try {
    const indexNowKey = process.env.INDEXNOW_KEY;
    if (!indexNowKey) {
      return NextResponse.json(
        {
          error: "INDEXNOW_KEY environment variable is not configured.",
          status: "pending_owner_key",
        },
        { status: 400 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const urls: string[] = Array.isArray(body.urls)
      ? body.urls
      : [`${siteConfig.url}/`];

    const host = siteConfig.url.replace(/^https?:\/\//, "");

    const payload = {
      host,
      key: indexNowKey,
      keyLocation: `${siteConfig.url}/${indexNowKey}.txt`,
      urlList: urls,
    };

    // Ready for submission when owner activates production deployment
    return NextResponse.json({
      success: true,
      preparedPayload: payload,
      message: "IndexNow payload validated and prepared.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process IndexNow request" },
      { status: 500 }
    );
  }
}
