import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, amount, reference, metadata } = body

    // Initialize Paystack payment
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Convert to kobo
        reference,
        metadata,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/callback`,
      }),
    })

    const data = await response.json()

    if (data.status) {
      return NextResponse.json({
        success: true,
        authorization_url: data.data.authorization_url,
        access_code: data.data.access_code,
        reference: data.data.reference,
      })
    } else {
      return NextResponse.json({ success: false, message: data.message }, { status: 400 })
    }
  } catch (error) {
    console.error("Paystack initialization error:", error)
    return NextResponse.json({ success: false, message: "Payment initialization failed" }, { status: 500 })
  }
}
