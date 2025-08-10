import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connectToDB } from "@/lib/connectDB";

export async function POST(req:any) {
  try {
    await connectToDB();

    const {
      username,
      firstName,
      lastName,
      phone,
      email,
      password
    } = await req.json();

    if (!username || !firstName || !lastName || !phone || !email || !password ) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userID: Date.now().toString(),
      username,
      firstName: firstName || "",
      lastName: lastName || "",
      phone,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (err:any) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { message: "Registration failed", error: err.message },
      { status: 500 }
    );
  }
}