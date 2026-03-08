"use client"

import { useLanguage } from "@/contexts/language-context"
import { FileDown, Video, GraduationCap, UserCircle, LogIn } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EspaceClientPage() {
  const { t } = useLanguage()

  const sections = [
    {
      key: 'technicalSheets',
      icon: <FileDown className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.technicalSheetsDesc' as const,
    },
    {
      key: 'videos',
      icon: <Video className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.videosDesc' as const,
    },
    {
      key: 'training',
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.trainingDesc' as const,
    },
    {
      key: 'personalizedSpace',
      icon: <UserCircle className="h-10 w-10 text-primary" />,
      descKey: 'clientArea.personalizedSpaceDesc' as const,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('clientArea.title')}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('clientArea.subtitle')}</p>
      </div>

      <div className="rounded-lg bg-primary/5 border border-primary/20 p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-700 flex items-center gap-2">
          <LogIn className="h-5 w-5 text-primary" />
          {t('clientArea.loginRequired')}
        </p>
        <Button asChild>
          <Link href="/inscription">{t('nav.createAccount')}</Link>
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
              <p className="mt-4 text-sm text-gray-500">
                {t('clientArea.loginRequired')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
