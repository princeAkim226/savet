"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { FileDown, Video, GraduationCap, UserCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type User = { email: string; name: string } | null

export default function EspaceClientPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/auth/session')
      .then((r) => r.json())
      .then((data) => {
        setUser(data.user ?? null)
      })
      .finally(() => setLoading(false))
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
        <p className="text-gray-500">Chargement...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-6">{t('clientArea.loginRequired')}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <Link href="/connexion">{t('nav.login')}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/inscription">{t('nav.createAccount')}</Link>
          </Button>
        </div>
      </div>
    )
  }

  const sections = [
    {
      key: 'technicalSheets' as const,
      icon: <FileDown className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.technicalSheetsDesc' as const,
      content: <p className="text-sm text-gray-500 mt-2">{t('clientAreaLogged.noFile')}</p>,
    },
    {
      key: 'videos' as const,
      icon: <Video className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.videosDesc' as const,
      content: <p className="text-sm text-gray-500 mt-2">{t('clientAreaLogged.noFile')}</p>,
    },
    {
      key: 'training' as const,
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.trainingDesc' as const,
      content: <p className="text-sm text-gray-500 mt-2">{t('clientAreaLogged.noFile')}</p>,
    },
    {
      key: 'personalizedSpace' as const,
      icon: <UserCircle className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.personalizedSpaceDesc' as const,
      content: <p className="text-sm text-primary mt-2">{user.name} — {user.email}</p>,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t('clientArea.title')}</h1>
          <p className="text-gray-600">
            {t('clientAreaLogged.welcome')}, <strong>{user.name}</strong>
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2 w-fit">
          <LogOut className="h-4 w-4" />
          {t('clientAreaLogged.logout')}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <Card key={section.key} className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                {section.icon}
                <CardTitle>{t(`clientArea.${section.key}`)}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {t(section.descKey)}
              </CardDescription>
              {section.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
