import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Scale, Phone, Mail, MapPin, Star, Users, Clock } from "lucide-react"

export default function LawyersPage() {
  const lawyers = [
    {
      name: "Advocate Sarah Mwangi",
      specialization: "Constitutional Law",
      experience: "12 years",
      location: "Nairobi",
      phone: "+254 722 123456",
      email: "s.mwangi@lawfirm.co.ke",
      rating: 4.9,
      cases: 150,
      description:
        "Specializes in human rights and constitutional matters. Extensive experience with protest-related cases.",
      languages: ["English", "Kiswahili"],
      availability: "Available",
    },
    {
      name: "Advocate John Kiprotich",
      specialization: "Criminal Defense",
      experience: "8 years",
      location: "Nairobi",
      phone: "+254 733 987654",
      email: "j.kiprotich@advocates.co.ke",
      rating: 4.7,
      cases: 89,
      description: "Expert in criminal defense and police misconduct cases. Pro-bono work for protesters.",
      languages: ["English", "Kiswahili", "Kalenjin"],
      availability: "Busy",
    },
    {
      name: "Advocate Grace Wanjiku",
      specialization: "Human Rights",
      experience: "15 years",
      location: "Mombasa",
      phone: "+254 711 456789",
      email: "g.wanjiku@humanrights.org",
      rating: 5.0,
      cases: 200,
      description: "Leading human rights advocate with focus on civil liberties and freedom of assembly.",
      languages: ["English", "Kiswahili"],
      availability: "Available",
    },
    {
      name: "Advocate David Ochieng",
      specialization: "Public Interest Law",
      experience: "10 years",
      location: "Kisumu",
      phone: "+254 720 654321",
      email: "d.ochieng@publiclaw.co.ke",
      rating: 4.8,
      cases: 120,
      description: "Focuses on public interest litigation and constitutional challenges.",
      languages: ["English", "Kiswahili", "Luo"],
      availability: "Available",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Nyuma
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Mawanasheria wa Bure</h1>
                  <p className="text-sm text-gray-600">Pro-Bono Legal Advocates</p>
                </div>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">🇰🇪 Kenya</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Info Section */}
        <Card className="mb-8 border-blue-200 bg-blue-50/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Scale className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-2">Msaada wa Kisheria wa Bure</h2>
                <p className="text-blue-800 mb-4">
                  These qualified advocates provide free legal services to protesters and activists. All lawyers are
                  verified members of the Law Society of Kenya (LSK).
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    Constitutional Law
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    Human Rights
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    Criminal Defense
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    Police Misconduct
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {lawyers.map((lawyer, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{lawyer.name}</CardTitle>
                      <CardDescription className="text-blue-700 font-medium">{lawyer.specialization}</CardDescription>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600">{lawyer.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-600">{lawyer.cases} cases</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      lawyer.availability === "Available"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }`}
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {lawyer.availability}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700">{lawyer.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <div className="font-medium text-gray-900">{lawyer.experience}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <div className="font-medium text-gray-900 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {lawyer.location}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-gray-500 text-sm">Languages:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {lawyer.languages.map((lang, langIndex) => (
                      <Badge key={langIndex} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <a href={`tel:${lawyer.phone}`} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Piga Simu
                    </Button>
                  </a>
                  <a href={`mailto:${lawyer.email}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 text-sm bg-transparent"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Aid Organizations */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mashirika ya Msaada wa Kisheria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-green-900 text-lg">Kituo Cha Sheria</CardTitle>
                <CardDescription className="text-green-700">Legal aid for the poor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-3 w-3 text-green-600" />
                    <a href="tel:+254202387409" className="text-green-800 hover:text-green-900">
                      020 2387409
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-green-600" />
                    <span className="text-green-800">Nairobi, Mombasa, Eldoret</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-purple-900 text-lg">FIDA Kenya</CardTitle>
                <CardDescription className="text-purple-700">Women's legal aid</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-3 w-3 text-purple-600" />
                    <a href="tel:+254202387508" className="text-purple-800 hover:text-purple-900">
                      020 2387508
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-purple-600" />
                    <span className="text-purple-800">Nationwide coverage</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-orange-900 text-lg">Legal Resources Foundation</CardTitle>
                <CardDescription className="text-orange-700">Public interest law</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-3 w-3 text-orange-600" />
                    <a href="tel:+254202719977" className="text-orange-800 hover:text-orange-900">
                      020 2719977
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-orange-600" />
                    <span className="text-orange-800">Nairobi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How to Get Help */}
        <Card className="mt-12 border-gray-200 bg-white/70">
          <CardHeader>
            <CardTitle className="text-gray-900">Jinsi ya Kupata Msaada</CardTitle>
            <CardDescription>How to get free legal assistance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">For Immediate Help:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Call any lawyer directly from the list above</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contact LSK for lawyer referrals: 020 3874481</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reach out to legal aid organizations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Prepare:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Details of your case or incident</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Any documentation or evidence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your contact information</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
