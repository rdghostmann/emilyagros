"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function PaymentCallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading")
  const [transactionData, setTransactionData] = useState<any>(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const reference = searchParams.get("reference")

    if (!reference) {
      setStatus("failed")
      return
    }

    // Verify payment with backend
    const verifyPayment = async () => {
      try {
        const response = await fetch(`/api/paystack/verify?reference=${reference}`)
        const data = await response.json()

        if (data.success) {
          setStatus("success")
          setTransactionData(data.data)
        } else {
          setStatus("failed")
        }
      } catch (error) {
        console.error("Payment verification error:", error)
        setStatus("failed")
      }
    }

    verifyPayment()
  }, [searchParams])

  if (status === "loading") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-green-600" />
              <h2 className="text-xl font-semibold mb-2">Verifying Payment</h2>
              <p className="text-gray-600">Please wait while we confirm your payment...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-green-600">Payment Successful!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Your payment has been processed successfully. The seller has been notified and will contact you soon.
              </p>

              {transactionData && (
                <div className="bg-gray-50 p-4 rounded-lg text-left">
                  <h3 className="font-semibold mb-2">Transaction Details</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span>₦{(transactionData.amount / 100).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reference:</span>
                      <span>{transactionData.reference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{new Date(transactionData.paid_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href="/orders">View Orders</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="/marketplace">Continue Shopping</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <CardTitle className="text-red-600">Payment Failed</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              We couldn't process your payment. Please try again or contact support if the problem persists.
            </p>

            <div className="flex gap-4">
              <Button asChild className="flex-1">
                <Link href="/payment">Try Again</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href="/marketplace">Back to Marketplace</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
