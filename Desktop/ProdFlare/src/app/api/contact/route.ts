import { NextResponse } from "next/server";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate inputs
    const validatedData = contactSchema.parse(body);

    // Simulate database write / email delivery delay (1000ms)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Consoling payload details to simulate logging
    console.log("Contact form submission received:", validatedData);

    return NextResponse.json(
      { success: true, message: "Message Sent Successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal Server Error. Please try again." },
      { status: 500 }
    );
  }
}
