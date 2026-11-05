// app/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { getLandingPageBySlug } from "@/content/landing-pages";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  const title = pageData?.hero?.h1 || "Custom Website & Software Engineering";
  const subtitle =
    pageData?.hero?.subheading ||
    "Clean, fast websites and business software. Talk directly to developers with fixed-price quotes.";
  const locationBadge = pageData?.city
    ? `${pageData.city}, Punjab, India`
    : "Pan-India & Worldwide";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #050A15 0%, #0A1428 50%, #070E1E 100%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow Accent */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(5,107,255,0.25) 0%, rgba(0,213,242,0.08) 50%, transparent 70%)",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "#056BFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "24px",
                color: "#FFFFFF",
              }}
            >
              M
            </div>
            <span style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
              Maxora Technology
            </span>
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              background: "rgba(5, 107, 255, 0.15)",
              border: "1px solid rgba(0, 213, 242, 0.4)",
              color: "#00D5F2",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {locationBadge}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#AFC5E1",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "18px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#10B981" }}>✓</span> Fixed Price in Writing
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "18px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#00D5F2" }}>✓</span> Weekly Mobile Test
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "18px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#056BFF" }}>✓</span> Opens in 1-2 Seconds
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
