import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target } from "lucide-react"

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "Nous nous engageons à fournir des services et produits de la plus haute qualité."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Proximité",
    description: "Une relation de confiance avec nos clients est au cœur de notre approche."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Innovation",
    description: "Nous restons à la pointe des avancées en santé et nutrition animale."
  }
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">À Propos de SAVET SAS</h1>
          <p className="text-gray-600 mb-6">
            SAVET SAS est un acteur majeur 
            dans le domaine de la santé et de la nutrition animale au Burkina Faso. Notre 
            mission est d'améliorer la santé et le bien-être des animaux à travers des 
            solutions innovantes et un service personnalisé.
          </p>
          <p className="text-gray-600">
            Avec une expertise approfondie et un engagement constant envers l'excellence, 
            nous accompagnons nos clients dans tous leurs besoins en matière de santé animale, 
            de la prévention aux soins, en passant par la nutrition.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Animaux du Sahel - Bovins et berger"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center text-primary">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}