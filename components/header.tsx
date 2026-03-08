"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/contexts/language-context'
import { LanguageSelector } from '@/components/language-selector'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.solutions', href: '/produits' },
    { key: 'nav.campaign', href: '/actualites' },
    { key: 'nav.clientArea', href: '/espace-client' },
    { key: 'nav.partners', href: '/partenaires' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Logo width={120} height={40} className="h-10 w-auto object-contain" showText={true} />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-5 md:flex-nowrap">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSelector />
            <Link
              href="/inscription"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
            >
              {t('nav.createAccount')}
            </Link>
            <Button asChild>
              <Link href="/contact">{t('nav.contactUs')}</Link>
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <LanguageSelector />
                <Link
                  href="/inscription"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.createAccount')}
                </Link>
                <Button className="w-full" asChild>
                  <Link href="/contact">{t('nav.contactUs')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header