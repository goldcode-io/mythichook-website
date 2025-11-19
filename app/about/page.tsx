'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';

export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white text-black relative overflow-hidden'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className='relative pt-40 pb-20 px-6'>
        {/* 3D Background Text */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10'>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-6 -left-32 top-20 animate-drift-right'>
            VISION
          </div>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-6 -right-32 top-1/3 animate-pulse-3d'>
            CRAFT
          </div>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-3 left-1/4 bottom-10 animate-float-3d'>
            RELAX
          </div>
        </div>

        <div className='max-w-6xl mx-auto relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h1 className='text-7xl md:text-9xl font-black mb-8 tracking-tight'>
                About Us
              </h1>
              <p className='text-2xl md:text-3xl font-light'>
                We hacked human operating habits, created persuasive videos,
                views climbed to millions, and revenue followed.
              </p>
            </div>
            <div className='relative'>
              <img
                src='/images/Chris and Wictor.png'
                alt='Chris and Wiktor'
                className='rounded-3xl shadow-2xl w-full h-auto border-4 border-black'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section className='relative py-20 px-6 bg-black text-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            Rituals
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-zinc-900 p-10 rounded-2xl border-2 border-zinc-800 hover:border-purple-500 transition-all'>
              <div className='text-6xl mb-6'>🧘</div>
              <h3 className='text-3xl font-black mb-4'>Relax</h3>
              <p className='text-gray-400'>
                Clear the mind, find stillness, and prepare for vision.
              </p>
            </div>
            <div className='bg-zinc-900 p-10 rounded-2xl border-2 border-zinc-800 hover:border-blue-500 transition-all'>
              <div className='text-6xl mb-6'>👁️</div>
              <h3 className='text-3xl font-black mb-4'>Envision</h3>
              <p className='text-gray-400'>
                See what doesn&apos;t exist yet. Imagine the impossible.
              </p>
            </div>
            <div className='bg-zinc-900 p-10 rounded-2xl border-2 border-zinc-800 hover:border-green-500 transition-all'>
              <div className='text-6xl mb-6'>⚡</div>
              <h3 className='text-3xl font-black mb-4'>Sprint</h3>
              <p className='text-gray-400'>
                Execute with intensity. Make the vision real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='relative py-20 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            Values
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { left: 'Surreal', right: 'Facts' },
              { left: 'Honoring', right: 'Rituals' },
              { left: 'Authenticity', right: 'Integrity' },
              { left: 'Travel', right: 'Taxes' },
              { left: 'Hot', right: 'Sex' },
              { left: 'Focus', right: 'Discipline' },
              { left: 'Vision', right: 'Seeing' },
              { left: 'Hearing', right: 'Listening' },
              { left: 'Craftsmanship', right: 'Money' }
            ].map((value, index) => (
              <div
                key={index}
                className='bg-black text-white p-6 rounded-xl border-2 border-black hover:border-purple-600 transition-all'
              >
                <div className='flex items-center justify-between'>
                  <span className='text-2xl font-black'>{value.left}</span>
                  <span className='text-3xl text-purple-400'>&gt;</span>
                  <span className='text-xl font-light text-gray-400'>
                    {value.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className='relative py-20 px-6 bg-linear-to-br from-purple-50 to-pink-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            Founders
          </h2>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Chris */}
            <div className='bg-white p-10 rounded-3xl border-4 border-black shadow-xl'>
              <div className='w-full h-64 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 flex items-center justify-center'>
                <span className='text-8xl'>👨‍💻</span>
              </div>
              <h3 className='text-4xl font-black mb-4'>CHRIS</h3>
              <p className='text-xl font-light leading-relaxed'>
                I had a Software house, but struggling to grow.
              </p>
            </div>

            {/* Wiktor */}
            <div className='bg-white p-10 rounded-3xl border-4 border-black shadow-xl'>
              <img
                src='/images/Wictor.png'
                alt='Wiktor'
                className='w-full h-64 object-cover rounded-2xl mb-6'
              />
              <h3 className='text-4xl font-black mb-4'>WIKTOR</h3>
              <p className='text-xl font-light leading-relaxed'>
                I have faceless YouTube channels, but struggling to compete on
                costs.
              </p>
            </div>
          </div>

          {/* Both */}
          <div className='mt-12 bg-black text-white p-10 rounded-3xl text-center'>
            <h3 className='text-3xl font-black mb-6'>BOTH</h3>
            <p className='text-2xl font-light leading-relaxed max-w-3xl mx-auto'>
              We&apos;re still staffing and buying YouTube channels to build up.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='relative py-32 px-6 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-5xl md:text-7xl font-black mb-12 leading-tight'>
                We hacked human
                <br />
                operating habits
              </h2>
              <p className='text-2xl md:text-3xl font-light leading-relaxed mb-8'>
                Created persuasive videos,
                <br />
                views climbed to millions,
                <br />
                <span className='font-black'>and revenue followed.</span>
              </p>
            </div>
            <div className='relative'>
              <img
                src='/studio.jpg'
                alt='Video Production'
                className='rounded-3xl shadow-2xl w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-black text-white py-12 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
          <p className='text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed'>
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
