"use client"

import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/contexts/language-context'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Logo width={140} height={50} className="h-12 w-auto object-contain" showText={true} />
            </Link>
            <p className="text-gray-600">
              {t("footer.tagline")}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <a
                  href="https://www.google.com/maps/search/BP+244+Bobo-Dioulasso+90000+Burkina+Faso/@11.1771,-4.2973,13z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  BP 244, Bobo-Dioulasso 90000, BURKINA FASO
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:infos@savet-burkina.com" className="hover:text-primary transition-colors">
                  infos@savet-burkina.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+22600000000" className="hover:text-primary transition-colors">
                  +226 00 00 00 00
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                [t("nav.solutions"), '/produits'],
                [t("nav.services"), '/services'],
                [t("nav.about"), '/about'],
                [t("nav.contact"), '/contact']
              ].map(([title, url]) => (
                <li key={url}>
                  <Link 
                    href={url} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/savetburkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/savetburkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/savetburkina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary/20 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SAVET SAS. {t("footer.rights")}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer