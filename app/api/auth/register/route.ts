import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import UserAsset from "@/models/UserAsset";
import { connectToDB } from "@/lib/connectDB";

export async function POST(req) {
  try {
    await connectToDB();

    const {
      username,
      firstName,
      lastName,
      phone,
      email,
      password,
      city,
      state,
    } = await req.json();

    if (!username || !firstName || !lastName || !phone || !email || !password || !city || !state ) {
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
      city: city || "",
      state: state || "",
    });

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { message: "Registration failed", error: err.message },
      { status: 500 }
    );
  }
}