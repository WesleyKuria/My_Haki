import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, AlertTriangle, Shield, Users, MessageCircle } from "lucide-react"

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      name: "IPOA (Police Oversight)",
      description: "Independent Policing Oversight Authority - Report police misconduct",
      phone: "020 2270000",
      shortCode: "1195",
      available: "24/7",
      color: "red",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "Law Society of Kenya",
      description: "Legal assistance and lawyer referrals",
      phone: "020 3874481",
      email: "info@lsk.or.ke",
      available: "Mon-Fri 8AM-5PM",
      color: "blue",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: "My Rights Hotline",
      description: "Free legal advice and emergency assistance",
      phone: "0800 123456",
      available: "24/7",
      color: "green",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      name: "Emergency Services",
      description: "Police, Fire, Medical emergencies",
      phone: "999",
      shortCode: "112",
      available: "24/7",
      color: "orange",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
  ]

  const arrestedSteps = [
    {
      title: "Stay Calm",
      description: "Remain calm and do not resist arrest, even if you believe it's unlawful",
      icon: "🧘‍♂️",
    },
    {
      title: "Exercise Your Right to Silence",
      description: "Say: 'I am exercising my right to remain silent. I want to speak to a lawyer.'",
      icon: "🤐",
    },
    {
      title: "Ask for the Reason",
      description: "Politely ask: 'What am I being arrested for?' You have the right to know.",
      icon: "❓",
    },
    {
      title: "Request a Lawyer",
      description: "Immediately ask to contact a lawyer. This is your constitutional right.",
      icon: "⚖️",
    },
    {
      title: "Contact Family/Friends",
      description: "Ask to call a family member or friend to inform them of your situation.",
      icon: "📞",
    },
    {
      title: "Remember the 24-Hour Rule",
      description: "You must be released or taken to court within 24 hours of arrest.",
      icon: "⏰",
    },
  ]

  const protestRights = [
    {
      title: "Before Protesting",
      points: [
        "No permit required for peaceful assembly",
        "Inform someone of your plans and location",
        "Carry ID and emergency contacts",
        "Know your rights and local emergency numbers",
      ],
    },
    {
      title: "During Protests",
      points: [
        "Remain peaceful and non-violent",
        "Follow lawful police instructions",
        "Record interactions with police if safe to do so",
        "Stay with groups when possible",
      ],
    },
    {
      title: "If Police Intervene",
      points: [
        "Remain calm and don't run unless in immediate danger",
        "Ask if you're free to leave",
        "If detained, ask for the reason",
        "Request to contact a lawyer immediately",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Emergency Legal Help</h1>
                  <p className="text-sm text-gray-600">Immediate assistance when you need it most</p>
                </div>
              </div>
            </div>
            <Badge className="bg-red-100 text-red-800 border-red-200">🚨 24/7 Available</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Emergency Alert */}
        <Card className="mb-8 border-red-200 bg-red-50/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">Are You in Immediate Danger?</h2>
                <p className="text-red-800 mb-4">
                  If you are currently being arrested, detained, or experiencing police misconduct, call these numbers
                  immediately:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:1195">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Phone className="h-4 w-4 mr-2" />
                      IPOA: 1195
                    </Button>
                  </a>
                  <a href="tel:0800123456">
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      My Rights: 0800 123456
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card
                key={index}
                className={`border-${contact.color}-200 bg-${contact.color}-50/50 hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 bg-${contact.color}-100 rounded-xl flex items-center justify-center`}>
                      {contact.icon}
                    </div>
                    <Badge className={`bg-${contact.color}-100 text-${contact.color}-800 border-${contact.color}-200`}>
                      {contact.available}
                    </Badge>
                  </div>
                  <CardTitle className={`text-${contact.color}-900`}>{contact.name}</CardTitle>
                  <CardDescription className={`text-${contact.color}-700`}>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Phone:</span>
                      <a
                        href={`tel:${contact.phone}`}
                        className={`text-lg font-bold text-${contact.color}-600 hover:text-${contact.color}-700`}
                      >
                        {contact.phone}
                      </a>
                    </div>

                    {contact.shortCode && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Short Code:</span>
                        <a
                          href={`tel:${contact.shortCode}`}
                          className={`text-lg font-bold text-${contact.color}-600 hover:text-${contact.color}-700`}
                        >
                          {contact.shortCode}
                        </a>
                      </div>
                    )}

                    {contact.email && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Email:</span>
                        <a
                          href={`mailto:${contact.email}`}
                          className={`text-sm text-${contact.color}-600 hover:text-${contact.color}-700`}
                        >
                          {contact.email}
                        </a>
                      </div>
                    )}

                    <div className="pt-2">
                      <a href={`tel:${contact.phone}`}>
                        <Button className={`w-full bg-${contact.color}-600 hover:bg-${contact.color}-700`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What to Do If Arrested */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Do If You're Arrested</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arrestedSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Protest Safety Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Protest Safety Guide</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {protestRights.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <Card className="border-gray-200 bg-white/70">
          <CardHeader>
            <CardTitle className="text-gray-900">Additional Resources</CardTitle>
            <CardDescription>Other organizations and resources that can help</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Human Rights Organizations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Kenya Human Rights Commission</span>
                    <a href="tel:0202444227" className="text-blue-600 hover:text-blue-700 text-sm">
                      020 2444227
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Amnesty International Kenya</span>
                    <a href="tel:0202721262" className="text-blue-600 hover:text-blue-700 text-sm">
                      020 2721262
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Article 19 Eastern Africa</span>
                    <a href="tel:0203862230" className="text-blue-600 hover:text-blue-700 text-sm">
                      020 3862230
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Legal Aid Organizations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Kituo Cha Sheria</span>
                    <a href="tel:0202387295" className="text-blue-600 hover:text-blue-700 text-sm">
                      020 2387295
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Federation of Women Lawyers</span>
                    <a href="tel:0202444289" className="text-blue-600 hover:text-blue-700 text-sm">
                      020 2444289
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Legal Resources Foundation</span>
                    <a href="tel:0202719977" className="text-blue-600 hover:text-blue-700 text-sm">
                      020 2719977
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-help" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Users className="h-4 w-4 mr-2" />
                    Get a Lawyer
                  </Button>
                </Link>
                <Link href="/chat" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Legal Assistant
                  </Button>
                </Link>
                <Link href="/rights" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Shield className="h-4 w-4 mr-2" />
                    Know Your Rights
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
