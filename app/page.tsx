'use client';

import { useState } from 'react';
import ContactModal from './components/ContactModal';
import Navbar from './components/Navbar';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thanks! We\'ll send you the guide shortly.');
    setEmail('');
  };

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Gradient Orbs Background */}
      <div className='fixed inset-0 pointer-events-none z-0 opacity-20'>
        <div className='absolute top-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }} />
        <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className='relative pt-40 pb-24 px-6 z-10'>
        {/* Background Image */}
        <div className='absolute inset-0 pointer-events-none z-0'>
          <img
            src='/images/whats-holding-you-back.png'
            alt="What's holding you back"
            className='w-full h-full object-cover opacity-10'
          />
        </div>

        {/* Animated Background Text */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-5 z-10'>
          <div className='absolute whitespace-nowrap text-9xl font-black animate-scroll-right'>
            RELAX • CONVERT • SCALE • GROW • RELAX • CONVERT • SCALE • GROW •
          </div>
          <div className='absolute whitespace-nowrap text-9xl font-black animate-scroll-left top-1/3'>
            VIDEOS • SHOPIFY • ADS • CONTENT • VIDEOS • SHOPIFY • ADS • CONTENT •
          </div>
          <div className='absolute whitespace-nowrap text-9xl font-black animate-scroll-right top-2/3'>
            VIRAL • PROFIT • ENGAGE • VIRAL • PROFIT • ENGAGE • VIRAL • PROFIT •
          </div>
        </div>

        <div className='max-w-7xl mx-auto relative z-20'>
          <div className='text-center'>
            <h1 className='text-7xl md:text-9xl font-black mb-8 tracking-tight leading-none'>
              If we help,<br />
              <span className='italic bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                ultimately relax.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Black Background - Neuro-persuasive Videos */}
      <section className='relative py-20 px-6 bg-black z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-start'>
            {/* Left Content */}
            <div>
              <h2 className='text-6xl md:text-7xl font-black leading-tight text-white'>
                <div className='mb-2'>Use the</div>
                <div className='mb-2'>mysteries</div>
                <div className='mb-2'>of the mind</div>
                <div className='mb-2'>with</div>
                <div className='text-purple-600'>
                  Neuro-persuasive Videos
                </div>
              </h2>
            </div>

            {/* Right - Lead Magnet */}
            <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 shadow-xl border-2 border-purple-500/50 hover-glow'>
              <div className='bg-black rounded-2xl p-8 mb-6 border-2 border-purple-600'>
                <h3 className='text-3xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  People quit BEFORE it&apos;s dull
                </h3>
                <p className='text-xl text-gray-300 mb-6'>
                  4 reasons you&apos;ll never have a million dollar...
                </p>
              </div>

              <form onSubmit={handleLeadMagnetSubmit} className='space-y-4'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='w-full px-6 py-4 border-2 border-purple-500/50 rounded-xl focus:outline-none focus:border-purple-400 text-lg bg-zinc-900 text-white placeholder-gray-500'
                />
                <button
                  type='submit'
                  className='w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
                >
                  Download Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: White Background - Grows while you sleep */}
      <section className='relative py-20 px-6 bg-white z-10'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-6xl md:text-8xl font-black leading-tight text-gray-900'>
            Grows while you sleep
          </h2>
        </div>
      </section>

      {/* Section 3: Off-white Background - Growth Content */}
      <section className='relative py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50 z-10'>
        {/* Background Image */}
        <div className='absolute inset-0 pointer-events-none z-0 flex items-end justify-center'>
          <img
            src='/images/Social media management.png'
            alt='Social Media Management'
            className='w-1/2 h-auto object-contain opacity-20'
          />
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <h3 className='text-6xl md:text-7xl font-black leading-tight text-gray-900'>
            <div className='text-2xl text-gray-500 font-normal mb-6'>Poor ROI?</div>
            <div className='text-5xl mb-2'>We specialize in</div>
            <div className='text-green-500 mb-8'>
              growth content.
            </div>
            <div className='text-4xl mb-2'>Make money off our videos</div>
            <div className='text-3xl text-green-500'>
              (NEGATIVE marketing spend)
            </div>
          </h3>
        </div>
      </section>

      {/* Results Section */}
      <section className='relative py-20 px-6 bg-black z-10'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-5xl md:text-6xl font-black mb-16'>
            The numbers don&apos;t lie
          </h2>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='hover-lift p-8 bg-zinc-900 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                5M+
              </div>
              <div className='text-xl text-gray-400'>Views Generated</div>
            </div>
            <div className='hover-lift p-8 bg-zinc-900 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                300%
              </div>
              <div className='text-xl text-gray-400'>Average ROI</div>
            </div>
            <div className='hover-lift p-8 bg-zinc-900 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                24/7
              </div>
              <div className='text-xl text-gray-400'>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className='relative py-20 px-6 bg-zinc-950 z-10'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-5xl md:text-6xl font-black mb-8'>
            What we do
          </h2>
          <p className='text-2xl text-gray-400 mb-16 max-w-3xl mx-auto'>
            Full-service video production and marketing. From concept to conversion.
          </p>

          <div className='grid md:grid-cols-3 gap-8 text-left'>
            <div className='bg-zinc-900 p-8 rounded-2xl shadow-lg hover-lift border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>🎬</div>
              <h3 className='text-2xl font-black mb-3'>Video Production</h3>
              <p className='text-gray-400'>
                Cinematic commercials, viral shorts, and long-form content that captures attention and drives action.
              </p>
            </div>

            <div className='bg-zinc-900 p-8 rounded-2xl shadow-lg hover-lift border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>📱</div>
              <h3 className='text-2xl font-black mb-3'>Social Media Management</h3>
              <p className='text-gray-400'>
                Complete social media strategy, content creation, and posting across all major platforms.
              </p>
            </div>

            <div className='bg-zinc-900 p-8 rounded-2xl shadow-lg hover-lift border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>📊</div>
              <h3 className='text-2xl font-black mb-3'>Paid Advertising</h3>
              <p className='text-gray-400'>
                Strategic ad campaigns across all platforms. We manage budgets up to $50k/month with proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-24 px-6 bg-gradient-to-br from-purple-900 to-pink-900 text-white z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-5xl md:text-7xl font-black mb-6'>
            Ready to scale?
          </h2>
          <p className='text-2xl md:text-3xl font-light mb-12 opacity-90'>
            Let&apos;s talk about your goals. First call is free.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className='px-12 py-5 bg-white text-purple-900 text-xl font-black rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105'
          >
            Book a Call
          </button>
        </div>
      </section>

      {/* Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
