import { type NextRequest, NextResponse } from "next/server"

// Mock legal knowledge base - in production, this would be stored in Upstash Vector
const legalKnowledge = [
  {
    topic: "Article 37 - Right to Assembly",
    content: `Article 37 of the Constitution of Kenya 2010 guarantees every person the right to assemble, demonstrate, picket, and petition peacefully and unarmed. Key points:

• No permit required for peaceful assembly
• Must be peaceful and unarmed
• Right to demonstrate and picket
• Right to present petitions to public authorities
• Police cannot stop peaceful protests without just cause
• Protesters can carry banners, flags, and placards
• Right to choose time and location (within reason)`,
  },
  {
    topic: "Article 49 - Rights of Arrested Persons",
    content: `Article 49 protects the rights of arrested persons:

• Right to remain silent
• Right to be informed promptly of the right to remain silent
• Right to be informed of the reason for arrest
• Right to communicate with an advocate and family member
• Right to be released on bond or bail unless compelling reasons exist
• Right not to be compelled to make any confession or admission
• Must be brought before a court within 24 hours (excluding weekends and public holidays)`,
  },
  {
    topic: "Article 29 - Freedom and Security",
    content: `Article 29 guarantees freedom and security of person:

• Right not to be deprived of freedom arbitrarily or without just cause
• Right not to be detained without trial
• Protection from torture and cruel, inhuman or degrading treatment
• Right to compensation if rights are violated
• Police must have reasonable grounds for arrest
• Detention must be lawful and justified`,
  },
  {
    topic: "Article 50 - Fair Hearing",
    content: `Article 50 ensures right to fair hearing:

• Right to fair and public hearing
• Right to independent and impartial tribunal
• Right to legal representation at own expense
• Right to adequate time and facilities to prepare defense
• Right to remain silent and not testify during proceedings
• Right to be presumed innocent until proven guilty
• Right to adduce and challenge evidence`,
  },
  {
    topic: "IPOA Guidelines",
    content: `Independent Policing Oversight Authority (IPOA) guidelines:

• Police must use minimum force necessary
• Officers must identify themselves when requested
• Right to record police interactions in public
• Police cannot confiscate phones/cameras without warrant
• Report misconduct to IPOA: 1195 or 020 2270000
• IPOA investigates deaths, serious injuries, and misconduct
• File complaints within reasonable time of incident`,
  },
  {
    topic: "Protest Rights and Safety",
    content: `Your rights during protests:

BEFORE: No permit needed, inform someone of plans, carry ID
DURING: Stay peaceful, follow lawful orders, record if safe
IF STOPPED: Ask if free to leave, request reason if detained
IF ARRESTED: Exercise right to silence, request lawyer immediately

Police CANNOT:
• Use excessive force on peaceful protesters
• Stop you from recording in public
• Detain without reasonable grounds
• Prevent lawyer contact

Police CAN:
• Give lawful dispersal orders
• Arrest for actual crimes
• Use reasonable force if threatened`,
  },
]

function findRelevantKnowledge(query: string): string[] {
  const queryLower = query.toLowerCase()
  const relevant = legalKnowledge.filter((item) => {
    const topicLower = item.topic.toLowerCase()
    const contentLower = item.content.toLowerCase()

    // Check for key terms
    const keyTerms = [
      "protest",
      "assembly",
      "demonstration",
      "arrest",
      "police",
      "rights",
      "detention",
      "bail",
      "lawyer",
      "silent",
      "ipoa",
      "misconduct",
      "article 37",
      "article 49",
      "article 29",
      "article 50",
    ]

    return keyTerms.some(
      (term) => queryLower.includes(term) && (topicLower.includes(term) || contentLower.includes(term)),
    )
  })

  return relevant.map((item) => `${item.topic}:\n${item.content}`)
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()
    const lastMessage = messages[messages.length - 1]

    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json({ error: "Invalid message format" }, { status: 400 })
    }

    // Find relevant legal knowledge
    const relevantKnowledge = findRelevantKnowledge(lastMessage.content)

    // Create system prompt with legal context
    const systemPrompt = `You are a legal assistant specializing in Kenyan constitutional law and citizens' rights. You help people understand their legal rights, especially regarding protests, police interactions, and constitutional protections.

IMPORTANT GUIDELINES:
- Always provide accurate information based on the Constitution of Kenya 2010
- Be clear that you provide general legal information, not specific legal advice
- Encourage users to contact lawyers for specific cases
- Emphasize peaceful, lawful exercise of rights
- Include relevant emergency contacts when appropriate

RELEVANT LEGAL KNOWLEDGE:
${relevantKnowledge.join("\n\n")}

EMERGENCY CONTACTS:
- IPOA (Police Oversight): 1195 or 020 2270000
- Law Society of Kenya: 020 3874481
- My Rights Hotline: 0800 123456

Respond in a helpful, clear manner. If the question is about immediate danger or arrest, prioritize emergency contacts and immediate rights.`

    // Simulate streaming response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Generate response based on query
          const response = generateLegalResponse(lastMessage.content, relevantKnowledge)

          // Simulate streaming by sending chunks
          const words = response.split(" ")
          for (let i = 0; i < words.length; i++) {
            const chunk = {
              choices: [
                {
                  delta: {
                    content: words[i] + (i < words.length - 1 ? " " : ""),
                  },
                },
              ],
            }

            controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify(chunk)}\n\n`))

            // Small delay to simulate real streaming
            await new Promise((resolve) => setTimeout(resolve, 50))
          }

          controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"))
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function generateLegalResponse(query: string, relevantKnowledge: string[]): string {
  const queryLower = query.toLowerCase()

  // Emergency situations
  if (
    queryLower.includes("arrested") ||
    queryLower.includes("detention") ||
    (queryLower.includes("police") && queryLower.includes("help"))
  ) {
    return `🚨 **If you're currently in custody or immediate danger, call:**
- **IPOA: 1195** (Police oversight)
- **My Rights Hotline: 0800 123456** (24/7 legal help)

**Your immediate rights if arrested:**
1. **Right to remain silent** - You don't have to answer questions
2. **Right to a lawyer** - Request one immediately
3. **Right to know why you're arrested** - Ask for the reason
4. **24-hour rule** - Must be released or taken to court within 24 hours
5. **Right to contact family** - Inform someone of your situation

**What to say:** "I am exercising my right to remain silent. I want to speak to a lawyer."

${relevantKnowledge.length > 0 ? "\n**Legal Background:**\n" + relevantKnowledge[0] : ""}

For non-emergency legal help, you can also contact the Law Society of Kenya at 020 3874481.`
  }

  // Protest rights
  if (queryLower.includes("protest") || queryLower.includes("demonstration") || queryLower.includes("assembly")) {
    return `✊ **Your Constitutional Right to Protest (Article 37):**

**You CAN:**
- Protest peacefully without a permit
- Carry banners, flags, and placards
- Choose when and where to demonstrate (within reason)
- Record police interactions in public spaces
- Remain in public areas during peaceful assembly

**You MUST:**
- Keep protests peaceful and non-violent
- Not carry weapons or dangerous items
- Follow lawful police dispersal orders
- Respect others' rights and property

**Police CANNOT:**
- Stop peaceful protests without just cause
- Use excessive force on peaceful protesters
- Confiscate phones/cameras without warrant
- Arrest you just for protesting peacefully

**If police intervene:**
1. Stay calm and don't resist
2. Ask "Am I free to leave?"
3. If detained, ask for the reason
4. Exercise your right to remain silent
5. Request a lawyer immediately

${relevantKnowledge.length > 0 ? "\n**Constitutional Basis:**\n" + relevantKnowledge.find((k) => k.includes("Article 37")) || relevantKnowledge[0] : ""}

**Need help?** Call IPOA at 1195 to report police misconduct.`
  }

  // Police misconduct
  if (queryLower.includes("misconduct") || queryLower.includes("ipoa") || queryLower.includes("complaint")) {
    return `🛡️ **Reporting Police Misconduct:**

**Contact IPOA (Independent Policing Oversight Authority):**
- **Phone:** 020 2270000
- **Short Code:** 1195
- **Available:** 24/7

**What IPOA investigates:**
- Deaths involving police
- Serious injuries caused by police
- Sexual offenses by police officers
- Corruption and misconduct
- Excessive use of force

**How to report:**
1. Call immediately if ongoing situation
2. Provide details: date, time, location, officer details
3. Gather evidence: photos, videos, witness contacts
4. Get medical attention if injured
5. Keep records of all interactions

**Your rights when reporting:**
- Right to file complaints without fear
- Right to protection from retaliation
- Right to be informed of investigation progress
- Right to legal representation

**Evidence to collect:**
- Officer badge numbers/names
- Photos/videos of incident
- Witness contact information
- Medical records if injured
- Any documents or receipts

IPOA is independent from police and investigates all complaints seriously.`
  }

  // Rights during questioning
  if (queryLower.includes("questioning") || queryLower.includes("interrogation") || queryLower.includes("silent")) {
    return `🤐 **Your Rights During Police Questioning:**

**Right to Remain Silent (Article 49):**
- You don't have to answer any questions
- Silence cannot be used against you
- You can invoke this right at any time
- Police must inform you of this right

**What to say:**
"I am exercising my right to remain silent. I want to speak to a lawyer."

**You DON'T have to:**
- Answer questions about where you've been
- Explain your activities or associations
- Sign any statements or documents
- Provide passwords to phones/devices

**You DO have to:**
- Provide your name and ID if lawfully requested
- Follow lawful orders (not questions)
- Remain calm and respectful

**Police tactics you should know:**
- They may say talking will help you
- They may claim they have evidence
- They may use "good cop, bad cop"
- They may make promises they can't keep

**Remember:** Anything you say CAN and WILL be used against you. The safest approach is to remain silent and request a lawyer.

**If you can't afford a lawyer:** The state must provide one for serious charges, or contact LSK at 020 3874481 for pro-bono assistance.`
  }

  // General rights information
  if (queryLower.includes("rights") || queryLower.includes("constitution")) {
    return `📜 **Your Key Constitutional Rights in Kenya:**

**Article 29 - Freedom and Security:**
- Right not to be detained arbitrarily
- Protection from torture and cruel treatment
- Right to compensation if rights violated

**Article 37 - Right to Assembly:**
- Right to peaceful protest without permit
- Right to demonstrate and petition
- Must be peaceful and unarmed

**Article 49 - Rights of Arrested Persons:**
- Right to remain silent
- Right to know reason for arrest
- Right to contact lawyer and family
- Right to be released on bail
- 24-hour rule for court appearance

**Article 50 - Right to Fair Hearing:**
- Right to fair and public trial
- Right to legal representation
- Right to be presumed innocent
- Right to adequate time to prepare defense

**How to exercise these rights:**
1. Know them before you need them
2. Remain calm in all interactions
3. Clearly state which rights you're invoking
4. Don't resist even if rights are violated
5. Document violations and report them

**Get help:**
- Emergency: IPOA 1195
- Legal aid: LSK 020 3874481
- 24/7 help: My Rights 0800 123456

These rights apply to ALL people in Kenya, regardless of citizenship status.`
  }

  // Default response
  return `I'm here to help you understand your legal rights in Kenya. I can provide information about:

🏛️ **Constitutional Rights:**
- Right to protest and assembly (Article 37)
- Rights when arrested (Article 49)
- Freedom and security (Article 29)
- Right to fair hearing (Article 50)

👮 **Police Interactions:**
- What to do if stopped or questioned
- Your rights during arrest
- How to report misconduct to IPOA

✊ **Protest Rights:**
- Peaceful assembly without permits
- What you can and cannot do
- How to stay safe during demonstrations

**Emergency Contacts:**
- IPOA (Police oversight): 1195
- Law Society of Kenya: 020 3874481
- My Rights Hotline: 0800 123456

Please ask me specific questions about your legal rights, and I'll provide detailed information based on Kenyan law.

**Disclaimer:** I provide general legal information only. For specific legal advice about your situation, please consult with a qualified lawyer.`
}
