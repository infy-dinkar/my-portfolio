import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Please provide all fields" },
                { status: 400 }
            );
        }

        const contact = await Contact.create({ name, email, message });

        return NextResponse.json(
            { success: true, data: contact },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return NextResponse.json(
            { error: "Failed to submit form" },
            { status: 500 }
        );
    }
}
