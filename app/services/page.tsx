import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Leaf, Heart, Clock, Users } from "lucide-react"

const services = [
  {
    icon: <Stethoscope className="h-12 w-12" />,
    title: "Produits Vétérinaires",
    description: "Une gamme complète de produits vétérinaires de haute qualité pour tous types d'animaux."
  },
  {
    icon: <Leaf className="h-12 w-12" />,
    title: "Nutrition Animale",
    description: "Des solutions nutritionnelles adaptées pour optimiser la santé et la croissance de vos animaux."
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Conseils Personnalisés",
    description: "Une expertise professionnelle pour vous guider dans la santé et le bien-être de vos animaux."
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Disponibilité",
    description: "Une équipe disponible pour répondre à vos besoins et urgences."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Support Client",
    description: "Un accompagnement personnalisé et un suivi régulier de vos besoins."
  }
]

export default function ServicesPage() {
  return (
    <div>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}