"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function ProductsPage() {
  const { t } = useLanguage()

  const medicines = [
    {
      key: 'antibiotics',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'antiparasitics',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'vaccines',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'vitamins',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'antiInflammatories',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'concentrate',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'premix',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const nutritionProducts = [
    {
      key: 'supplements',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'specializedFood',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const equipmentItems = [
    {
      key: 'veterinaryEquipment',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'breedingEquipment',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'labEquipment',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'inseminationEquipment',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'hygiene',
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <div>
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Animaux du Sahel - Bovins et berger"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("products.title")}</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            {t("products.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Médicaments vétérinaires */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("products.veterinaryMedicines")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicines.map((medicine, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={medicine.image}
                    alt={t(`products.${medicine.key}`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t(`products.${medicine.key}`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`products.${medicine.key}Desc`)}</p>
                  <Button>{t("products.learnMore")}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nutrition animale */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("products.nutrition")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nutritionProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={t(`products.${product.key}`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t(`products.${product.key}`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`products.${product.key}Desc`)}</p>
                  <Button>{t("products.learnMore")}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Matériel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{t("products.equipment")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={t(`products.${item.key}`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t(`products.${item.key}`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`products.${item.key}Desc`)}</p>
                  <Button>{t("products.learnMore")}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}