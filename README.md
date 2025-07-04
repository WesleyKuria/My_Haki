# My Haki - Legal Rights Platform for Kenyan Protesters
My Haki is a digital platform empowering Kenyan citizens with legal knowledge thus growing civic education; and immediate access to pro-bono legal assistance during protests and wrongful arrests. In response to increasing police brutality and unlawful detentions, this platform provides crucial information about constitutional rights and connects users with legal professionals.

## Key Features
AI Legal Assistant: Get immediate answers about protest rights, arrest procedures, and constitutional protections

Pro-Bono Lawyer Matching: Connect with volunteer lawyers from the Law Society of Kenya database

Mobile-First Design: Accessible interface for stressful situations

Legal Rights Database: Comprehensive information on Kenyan constitutional rights

Emergency Assistance: Rapid-response system for arrest situations

Multilingual Support: Accessible to all Kenyans

### From Idea to Income
Freemium Legal Access: Basic rights info and emergency help are free. Advanced legal tools or consultations could be offered under a paid tier.

NGO / Legal Aid Partnerships: Monetize via NGO sponsorships, white-labeled versions for human rights organizations, or CSR-backed deployments.

Legal Rights Analytics: Sell anonymized, aggregated data insights to rights watchdogs or policy organizations.

## Technology Stack
Frontend: Next.js, React, TypeScript

UI: Tailwind CSS

AI: OpenAI

Deployment: Vercel

Styling: CSS, Tailwind CSS

## Getting Started
The project is live on: https://my-haki1.vercel.app/


Follow these instructions to set up the project locally for development and testing.

# Prerequisites
Node.js 18.x or later

npm 9.x or later

OpenAI API key

# Installation
Clone the repository

```bash
git clone https://github.com/WesleyKuria/haki.git
cd haki
Install dependencies 
npm install
```
Set up environment variables
Create a .env.local file in the root directory:
```bash
env OPENAI_API_KEY=your_openai_api_key_here
```

Run the development server
```bash
npm run dev
```
Open in your browser

Visit http://localhost:3000 to access the platform

## Project Structure
```
my-haki/
├── app/                 # Application routes
│   ├── chat/            # AI Chat interface
│   ├── emergency/       # Emergency assistance
│   ├── lawyers/         # Pro-bono lawyer directory
│   └── rights/          # Legal rights information
├── components/          # Reusable components
│   └── ui/              # Shadcn-based UI components
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```
## Deployment
Deploy to Vercel at [https://vercel.com/button](https://my-haki1.vercel.app/)

Push your code to a GitHub repository

Create a new project on Vercel

Import your GitHub repository

* Add environment variable: OPENAI_API_KEY with your OpenAI key *

Click Deploy

Vercel will automatically build and deploy your application.

### AI Legal Assistant Guidelines
The AI assistant follows strict guidelines to provide accurate, empowering information:

Always cites relevant Articles from the Kenyan Constitution (2010)

References IPOA (Independent Policing Oversight Authority) guidelines

Provides clear information about rights during protests and arrests

Avoids giving direct legal advice

Encourages contacting pro bono lawyers for specific cases

Maintains calm, concise, and empowering tone

Focuses exclusively on Kenyan protest rights and police procedures

Example Interaction User: "Can police arrest me for protesting peacefully?" My Haki: "No, under Article 37 of the Kenyan Constitution, you have the right to assemble peacefully and demonstrate. However, police can intervene if the protest becomes violent or unlawful. Stay calm and record any misconduct."

### Contributing

We welcome contributions to expand and improve this vital platform:

Fork the repository

Create your feature branch (git checkout -b feature/improvement)

Commit your changes (git commit -am 'Add some improvement')

Push to the branch (git push origin feature/improvement)

Open a pull request

### Future Roadmap
Integrate with Law Society of Kenya's pro-bono lawyer database

Add SMS emergency alert system

Implement multilingual support (Swahili, Sheng, etc.)

Develop mobile applications for Android and iOS

Create police encounter recording feature

Add real-time protest safety mapping

### Support the Project
My Haki is developed to protect Kenyan citizens' constitutional rights. To support this effort Share with your networks!

_Made with ❤️ for Kenya_
