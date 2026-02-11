import React from 'react';
import { Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.svg';

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
  companyName?: string;
  registrationNumber?: string;
  logoUrl?: string;
  contactLinks?: FooterLink[];
  socialLinks?: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'PRISMA CREATIVE',
  registrationNumber = '645 23 18 98',
  logoUrl = logo,
  contactLinks = [
    { label: 'Avenida de Europa Nº6', href: '#' },
    { label: 'prismacreative@gmail.com', href: 'mailto:prismacreative@gmail.com' },
    { label: 'Aviso Legal', href: '/aviso-legal' },
    { label: 'Política de privacidad', href: '/privacidad' },
    { label: 'Política de cookies', href: '/cookies' }
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
        return <Twitter className="w-6 h-6" />;
      case 'instagram':
        return <Instagram className="w-6 h-6" />;
      case 'tiktok':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark-blue text-white py-12 px-6 md:px-12 lg:px-24 flex justify-between max-w-md">
      <div className=" mx-auto">
        <div className="flex gap-50 ">
          {/* Left Column - Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block text-white hover:text-light-blue transition-colors ${
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

            <div>
          {/* Center Column - Logo and Company Info */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Logo */}
            <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center overflow-hidden p-6">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={companyName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="w-full h-full text-black p-6"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <circle cx="50" cy="50" r="48" />
                  <line x1="15" y1="15" x2="85" y2="85" />
                  <line x1="85" y1="15" x2="15" y2="85" />
                </svg>
              )}
            </div>

            {/* Company Name with Copyright */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">©</span>
                <span className="text-lg font-semibold">{companyName}</span>
              </div>
              <p className="text-sm text-gray-400">{registrationNumber}</p>
            </div>
          </div>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Redes sociales</h3>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-light-blue transition-colors"
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