'use client';

import { useState } from 'react';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className='fixed top-0 w-full z-50 backdrop-blur-sm bg-black/50 border-b border-zinc-800'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          {/* Logo */}
          <div className='text-2xl font-bold'>
            <span className='bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
              mythic
            </span>
            <span className='bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
              HOOK
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden sm:flex gap-6 items-center'>
            <a
              href='#features'
              className='text-zinc-300 hover:text-white transition-colors'
            >
              Features
            </a>
            <a
              href='#pricing'
              className='text-zinc-300 hover:text-white transition-colors'
            >
              Pricing
            </a>
            <button
              onClick={onOpenContactModal}
              className='px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity'
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='sm:hidden text-white hover:text-zinc-300 transition-colors'
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='sm:hidden fixed inset-0 top-[73px] bg-zinc-900 z-40 overflow-y-auto'>
          <div className='px-6 py-4 space-y-4'>
            <a
              href='#features'
              onClick={closeMobileMenu}
              className='block text-zinc-300 hover:text-white transition-colors py-2'
            >
              Features
            </a>
            <a
              href='#pricing'
              onClick={closeMobileMenu}
              className='block text-zinc-300 hover:text-white transition-colors py-2'
            >
              Pricing
            </a>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenContactModal();
              }}
              className='w-full px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:opacity-90 transition-opacity'
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
