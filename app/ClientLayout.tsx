"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Scale, MessageCircle, Phone, Menu, X } from "lucide-react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-kenya-red sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-kenya-red" />
                <span className="text-2xl font-bold text-kenya-black">My Haki</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/rights" className="text-kenya-black hover:text-kenya-red transition-colors">
                <Scale className="inline h-4 w-4 mr-1" />
                Your Rights
              </Link>
              <Link href="/lawyers" className="text-kenya-black hover:text-kenya-red transition-colors">
                <Shield className="inline h-4 w-4 mr-1" />
                Find Lawyers
              </Link>
              <Link href="/get-help" className="text-kenya-black hover:text-kenya-red transition-colors">
                <MessageCircle className="inline h-4 w-4 mr-1" />
                Get Help
              </Link>
              <Link href="/emergency">
                <Button className="bg-kenya-red hover:bg-red-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/rights"
                className="block px-3 py-2 text-kenya-black hover:text-kenya-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Scale className="inline h-4 w-4 mr-2" />
                Your Rights
              </Link>
              <Link
                href="/lawyers"
                className="block px-3 py-2 text-kenya-black hover:text-kenya-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="inline h-4 w-4 mr-2" />
                Find Lawyers
              </Link>
              <Link
                href="/get-help"
                className="block px-3 py-2 text-kenya-black hover:text-kenya-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="inline h-4 w-4 mr-2" />
                Get Help
              </Link>
              <Link href="/emergency" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-kenya-red hover:bg-red-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-kenya-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-kenya-red" />
                <span className="text-2xl font-bold">My Haki</span>
              </div>
              <p className="text-gray-300 mb-4">
                Empowering Kenyans with knowledge of their constitutional rights and access to legal assistance.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-2 bg-kenya-black"></div>
                <div className="w-8 h-2 bg-white"></div>
                <div className="w-8 h-2 bg-kenya-red"></div>
                <div className="w-8 h-2 bg-kenya-green"></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/rights" className="text-gray-300 hover:text-white transition-colors">
                    Your Rights
                  </Link>
                </li>
                <li>
                  <Link href="/lawyers" className="text-gray-300 hover:text-white transition-colors">
                    Find Lawyers
                  </Link>
                </li>
                <li>
                  <Link href="/get-help" className="text-gray-300 hover:text-white transition-colors">
                    Get Help
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="text-gray-300 hover:text-white transition-colors">
                    Emergency
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Police: 999 / 911</li>
                <li>LSK Helpline: 0709 677 000</li>
                <li>KNCHR: 0800 720 627</li>
                <li>Judiciary: 0800 221 349</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 My Haki Platform. Empowering Kenyans with constitutional knowledge.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
