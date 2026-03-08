"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InscriptionPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value,
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value,
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement)?.value || undefined,
      company: (form.querySelector('[name="company"]') as HTMLInputElement)?.value || undefined,
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || undefined,
    }
    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Erreur')
      }
      setSubmitted(true)
    } catch {
      setError(t('register.error'))
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="rounded-lg bg-green-50 border border-green-200 p-8">
          <p className="text-green-800 text-lg font-medium">{t('register.success')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{t('register.title')}</h1>
        <p className="text-gray-600">{t('register.subtitle')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('register.title')}</CardTitle>
          <CardDescription>{t('register.subtitle')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>
            )}
            <div className="space-y-2">
              <Label htmlFor="name">{t('register.name')}</Label>
              <Input id="name" name="name" required placeholder="Jean Dupont" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('register.email')}</Label>
              <Input id="email" name="email" type="email" required placeholder="jean@exemple.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('register.phone')}</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+226 00 00 00 00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t('register.company')}</Label>
              <Input id="company" name="company" placeholder="Nom de l'entreprise ou élevage" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t('register.message')}</Label>
              <Textarea id="message" name="message" rows={4} placeholder="Précisez vos besoins si besoin..." />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "..." : t('register.submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
