import { NextRequest, NextResponse } from 'next/server'
import { addRegistration } from '@/lib/data'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nom et email requis' },
        { status: 400 }
      )
    }

    await addRegistration({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      message: message ? String(message).trim() : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Inscription error:', e)
    return NextResponse.json(
      { error: 'Erreur lors de l\'enregistrement' },
      { status: 500 }
    )
  }
}
