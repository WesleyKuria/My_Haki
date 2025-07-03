import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Scale, MessageCircle, Phone, BookOpen, Users, Shield, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-xl flex items-center justify-center">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">My Haki</h1>
                <p className="text-sm text-gray-600">Know Your Constitutional Rights</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">🇰🇪 Kenya</Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Constitutional Rights,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600">
                Protected
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Access free legal assistance, understand your rights during protests, and get immediate help when you need
              it most. Built for Kenyans with love 🫶🏾.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/emergency">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Emergency Help
                </Button>
              </Link>
              <Link href="/get-help">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Get a Lawyer
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/protest-crowd.avif"
                    alt="Kenyan protesters exercising their right to peaceful assembly"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/flag-protesters.jpeg"
                    alt="Protesters with Kenyan flag"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/youth-protest.jpeg"
                    alt="Young Kenyans marching for their rights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/nairobi-protest.jpeg"
                    alt="Large protest gathering in Nairobi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">How We Can Help You</h3>
          <p className="text-lg text-gray-600">Comprehensive legal support for every Kenyan citizen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Get a Lawyer */}
          <Link href="/get-help">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">Get a Lawyer</CardTitle>
                <CardDescription className="text-blue-700">Connect with pro-bono legal representation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Free legal assistance from qualified LSK lawyers for constitutional rights cases
                </p>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Request Lawyer</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Legal Assistant */}
          <Link href="/chat">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-900">Legal Assistant</CardTitle>
                <CardDescription className="text-green-700">AI-powered legal guidance and advice</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Get instant answers about your constitutional rights and legal procedures
                </p>
                <div className="flex items-center justify-center text-green-600 group-hover:text-green-700">
                  <span className="text-sm font-medium">Start Chat</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Emergency Support */}
          <Link href="/emergency">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-900">Emergency Support</CardTitle>
                <CardDescription className="text-red-700">24/7 immediate legal assistance</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Immediate help during arrests, detention, or police encounters
                </p>
                <div className="flex items-center justify-center text-red-600 group-hover:text-red-700">
                  <span className="text-sm font-medium">Get Help Now</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Know Your Rights */}
          <Link href="/rights">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-900">Your Rights</CardTitle>
                <CardDescription className="text-purple-700">Constitutional rights and freedoms</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Learn about your rights during protests, arrests, and police interactions
                </p>
                <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Protest Rights Section */}
      <div className="bg-white/50 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Your Right to Peaceful Protest</h3>
              <p className="text-lg text-gray-600 mb-6">
                Article 37 of the Kenyan Constitution guarantees every citizen the right to peaceful assembly,
                demonstration, and petition. These images show Kenyans exercising these fundamental rights.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Permit Required</h4>
                    <p className="text-sm text-gray-600">You can protest peacefully without government permission</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Protected Expression</h4>
                    <p className="text-sm text-gray-600">Carry flags, banners, and express your views freely</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Police Accountability</h4>
                    <p className="text-sm text-gray-600">Police must respect your rights and use minimum force</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/rights">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Learn Your Rights
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/government-march.webp"
                  alt="Peaceful protesters marching in Nairobi exercising their constitutional rights"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    Kenyans exercising their constitutional right to peaceful assembly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Need Immediate Help?</h3>
          </div>
          <p className="text-red-100 mb-6 text-lg">
            If you're being arrested, detained, or experiencing police misconduct, get help now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254202270000">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="h-5 w-5 mr-2" />
                Call IPOA: 020 2270000
              </Button>
            </a>
            <Link href="/emergency">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View All Emergency Contacts
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
                  <Scale className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-lg font-bold">My Rights</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering Kenyan citizens with knowledge of their constitutional rights and access to legal assistance.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <Link href="/get-help" className="block text-gray-400 hover:text-white text-sm">
                  Get a Lawyer
                </Link>
                <Link href="/chat" className="block text-gray-400 hover:text-white text-sm">
                  Legal Assistant
                </Link>
                <Link href="/emergency" className="block text-gray-400 hover:text-white text-sm">
                  Emergency Help
                </Link>
                <Link href="/rights" className="block text-gray-400 hover:text-white text-sm">
                  Your Rights
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Emergency Contacts</h5>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">
                  <strong className="text-white">IPOA:</strong> 020 2270000
                </div>
                <div className="text-gray-400">
                  <strong className="text-white">LSK:</strong> 020 3874481
                </div>
                <div className="text-gray-400">
                  <strong className="text-white">Police:</strong> 999
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 My Rights. Built for the people of Kenya. Know your rights, exercise them responsibly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
