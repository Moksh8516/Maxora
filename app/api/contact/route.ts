import { NextResponse } from "next/server";
import { sendAdminLeadEmail, sendGreetingEmail } from "../../lib/mailer";
// import { db } from "@/lib/db"; // Prisma / Mongoose connection

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, company } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 },
      );
    }

    // 1️⃣ Save to Database
    // await db.contact.create({
    //   data: { name, email, message },
    // });

    // 2️⃣ Send Greeting Email
    await sendGreetingEmail({ name, email, company });

    // 2️⃣ Send lead notification to admin
    await sendAdminLeadEmail({
      name,
      email,
      phone,
      service,
      company,
      message,
    });
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
