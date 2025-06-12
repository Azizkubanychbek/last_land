"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { useAudio } from '@/components/providers/audio-provider';
import { useRouter, usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Docs', href: '#docs' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playSound } = useAudio();
  const router = useRouter();
  const pathname = usePathname();

  // Check if we're on the privacy policy page
  const isPrivacyPage = pathname === '/privacy-policy';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavLinkClick = (href: string) => {
    playSound('click');
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      router.push(href);
    }
  };

  const handleLaunchApp = () => {
    playSound('click');
    router.push('/dex');
  };

  const handleLogoClick = () => {
    playSound('click');
    if (isPrivacyPage) {
      router.push('/');
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled 
        ? "bg-cyberpunk-black/90 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - clickable on privacy page */}
        <div 
          className={isPrivacyPage ? "cursor-pointer" : ""}
          onClick={isPrivacyPage ? handleLogoClick : undefined}
          onMouseEnter={isPrivacyPage ? () => playSound('hover') : undefined}
        >
          <Logo />
        </div>

        {/* Desktop navigation - hide nav links on privacy page */}
        <nav className="hidden md:flex items-center space-x-8">
          {!isPrivacyPage && NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className="text-white hover:text-cyberpunk-cyan transition-colors duration-200 font-medium"
              onMouseEnter={() => playSound('hover')}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="neon-btn text-sm py-2"
            onMouseEnter={() => playSound('hover')}
            onClick={handleLaunchApp}
          >
            Launch App
          </button>
        </nav>

        {/* Mobile menu button - hide on privacy page */}
        {!isPrivacyPage && (
          <button 
            className="md:hidden text-white"
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Launch App button for privacy page */}
        {isPrivacyPage && (
          <button 
            className="md:hidden neon-btn text-sm py-2"
            onMouseEnter={() => playSound('hover')}
            onClick={handleLaunchApp}
          >
            Launch App
          </button>
        )}
      </div>

      {/* Mobile navigation - hide on privacy page */}
      {!isPrivacyPage && (
        <div 
          className={cn(
            "fixed inset-0 z-40 transform transition-transform duration-300 md:hidden pt-20",
            mobileMenuOpen
              ? "translate-x-0 bg-cyberpunk-black/90"
              : "translate-x-full bg-cyberpunk-black"
          )}
        >
          <nav className="flex flex-col items-center space-y-4 p-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className="w-full text-center py-2 px-4 rounded bg-cyberpunk-darker/80 text-white hover:text-cyberpunk-cyan hover:bg-cyberpunk-darker transition-colors duration-200 text-xl font-medium"
              >
                {link.name}
              </a>
            ))}
            <button 
              className="neon-btn mt-4 w-full"
              onClick={handleLaunchApp}
            >
              Launch App
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}