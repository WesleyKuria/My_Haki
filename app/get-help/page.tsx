"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Users, Phone, MapPin, Clock, AlertTriangle, CheckCircle, Scale, Shield } from "lucide-react"

interface LawyerAssignment {
  success: boolean
  lawyer?: {
    name: string
    phone: string
    email: string
    specialization: string
    experience: number
    location: string
    bar_number: string
  }
  estimatedResponseTime?: string
  caseId?: string
  message: string
}

export default function GetHelpPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [assignment, setAssignment] = useState<LawyerAssignment | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phoneNumber: "",
    nextOfKinName: "",
    nextOfKinPhone: "",
    county: "",
    specificLocation: "",
    urgencyLevel: "",
    caseDescription: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/assign-lawyer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      setAssignment(result)
    } catch (error) {
      console.error("Error submitting form:", error)
      setAssignment({
        success: false,
        message: "Failed to submit request. Please try again or call our emergency line.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (assignment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="bg-white/80 backdrop-blur-sm border-b border-green-100">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Request Submitted</h1>
                  <p className="text-sm text-gray-600">Your legal assistance request has been processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {assignment.success ? (
            <div className="space-y-6">
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-green-900 mb-2">Lawyer Assigned Successfully!</h2>
                      <p className="text-green-800 mb-4">{assignment.message}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge className="bg-green-100 text-green-800">Case ID: {assignment.caseId}</Badge>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-green-600" />
                          <span className="text-green-700">Response: {assignment.estimatedResponseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {assignment.lawyer && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Scale className="h-5 w-5 text-blue-600" />
                      <span>Your Assigned Lawyer</span>
                    </CardTitle>
                    <CardDescription>Contact your lawyer immediately for assistance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Lawyer Name</Label>
                          <p className="text-lg font-semibold text-gray-900">{assignment.lawyer.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Specialization</Label>
                          <p className="text-gray-900">{assignment.lawyer.specialization}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Experience</Label>
                          <p className="text-gray-900">{assignment.lawyer.experience} years</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">LSK Bar Number</Label>
                          <p className="text-gray-900">{assignment.lawyer.bar_number}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Phone Number</Label>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-green-600" />
                            <a
                              href={`tel:${assignment.lawyer.phone}`}
                              className="text-lg font-semibold text-green-600 hover:text-green-700"
                            >
                              {assignment.lawyer.phone}
                            </a>
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Email</Label>
                          <p className="text-gray-900">{assignment.lawyer.email}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-gray-700">Location</Label>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-600" />
                            <span className="text-gray-900">{assignment.lawyer.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                      <a href={`tel:${assignment.lawyer.phone}`} className="flex-1">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                      <a href={`mailto:${assignment.lawyer.email}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          Send Email
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">Contact Your Lawyer</h4>
                        <p className="text-sm text-blue-800">
                          Call or email your assigned lawyer immediately to discuss your case
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">Prepare Your Documents</h4>
                        <p className="text-sm text-blue-800">
                          Gather any relevant documents, evidence, or witness information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900">Follow Legal Advice</h4>
                        <p className="text-sm text-blue-800">
                          Your lawyer will guide you through the legal process and next steps
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-red-900 mb-2">Request Failed</h2>
                    <p className="text-red-800 mb-4">{assignment.message}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button onClick={() => setAssignment(null)} className="bg-red-600 hover:bg-red-700">
                        Try Again
                      </Button>
                      <Link href="/emergency">
                        <Button variant="outline" className="border-red-600 text-red-600 bg-transparent">
                          Emergency Contacts
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Get Legal Help</h1>
                  <p className="text-sm text-gray-600">Connect with pro-bono legal representation</p>
                </div>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">🇰🇪 Free Service</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-900 mb-1">Free Legal Aid</h3>
              <p className="text-sm text-green-800">No cost for constitutional rights cases</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-900 mb-1">Quick Response</h3>
              <p className="text-sm text-blue-800">Lawyers respond within 2-24 hours</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardContent className="p-4 text-center">
              <Scale className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-900 mb-1">LSK Qualified</h3>
              <p className="text-sm text-purple-800">All lawyers are LSK certified</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Request Legal Assistance</CardTitle>
            <CardDescription>
              Fill out this form to be connected with a qualified lawyer who can help with your constitutional rights
              case. All information is confidential and secure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="idNumber">ID Number *</Label>
                    <Input
                      id="idNumber"
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange("idNumber", e.target.value)}
                      placeholder="Enter your ID number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    placeholder="+254 7XX XXX XXX"
                    required
                  />
                </div>
              </div>

              {/* Next of Kin */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Emergency Contact</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nextOfKinName">Next of Kin Name *</Label>
                    <Input
                      id="nextOfKinName"
                      value={formData.nextOfKinName}
                      onChange={(e) => handleInputChange("nextOfKinName", e.target.value)}
                      placeholder="Emergency contact name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="nextOfKinPhone">Next of Kin Phone *</Label>
                    <Input
                      id="nextOfKinPhone"
                      type="tel"
                      value={formData.nextOfKinPhone}
                      onChange={(e) => handleInputChange("nextOfKinPhone", e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Location</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="county">County *</Label>
                    <Select value={formData.county} onValueChange={(value) => handleInputChange("county", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your county" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nairobi">Nairobi</SelectItem>
                        <SelectItem value="mombasa">Mombasa</SelectItem>
                        <SelectItem value="kisumu">Kisumu</SelectItem>
                        <SelectItem value="nakuru">Nakuru</SelectItem>
                        <SelectItem value="eldoret">Uasin Gishu (Eldoret)</SelectItem>
                        <SelectItem value="thika">Kiambu (Thika)</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specificLocation">Specific Location</Label>
                    <Input
                      id="specificLocation"
                      value={formData.specificLocation}
                      onChange={(e) => handleInputChange("specificLocation", e.target.value)}
                      placeholder="Area, estate, or landmark"
                    />
                  </div>
                </div>
              </div>

              {/* Case Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Case Information</h3>

                <div>
                  <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                  <Select
                    value={formData.urgencyLevel}
                    onValueChange={(value) => handleInputChange("urgencyLevel", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="How urgent is your case?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">🚨 Emergency (Arrested/Detained)</SelectItem>
                      <SelectItem value="urgent">⚡ Urgent (Court date within 7 days)</SelectItem>
                      <SelectItem value="normal">📋 Normal (General consultation)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="caseDescription">Case Description *</Label>
                  <Textarea
                    id="caseDescription"
                    value={formData.caseDescription}
                    onChange={(e) => handleInputChange("caseDescription", e.target.value)}
                    placeholder="Describe your legal issue, including any violations of your constitutional rights, police misconduct, or other relevant details..."
                    rows={5}
                    required
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Include details about: arrests, police conduct, protest-related issues, detention, or other
                    constitutional rights violations
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <Card className="border-yellow-200 bg-yellow-50/50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <h4 className="font-semibold text-yellow-900 mb-1">Important Information</h4>
                      <ul className="text-yellow-800 space-y-1">
                        <li>• This service is provided free of charge for constitutional rights cases</li>
                        <li>• Your information will be shared only with your assigned lawyer</li>
                        <li>• For immediate emergencies, call IPOA: 020 2270000</li>
                        <li>• Response time depends on urgency and lawyer availability</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Users className="h-4 w-4 mr-2" />
                      Request Legal Help
                    </>
                  )}
                </Button>

                <Link href="/emergency">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Emergency Help
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
