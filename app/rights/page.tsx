import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Scale, Shield, Users, BookOpen, AlertTriangle, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function RightsPage() {
  const constitutionalRights = [
    {
      article: "Article 37",
      title: "Right to Assembly",
      swahili: "Haki ya Kukusanyika",
      description:
        "Every person has the right, peaceably and unarmed, to assemble, to demonstrate, to picket, and to present petitions to public authorities.",
      keyPoints: [
        "Right to peaceful assembly and demonstration",
        "Right to picket and present petitions",
        "Must be peaceful and unarmed",
        "Cannot be restricted without just cause",
      ],
      color: "green",
    },
    {
      article: "Article 49",
      title: "Rights of Arrested Persons",
      swahili: "Haki za Watu Waliokamatwa",
      description:
        "An arrested person has the right to remain silent and to be informed promptly of the right to remain silent and of the consequences of not remaining silent.",
      keyPoints: [
        "Right to remain silent",
        "Right to be informed of reason for arrest",
        "Right to communicate with advocate and family",
        "Right to be released on bond or bail",
      ],
      color: "blue",
    },
    {
      article: "Article 29",
      title: "Freedom and Security of Person",
      swahili: "Uhuru na Usalama wa Mtu",
      description:
        "Every person has the right to freedom and security of the person, which includes the right not to be deprived of freedom arbitrarily or without just cause.",
      keyPoints: [
        "Right to freedom and security",
        "Protection from arbitrary detention",
        "Right not to be detained without just cause",
        "Protection from torture and cruel treatment",
      ],
      color: "purple",
    },
    {
      article: "Article 50",
      title: "Right to Fair Hearing",
      swahili: "Haki ya Kusikilizwa",
      description:
        "Every person has the right to have any dispute that can be resolved by the application of law decided in a fair and public hearing by a court or, where appropriate, another independent and impartial tribunal or body.",
      keyPoints: [
        "Right to fair and public hearing",
        "Right to independent and impartial tribunal",
        "Right to legal representation",
        "Right to adequate time to prepare defense",
      ],
      color: "orange",
    },
  ]

  const protestRights = [
    {
      title: "Before the Protest",
      icon: <Users className="h-5 w-5" />,
      rights: [
        "No permit required for peaceful assembly",
        "Right to organize and mobilize",
        "Freedom to choose location and time",
        "Right to invite others to participate",
      ],
    },
    {
      title: "During the Protest",
      icon: <Shield className="h-5 w-5" />,
      rights: [
        "Right to peaceful demonstration",
        "Right to carry placards and banners",
        "Right to chant and sing",
        "Right to record police interactions",
      ],
    },
    {
      title: "Police Interaction",
      icon: <AlertTriangle className="h-5 w-5" />,
      rights: [
        "Police must use minimum force",
        "Right to know officer's identity",
        "Right to peaceful dispersal if ordered",
        "Right to report police misconduct",
      ],
    },
    {
      title: "If Arrested",
      icon: <Scale className="h-5 w-5" />,
      rights: [
        "Right to know reason for arrest",
        "Right to remain silent",
        "Right to legal representation",
        "Right to be released within 24 hours if not charged",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100">
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
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Your Constitutional Rights</h1>
                  <p className="text-sm text-gray-600">Know your rights, exercise them responsibly</p>
                </div>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">🇰🇪 Kenya</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section with Real Protest Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Constitution of Kenya 2010</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Constitution guarantees fundamental rights and freedoms to all citizens. These rights protect your
                ability to protest, assemble, and express your views peacefully - as demonstrated by thousands of
                Kenyans exercising these rights.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Bill of Rights
                </Badge>
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Chapter 4
                </Badge>
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Articles 19-59
                </Badge>
              </div>
              <Link href="/emergency">
                <Button className="bg-green-600 hover:bg-green-700">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Need Emergency Help?
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/protest-crowd.avif"
                    alt="Kenyan citizens exercising their right to peaceful assembly"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/flag-protesters.jpeg"
                    alt="Protesters proudly displaying the Kenyan flag"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/youth-protest.jpeg"
                    alt="Young Kenyans marching for their constitutional rights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/nairobi-protest.jpeg"
                    alt="Large peaceful gathering in downtown Nairobi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Constitutional Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fundamental Constitutional Rights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {constitutionalRights.map((right, index) => (
              <Card
                key={index}
                className={`border-${right.color}-200 bg-${right.color}-50/50 hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge className={`bg-${right.color}-100 text-${right.color}-800 border-${right.color}-200`}>
                      {right.article}
                    </Badge>
                    <Scale className={`h-5 w-5 text-${right.color}-600`} />
                  </div>
                  <CardTitle className={`text-${right.color}-900 text-lg`}>{right.title}</CardTitle>
                  <CardDescription className={`text-${right.color}-700 font-medium text-sm`}>
                    {right.swahili}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm text-${right.color}-800 mb-4`}>{right.description}</p>
                  <div className="space-y-2">
                    <h4 className={`font-medium text-${right.color}-900 text-sm`}>Key Protections:</h4>
                    <ul className="space-y-1">
                      {right.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2">
                          <CheckCircle className={`h-3 w-3 text-${right.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className={`text-xs text-${right.color}-800`}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Protest Rights Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights During Protests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protestRights.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      {section.icon}
                    </div>
                    <CardTitle className="text-blue-900">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rights.map((right, rightIndex) => (
                      <li key={rightIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{right}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real Protest Example */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/images/government-march.webp"
                alt="Peaceful protesters exercising their constitutional rights in Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Peaceful Assembly in Action</h3>
              <p className="text-gray-600 mb-4">
                This image shows Kenyan citizens peacefully exercising their Article 37 rights. Notice how protesters
                are displaying the national flag, demonstrating their patriotism while advocating for change.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Peaceful and unarmed assembly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Expressing views through banners and flags</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Exercising constitutional rights responsibly</span>
                </div>
              </div>
              <Link href="/get-help">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Users className="h-4 w-4 mr-2" />
                  Get Legal Support
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Know Your Rights Checklist */}
        <Card className="mb-12 border-gray-200 bg-white/70">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Your Rights Checklist
            </CardTitle>
            <CardDescription>Essential rights every protester should know</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✅ You CAN:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protest peacefully without a permit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Record police interactions in public</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Remain silent if arrested</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Request a lawyer immediately</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Carry placards and banners</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">❌ Police CANNOT:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Use excessive force on peaceful protesters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Detain you for more than 24 hours without charges</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Prevent you from contacting a lawyer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Force you to speak or confess</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Stop you from recording in public spaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline of Rights */}
        <Card className="border-gray-200 bg-white/70">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              Timeline of Your Rights During Arrest
            </CardTitle>
            <CardDescription>What happens and what rights you have at each stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-red-600">0h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">At Time of Arrest</h4>
                  <p className="text-sm text-gray-600">
                    Right to know reason for arrest, right to remain silent, right to contact lawyer
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-orange-600">4h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">After 4 Hours</h4>
                  <p className="text-sm text-gray-600">
                    Police should have contacted your family/lawyer, basic needs must be met
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-yellow-600">24h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">After 24 Hours</h4>
                  <p className="text-sm text-gray-600">
                    Must be released OR taken to court, cannot be held longer without charges
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">In Court</h4>
                  <p className="text-sm text-gray-600">
                    Right to bail/bond, right to legal representation, right to fair hearing
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
