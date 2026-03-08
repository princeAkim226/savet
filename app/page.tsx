"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VideoHero } from "@/components/sections/video-hero"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: t("home.veterinaryMedicines"),
      description: t("home.veterinaryMedicinesDesc")
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: t("home.animalNutrition"),
      description: t("home.animalNutritionDesc")
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t("home.assistance"),
      description: t("home.assistanceDesc")
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background */}
      {/* 
        Pour utiliser votre propre vidéo :
        1. Placez votre fichier vidéo dans le dossier public/ (ex: public/video-hero.mp4)
        2. Remplacez videoSrc par "/video-hero.mp4"
        3. Remplacez posterSrc par l'URL de votre image de prévisualisation
        Format recommandé : MP4, résolution minimale 1920x1080
      */}
      <VideoHero
        videoSrc="https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4"
        posterSrc="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t("home.title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          {t("home.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90" asChild>
            <Link href="/produits">{t("home.ourProducts")}</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white" asChild>
            <Link href="/contact">{t("home.contactUs")}</Link>
          </Button>
        </div>
      </VideoHero>

      {/* Rest of the component remains the same */}
      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("home.ourServices")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Animaux du Sahel - Bovins et berger"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("home.aboutTitle")}</h2>
              <p className="text-gray-600 mb-6">
                {t("home.aboutText")}
              </p>
              <Button asChild>
                <Link href="/about">{t("home.learnMore")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}