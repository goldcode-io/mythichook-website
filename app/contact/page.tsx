'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';

export default function ContactPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className='relative pt-32 pb-24 px-6'>
        {/* 3D Background Text */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-5'>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-12 -left-40 top-10 animate-float-3d'>
            SCHEDULE
          </div>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-12 -right-40 top-1/3 animate-drift-left'>
            CONNECT
          </div>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-6 left-1/4 bottom-10 animate-pulse-3d'>
            START
          </div>
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h1 className='text-7xl md:text-9xl font-black mb-6 leading-none bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Let&apos;s Talk
            </h1>
            <p className='text-2xl md:text-3xl font-light text-gray-400 max-w-3xl mx-auto'>
              Time costs. You&apos;re already in. Choose a time and get back to
              life.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            {/* Left: Studio Image */}
            <div className='relative group'>
              <div className='aspect-video bg-linear-to-br from-purple-900/20 to-pink-900/20 rounded-3xl overflow-hidden relative border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all'>
                <img
                  src='/studio.jpg'
                  alt='Video Production Studio'
                  className='w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity'
                />
              </div>
            </div>

            {/* Right: CTA */}
            <div className='bg-linear-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm p-10 rounded-3xl border-2 border-purple-500/30'>
              <h2 className='text-4xl md:text-5xl font-black mb-6 leading-tight'>
                Ready to scale?
              </h2>
              <p className='text-xl text-gray-400 mb-8 leading-relaxed'>
                Book a free consultation and let&apos;s discuss how we can
                transform your content strategy.
              </p>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-10 py-5 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xl font-black rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mb-6'
              >
                Schedule Free Call
              </button>

              <div className='bg-black/50 p-6 rounded-xl border border-purple-500/20'>
                <p className='text-sm text-gray-400 leading-relaxed'>
                  <span className='text-purple-400 font-bold'>
                    First call is always free.
                  </span>{' '}
                  No pressure, no commitment. Just a conversation about your
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className='relative py-16 px-6 bg-linear-to-b from-black to-zinc-950'>
        <div className='max-w-5xl mx-auto text-center'>
          <p className='text-3xl md:text-4xl font-light text-gray-400 italic'>
            Don&apos;t worry, we know what we&apos;re doing
          </p>
        </div>
      </section>

      {/* Network Section */}
      <section className='relative py-24 px-6 bg-zinc-950'>
        <div className='max-w-6xl mx-auto'>
          <div className='bg-linear-to-br from-purple-900/30 to-pink-900/30 p-12 md:p-16 rounded-3xl border-2 border-purple-500/40 shadow-2xl shadow-purple-500/10'>
            <h2 className='text-5xl md:text-6xl font-black mb-8 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Want to be where it&apos;s hot?
            </h2>
            <div className='space-y-6'>
              <p className='text-xl md:text-2xl font-light leading-relaxed text-gray-300'>
                We&apos;ll invite you to dinners through our informal network of
                builders, influencers, and YouTubers.
              </p>
              <p className='text-xl md:text-2xl font-light leading-relaxed text-gray-300'>
                Jet to podcasts in Dubai, Mumbai and Shanghai sharing your
                secrets.
              </p>
              <div className='pt-6 border-t border-purple-500/30'>
                <p className='text-2xl md:text-3xl font-bold text-purple-400'>
                  We&apos;re friendly people, so be friendly!
                </p>
                <p className='text-xl md:text-2xl font-light text-gray-400 mt-2'>
                  Write us what you&apos;re doing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-32 px-6 bg-linear-to-b from-zinc-950 to-black'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-6xl md:text-7xl font-black mb-8 leading-tight'>
            Ready to start?
          </h2>
          <p className='text-2xl md:text-3xl font-light text-gray-400 mb-12 max-w-3xl mx-auto'>
            Book your free consultation now and let&apos;s build something
            extraordinary together.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className='px-16 py-6 bg-linear-to-r from-purple-600 to-pink-600 text-white text-2xl font-black rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
          >
            Schedule Now
          </button>
        </div>
      </section>

      {/* Footer Note */}
      <footer className='bg-black border-t border-purple-500/20 py-16 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-gray-400'>
            You won&apos;t need a guarantee. But if you want one, know that you
            can ask.
          </p>
        </div>
      </footer>

      {/* Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
