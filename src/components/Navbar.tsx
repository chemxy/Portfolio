'use client';

import { useState, useEffect, useRef } from 'react';
import DownloadIcon from '@mui/icons-material/Download';

const RESUME_HREF = '/doc/Resume_Xingyun_Chen_Web_Dev_2026.pdf';
const RESUME_FILENAME = 'Resume_Xingyun_Chen_Web_Dev_2026.pdf';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  // { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const NAV_OFFSET = 96; // fixed navbar + buffer

function getActiveSectionId() {
  let current = sections[0].id;

  for (const { id } of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= NAV_OFFSET) {
      current = id;
    }
  }

  return current;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollingToRef = useRef<string | null>(null);
  const unlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Don't let mid-scroll sections overwrite the clicked target
      if (scrollingToRef.current) return;

      setActiveSection(getActiveSectionId());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    scrollingToRef.current = sectionId;
    setActiveSection(sectionId);
    setMobileOpen(false);

    element.scrollIntoView({ behavior: 'smooth' });

    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      scrollingToRef.current = null;
      setActiveSection(getActiveSectionId());
    }, 900);
  };

  const linkClass = (sectionId: string, inactiveColor: string, extra = '') => {
    const isActive = activeSection === sectionId;
    return `link transition-colors hover:text-primary ${extra} ${
      isActive ? 'font-bold text-primary' : `font-normal ${inactiveColor}`
    }`;
  };

  const resumeLinkClass = `link inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${
    isScrolled ? 'text-gray-800' : 'text-white'
  }`;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Xingyun Chen
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`link inline-flex items-center justify-center p-2 rounded-md  ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={linkClass(
                  section.id,
                  isScrolled ? 'text-gray-800' : 'text-white',
                  'text-sm! uppercase'
                )}
                aria-current={activeSection === section.id ? 'true' : undefined}
              >
                {section.label}
              </button>
            ))}
            <a
              href={RESUME_HREF}
              download={RESUME_FILENAME}
              className={resumeLinkClass}
            >
              <DownloadIcon fontSize="small" />
              <span className="text-sm!">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={linkClass(
                section.id,
                'text-gray-800',
                'block w-full text-left px-3 py-2'
              )}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              {section.label}
            </button>
          ))}
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            className="flex items-center gap-1.5 px-3 py-2 text-gray-800 hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            <DownloadIcon fontSize="small" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
