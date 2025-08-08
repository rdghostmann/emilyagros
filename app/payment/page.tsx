"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Shield, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function PaymentPage() {
  const [loading, setLoading] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Initialize payment with Paystack
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "buyer@example.com",
          amount: 25000, // Amount in Naira
          reference: `ref_${Date.now()}`,
          metadata: {
            product_id: "1",
            seller_id: "seller_123",
            buyer_id: "buyer_456",
          },
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to Paystack payment page
        window.location.href = data.authorization_url
      } else {
        toast("Failed to initialize payment")
      }
    } catch (error) {
      toast("Something went wrong. Please try again.")
    
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Complete Payment</h1>

        <div className="grid gap-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Premium Organic Rice - 50kg</span>
                  <span>₦25,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₦2,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₦27,000</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+234 800 123 4567" required />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-800">Secure Payment</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Your payment is secured by Paystack. We support cards, bank transfers, and mobile money.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                  {loading ? "Processing..." : "Pay ₦27,000"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Accepted Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <span className="text-sm">Cards</span>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="w-8 h-8 mx-auto mb-2 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <span className="text-sm">Bank Transfer</span>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="w-8 h-8 mx-auto mb-2 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span className="text-sm">Mobile Money</span>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="w-8 h-8 mx-auto mb-2 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">U</span>
                  </div>
                  <span className="text-sm">USSD</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
