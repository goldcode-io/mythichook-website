'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';

export default function AdvertisingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Multi-Section Background Wrapper */}
      <div className='relative'>
        {/* Large Background Image spanning multiple sections */}
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0'
          style={{ width: '50%', height: '3000px' }}
        >
          <img
            src='/images/Paid social advertising.png'
            alt='Paid Social Advertising'
            className='w-full h-auto object-contain opacity-20'
          />
        </div>

        {/* Hero Section */}
        <section className='relative pt-40 pb-20 px-6 z-10'>
          {/* 3D Background Text */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-10'>
            <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-12 -left-40 top-20 animate-pulse-3d'>
              ROAS
            </div>
            <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-12 -right-40 top-1/4 animate-float-3d'>
              SCALE
            </div>
            <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-6 left-1/3 bottom-20 animate-drift-left'>
              PROFIT
            </div>
          </div>

          <div className='max-w-6xl mx-auto relative z-20'>
            <div className='text-center'>
              <h1 className='text-7xl md:text-9xl font-black mb-8 tracking-tight leading-none'>
                Paid Advertising
              </h1>
              <p className='text-3xl md:text-4xl font-light mb-8'>
                Stop burning money. Start making it.
              </p>
              <p className='text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto'>
                Most agencies waste your budget on vanity metrics. We optimize
                for one thing: profit. Every dollar we spend should make you two
                back.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='px-12 py-5 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
              >
                Scale Your Ads
              </button>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className='relative py-20 px-6 bg-zinc-950/50 z-10'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
              Platforms We Master
            </h2>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all text-center'>
                <div className='text-6xl mb-6'>📱</div>
                <h3 className='text-3xl font-black mb-4'>Meta Ads</h3>
                <p className='text-gray-400 mb-6'>
                  Facebook & Instagram campaigns that actually convert
                </p>
                <ul className='text-left space-y-2 text-sm text-gray-400'>
                  <li>• Carousel & video ads</li>
                  <li>• Retargeting sequences</li>
                  <li>• Lookalike audiences</li>
                  <li>• Story & Reel ads</li>
                </ul>
              </div>

              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all text-center'>
                <div className='text-6xl mb-6'>🔍</div>
                <h3 className='text-3xl font-black mb-4'>Google Ads</h3>
                <p className='text-gray-400 mb-6'>
                  Search, Display, and YouTube ads with surgical precision
                </p>
                <ul className='text-left space-y-2 text-sm text-gray-400'>
                  <li>• Search campaigns</li>
                  <li>• Display network</li>
                  <li>• YouTube pre-roll</li>
                  <li>• Shopping ads</li>
                </ul>
              </div>

              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all text-center'>
                <div className='text-6xl mb-6'>🎵</div>
                <h3 className='text-3xl font-black mb-4'>TikTok Ads</h3>
                <p className='text-gray-400 mb-6'>
                  Viral-style content that doesn&apos;t feel like an ad
                </p>
                <ul className='text-left space-y-2 text-sm text-gray-400'>
                  <li>• In-feed ads</li>
                  <li>• Spark ads</li>
                  <li>• Creator partnerships</li>
                  <li>• TikTok Shop integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className='relative py-20 px-6 bg-black/50 z-10'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
              What We Do
            </h2>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800'>
                <h3 className='text-3xl font-black mb-4 flex items-center gap-3'>
                  <span className='text-4xl'>🎯</span>
                  Strategy
                </h3>
                <ul className='space-y-3 text-gray-400'>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Market & competitor analysis</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Audience research & segmentation</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Funnel mapping & optimization</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Budget allocation & forecasting</span>
                  </li>
                </ul>
              </div>

              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800'>
                <h3 className='text-3xl font-black mb-4 flex items-center gap-3'>
                  <span className='text-4xl'>🎨</span>
                  Creative
                </h3>
                <ul className='space-y-3 text-gray-400'>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Ad copywriting that converts</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Video ad production</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Static ad design</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Landing page optimization</span>
                  </li>
                </ul>
              </div>

              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800'>
                <h3 className='text-3xl font-black mb-4 flex items-center gap-3'>
                  <span className='text-4xl'>⚙️</span>
                  Management
                </h3>
                <ul className='space-y-3 text-gray-400'>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Daily campaign monitoring</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>A/B testing & iteration</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Bid optimization</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Budget pacing</span>
                  </li>
                </ul>
              </div>

              <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800'>
                <h3 className='text-3xl font-black mb-4 flex items-center gap-3'>
                  <span className='text-4xl'>📊</span>
                  Analytics
                </h3>
                <ul className='space-y-3 text-gray-400'>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Real-time performance dashboards</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Weekly performance reports</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>ROI tracking & attribution</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Monthly strategy calls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Multi-Section Background Wrapper */}

      {/* Pricing */}
      <section className='relative py-20 px-6 bg-zinc-950'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-8 text-center'>
            Management Fees
          </h2>
          <p className='text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto'>
            Our fee is separate from your ad spend. We optimize your budget to
            maximize return.
          </p>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-8'>
              <h3 className='text-2xl font-black mb-4'>Starter</h3>
              <div className='mb-6'>
                <div className='text-4xl font-black'>15%</div>
                <div className='text-sm text-gray-500'>of ad spend</div>
              </div>
              <p className='text-gray-400 mb-6'>
                For budgets up to <span className='font-bold'>$10k/month</span>
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>

            <div className='bg-linear-to-br from-purple-900 to-pink-900 border-4 border-purple-500 rounded-2xl p-8 relative shadow-2xl transform scale-105'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-black'>
                MOST POPULAR
              </div>
              <h3 className='text-2xl font-black mb-4'>Growth</h3>
              <div className='mb-6'>
                <div className='text-4xl font-black'>12%</div>
                <div className='text-sm text-purple-200'>of ad spend</div>
              </div>
              <p className='text-purple-100 mb-6'>
                For budgets <span className='font-bold'>$10k - $50k/month</span>
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>

            <div className='bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-8'>
              <h3 className='text-2xl font-black mb-4'>Enterprise</h3>
              <div className='mb-6'>
                <div className='text-4xl font-black'>10%</div>
                <div className='text-sm text-gray-500'>of ad spend</div>
              </div>
              <p className='text-gray-400 mb-6'>
                For budgets over <span className='font-bold'>$50k/month</span>
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>
          </div>

          <div className='mt-12 text-center'>
            <p className='text-gray-500 text-sm'>
              Minimum 3-month commitment. No setup fees. Cancel anytime after
              initial period.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className='relative py-20 px-6 bg-black'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-5xl md:text-6xl font-black mb-16'>
            Real Results
          </h2>
          <div className='grid md:grid-cols-3 gap-12'>
            <div>
              <div className='text-6xl font-black mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                3.2x
              </div>
              <div className='text-xl text-gray-400'>Average ROAS</div>
            </div>
            <div>
              <div className='text-6xl font-black mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                $5M+
              </div>
              <div className='text-xl text-gray-400'>Ad Spend Managed</div>
            </div>
            <div>
              <div className='text-6xl font-black mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                47%
              </div>
              <div className='text-xl text-gray-400'>Avg. Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='relative py-24 px-6 bg-linear-to-br from-purple-900 to-pink-900'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-5xl md:text-7xl font-black mb-6'>
            Ready to scale?
          </h2>
          <p className='text-2xl md:text-3xl font-light mb-12 opacity-90'>
            Let&apos;s turn your ad spend into profit.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className='px-12 py-5 bg-white text-purple-900 text-xl font-black rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105'
          >
            Book Strategy Call
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
