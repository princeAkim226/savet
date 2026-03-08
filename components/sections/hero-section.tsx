import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Nos Services</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Des solutions complètes pour la santé et le bien-être de vos animaux
        </p>
      </div>
    </section>
  )
}