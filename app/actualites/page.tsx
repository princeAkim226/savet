"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const campaigns = [
  {
    title: "Campagne de vaccination animale 2025",
    date: "01/11/2025",
    content: "SAVET SAS lance une grande campagne de vaccination destinée à toutes les espèces animales domestiques sur l'ensemble du territoire.",
  },
  {
    title: "Nouveau partenariat nutrition animale",
    date: "20/10/2025",
    content: "Nous avons signé un partenariat stratégique avec NutriAfrique pour améliorer l'offre en nutrition animale au Burkina Faso.",
  },
  {
    title: "Conseils saison sèche : bien hydrater vos animaux",
    date: "15/09/2025",
    content: "La sécheresse arrive, pensez à adapter la ration alimentaire et à surveiller l'accès à l'eau de vos animaux! Nos spécialistes vous conseillent.",
  },
]

export default function ActualitesPage() {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">{t("nav.campaign")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <p className="text-xs text-gray-400 mb-2">{campaign.date}</p>
              <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
              <p className="text-gray-700">{campaign.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
