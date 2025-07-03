import { type NextRequest, NextResponse } from "next/server"

// Mock lawyer database - in production, this would be stored in a real database
const lawyers = [
  {
    id: 1,
    name: "Advocate Sarah Wanjiku",
    phone: "+254 722 123456",
    email: "s.wanjiku@legalaid.co.ke",
    specialization: "Constitutional Law & Human Rights",
    experience: 8,
    location: "Nairobi",
    county: "nairobi",
    bar_number: "LSK/A/2015/001234",
    expertise: ["constitutional rights", "police misconduct", "protest rights"],
    available: true,
  },
  {
    id: 2,
    name: "Advocate John Mwangi",
    phone: "+254 733 234567",
    email: "j.mwangi@rightslawyers.co.ke",
    specialization: "Criminal Defense & Civil Rights",
    experience: 12,
    location: "Nairobi",
    county: "nairobi",
    bar_number: "LSK/A/2011/005678",
    expertise: ["criminal defense", "detention rights", "bail applications"],
    available: true,
  },
  {
    id: 3,
    name: "Advocate Grace Akinyi",
    phone: "+254 744 345678",
    email: "g.akinyi@publicdefense.co.ke",
    specialization: "Public Interest Law",
    experience: 6,
    location: "Kisumu",
    county: "kisumu",
    bar_number: "LSK/A/2017/009012",
    expertise: ["public interest", "constitutional rights", "assembly rights"],
    available: true,
  },
  {
    id: 4,
    name: "Advocate Michael Kiprotich",
    phone: "+254 755 456789",
    email: "m.kiprotich@legalservices.co.ke",
    specialization: "Human Rights & Constitutional Law",
    experience: 10,
    location: "Eldoret",
    county: "eldoret",
    bar_number: "LSK/A/2013/003456",
    expertise: ["human rights", "police accountability", "protest law"],
    available: true,
  },
  {
    id: 5,
    name: "Advocate Fatuma Hassan",
    phone: "+254 766 567890",
    email: "f.hassan@coastallegal.co.ke",
    specialization: "Constitutional & Administrative Law",
    experience: 9,
    location: "Mombasa",
    county: "mombasa",
    bar_number: "LSK/A/2014/007890",
    expertise: ["constitutional law", "administrative justice", "detention rights"],
    available: true,
  },
  {
    id: 6,
    name: "Advocate Peter Kamau",
    phone: "+254 777 678901",
    email: "p.kamau@rightsfirst.co.ke",
    specialization: "Criminal Law & Human Rights",
    experience: 15,
    location: "Nakuru",
    county: "nakuru",
    bar_number: "LSK/A/2008/001122",
    expertise: ["criminal law", "police misconduct", "bail hearings"],
    available: true,
  },
  {
    id: 7,
    name: "Advocate Mary Njeri",
    phone: "+254 788 789012",
    email: "m.njeri@constitutionallaw.co.ke",
    specialization: "Constitutional Rights & Public Law",
    experience: 7,
    location: "Thika",
    county: "thika",
    bar_number: "LSK/A/2016/004567",
    expertise: ["constitutional rights", "public law", "assembly rights"],
    available: true,
  },
  {
    id: 8,
    name: "Advocate David Ochieng",
    phone: "+254 799 890123",
    email: "d.ochieng@legaldefense.co.ke",
    specialization: "Criminal Defense & Civil Liberties",
    experience: 11,
    location: "Kisumu",
    county: "kisumu",
    bar_number: "LSK/A/2012/008901",
    expertise: ["criminal defense", "civil liberties", "detention law"],
    available: true,
  },
  {
    id: 9,
    name: "Advocate Rebecca Chepkemoi",
    phone: "+254 700 901234",
    email: "r.chepkemoi@humanrights.co.ke",
    specialization: "Human Rights & Gender Law",
    experience: 5,
    location: "Eldoret",
    county: "eldoret",
    bar_number: "LSK/A/2018/012345",
    expertise: ["human rights", "gender law", "police accountability"],
    available: true,
  },
  {
    id: 10,
    name: "Advocate James Mutua",
    phone: "+254 711 012345",
    email: "j.mutua@publicinterest.co.ke",
    specialization: "Public Interest & Constitutional Law",
    experience: 13,
    location: "Nairobi",
    county: "nairobi",
    bar_number: "LSK/A/2010/006789",
    expertise: ["public interest", "constitutional law", "protest rights"],
    available: true,
  },
  {
    id: 11,
    name: "Advocate Amina Mohamed",
    phone: "+254 722 123457",
    email: "a.mohamed@coastalrights.co.ke",
    specialization: "Constitutional Law & Administrative Justice",
    experience: 8,
    location: "Mombasa",
    county: "mombasa",
    bar_number: "LSK/A/2015/009876",
    expertise: ["constitutional law", "administrative justice", "civil rights"],
    available: true,
  },
  {
    id: 12,
    name: "Advocate Samuel Kiplagat",
    phone: "+254 733 234568",
    email: "s.kiplagat@legalaid.co.ke",
    specialization: "Criminal Law & Human Rights",
    experience: 9,
    location: "Nakuru",
    county: "nakuru",
    bar_number: "LSK/A/2014/005432",
    expertise: ["criminal law", "human rights", "detention rights"],
    available: true,
  },
  {
    id: 13,
    name: "Advocate Lucy Wambui",
    phone: "+254 744 345679",
    email: "l.wambui@constitutionalrights.co.ke",
    specialization: "Constitutional Rights & Public Law",
    experience: 6,
    location: "Thika",
    county: "thika",
    bar_number: "LSK/A/2017/007654",
    expertise: ["constitutional rights", "public law", "police misconduct"],
    available: true,
  },
  {
    id: 14,
    name: "Advocate Robert Otieno",
    phone: "+254 755 456780",
    email: "r.otieno@legaldefenders.co.ke",
    specialization: "Criminal Defense & Civil Rights",
    experience: 14,
    location: "Kisumu",
    county: "kisumu",
    bar_number: "LSK/A/2009/003210",
    expertise: ["criminal defense", "civil rights", "bail applications"],
    available: true,
  },
  {
    id: 15,
    name: "Advocate Catherine Muthoni",
    phone: "+254 766 567891",
    email: "c.muthoni@rightslegal.co.ke",
    specialization: "Human Rights & Constitutional Law",
    experience: 10,
    location: "Nairobi",
    county: "nairobi",
    bar_number: "LSK/A/2013/008765",
    expertise: ["human rights", "constitutional law", "assembly rights"],
    available: true,
  },
]

function assignLawyer(formData: any) {
  // Filter lawyers by location preference
  let availableLawyers = lawyers.filter(
    (lawyer) => lawyer.available && (lawyer.county === formData.county || formData.county === "other"),
  )

  // If no lawyers in specific county, expand to all available
  if (availableLawyers.length === 0) {
    availableLawyers = lawyers.filter((lawyer) => lawyer.available)
  }

  // Prioritize by urgency and expertise
  const urgencyWeight = {
    emergency: 3,
    urgent: 2,
    normal: 1,
  }

  // Score lawyers based on relevance
  const scoredLawyers = availableLawyers.map((lawyer) => {
    let score = 0

    // Base score from experience
    score += lawyer.experience

    // Bonus for relevant expertise
    const caseDescription = formData.caseDescription.toLowerCase()
    lawyer.expertise.forEach((expertise) => {
      if (caseDescription.includes(expertise.replace(" ", ""))) {
        score += 10
      }
    })

    // Location preference bonus
    if (lawyer.county === formData.county) {
      score += 5
    }

    return { ...lawyer, score }
  })

  // Sort by score (highest first) and return top match
  scoredLawyers.sort((a, b) => b.score - a.score)
  return scoredLawyers[0]
}

function getEstimatedResponseTime(urgencyLevel: string): string {
  switch (urgencyLevel) {
    case "emergency":
      return "30 minutes - 2 hours"
    case "urgent":
      return "2 - 8 hours"
    case "normal":
      return "8 - 24 hours"
    default:
      return "24 hours"
  }
}

function generateCaseId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substr(2, 5)
  return `MR-${timestamp}-${random}`.toUpperCase()
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = [
      "fullName",
      "idNumber",
      "phoneNumber",
      "nextOfKinName",
      "nextOfKinPhone",
      "county",
      "urgencyLevel",
      "caseDescription",
    ]
    const missingFields = requiredFields.filter((field) => !formData[field])

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 },
      )
    }

    // Assign a lawyer
    const assignedLawyer = assignLawyer(formData)

    if (!assignedLawyer) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No lawyers available at the moment. Please call our emergency line at 0800 123456 or IPOA at 1195 for immediate assistance.",
        },
        { status: 503 },
      )
    }

    // Generate case ID and response time
    const caseId = generateCaseId()
    const estimatedResponseTime = getEstimatedResponseTime(formData.urgencyLevel)

    // In a real application, you would:
    // 1. Save the case to database
    // 2. Send notifications to the lawyer
    // 3. Send confirmation SMS/email to client
    // 4. Create case tracking record

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: `Your request has been successfully submitted and assigned to ${assignedLawyer.name}. They will contact you within ${estimatedResponseTime}.`,
      lawyer: {
        name: assignedLawyer.name,
        phone: assignedLawyer.phone,
        email: assignedLawyer.email,
        specialization: assignedLawyer.specialization,
        experience: assignedLawyer.experience,
        location: assignedLawyer.location,
        bar_number: assignedLawyer.bar_number,
      },
      caseId,
      estimatedResponseTime,
    })
  } catch (error) {
    console.error("Error assigning lawyer:", error)
    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while processing your request. Please try again or call our emergency line at 0800 123456.",
      },
      { status: 500 },
    )
  }
}
