import React from 'react';
import { Twitter, Instagram } from 'lucide-react';
import logo from '../../assets/logo.svg';
import tiktok from '../../assets/tiktok.svg';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: 'twitter' | 'instagram' | 'tiktok';
}

interface FooterProps {
  logoUrl?: string;
  contactLinks?: FooterLink[];
  socialLinks?: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({
  logoUrl = logo,
  contactLinks = [
    { label: 'Avenida de Europa Nº6', href: '#' },
    { label: 'prismacreative@gmail.com', href: '#' },
    { label: 'Aviso Legal', href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Política de cookies', href: '#' }
  ],
  socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'Tiktok', href: 'https://tiktok.com', icon: 'tiktok' }
  ]
}) => {
  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'twitter':
        return <Twitter className="w-11 h-11" />;
      case 'instagram':
        return <Instagram className="w-11 h-11" />;
      case 'tiktok':
        return (
          <img src={tiktok} className="w-11 h-11"/>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark-blue text-white py-12 md:py-16 px-6 md:px-8 lg:px-12 w-full dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          
          {/* Información de contacto */}
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block text-white hover:text-light-blue transition-colors text-2xl md:text-xl ${
                  link.label === 'Aviso Legal' || 
                  link.label === 'Política de privacidad' || 
                  link.label === 'Política de cookies'
                    ? 'underline'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Info de la empresa */}
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
            <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center overflow-hidden p-4 md:p-6">
                <img src={logoUrl} className="w-full h-full object-contain" />
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="md:text-3xl text-4xl">©</span>
                <span className="md:text-2xl text-4xl font-semibold">PRISMA CREATIVE</span>
              </div>
              <p className="text-lg text-grey">647 34 76 99</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-3 md:space-y-4 text-center md:text-right">
            <h3 className=" sm:text-3xl font-semibold mb-4 md:mb-6">Redes sociales</h3>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex items-center justify-center md:justify-end gap-3 text-white hover:text-light-blue transition-colors text-xl"
              >
                {getSocialIcon(social.icon)}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;