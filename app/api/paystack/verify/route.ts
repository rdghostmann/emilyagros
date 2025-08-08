import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get("reference")

    if (!reference) {
      return NextResponse.json({ success: false, message: "Reference is required" }, { status: 400 })
    }

    // Verify payment with Paystack
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    })

    const data = await response.json()

    if (data.status && data.data.status === "success") {
      // Payment successful - update database, send notifications, etc.
      return NextResponse.json({
        success: true,
        data: data.data,
        message: "Payment verified successfully",
      })
    } else {
      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 })
    }
  } catch (error) {
    console.error("Paystack verification error:", error)
    return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 500 })
  }
}
