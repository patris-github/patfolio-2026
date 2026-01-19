import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend lazily
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      )
    }
    const resend = new Resend(apiKey)

    const body: ContactFormData = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["monat.patrice@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        Nouveau message depuis le portfolio

        Nom : ${name}
        Email : ${email}

        Message :
        ${message}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
