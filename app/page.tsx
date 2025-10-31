'use client';

import { useState } from 'react';
import ContactModal from './components/ContactModal';
import YouTubeModal from './components/YouTubeModal';
import Navbar from './components/Navbar';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isYouTubeModalOpen, setIsYouTubeModalOpen] = useState(false);

  const youtubeVideoId = 'dQw4w9WgXcQ';

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <div className='inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-8'>
            🚀 Next-Gen Content Marketing Agency
          </div>
          <h1 className='text-6xl md:text-7xl font-bold mb-6 leading-tight'>
            <span className='bg-linear-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent'>
              Viral Content
            </span>
            <br />
            <span className='bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
              That Hooks Audiences
            </span>
          </h1>
          <p className='text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed'>
            From viral shorts to compelling long-form videos, we create content
            that captivates. Complete with paid ad management and weekly
            strategy calls to accelerate your growth.
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className='px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/50'
            >
              Get Your Free Strategy Call
            </button>
            <button
              onClick={() => setIsYouTubeModalOpen(true)}
              className='px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors'
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto'>
            <div>
              <div className='text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
                5M+
              </div>
              <div className='text-zinc-500 mt-2'>Views Generated</div>
            </div>
            <div>
              <div className='text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                100%
              </div>
              <div className='text-zinc-500 mt-2'>Client Satisfaction</div>
            </div>
            <div>
              <div className='text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
                24/7
              </div>
              <div className='text-zinc-500 mt-2'>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 px-6 bg-zinc-950'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              Our Core
              <span className='bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                {' '}
                Marketing Services
              </span>
            </h2>
            <p className='text-zinc-400 text-lg'>
              End-to-end content marketing solutions that drive results
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-linear-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-colors'>
              <div className='w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl'>
                ✍️
              </div>
              <h3 className='text-2xl font-bold mb-4'>Content Creation</h3>
              <p className='text-zinc-400 leading-relaxed'>
                Professional copywriters and designers craft compelling content
                tailored to your brand voice and audience preferences. Blog
                posts, social media, video scripts, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-linear-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-colors'>
              <div className='w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 text-2xl'>
                📊
              </div>
              <h3 className='text-2xl font-bold mb-4'>Analytics & Reporting</h3>
              <p className='text-zinc-400 leading-relaxed'>
                Comprehensive performance tracking with actionable insights.
                Monthly reports on engagement, conversions, and ROI to optimize
                your strategy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-linear-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-colors'>
              <div className='w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl'>
                📢
              </div>
              <h3 className='text-2xl font-bold mb-4'>Advertising Campaigns</h3>
              <p className='text-zinc-400 leading-relaxed'>
                Strategic paid media campaigns across Google, Meta, LinkedIn,
                and TikTok. From creative development to optimization, we
                maximize your ad spend.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='bg-linear-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-colors'>
              <div className='w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 text-2xl'>
                ⚡
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                Lightning Fast Delivery
              </h3>
              <p className='text-zinc-400 leading-relaxed'>
                Rapid turnaround without compromising quality. We deliver
                content and launch campaigns faster than traditional agencies.
              </p>
            </div>

            {/* Feature 5 */}
            <div className='bg-linear-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-colors'>
              <div className='w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl'>
                🎯
              </div>
              <h3 className='text-2xl font-bold mb-4'>Strategy Development</h3>
              <p className='text-zinc-400 leading-relaxed'>
                Custom content strategies aligned with your business goals.
                Market research, competitor analysis, and audience targeting.
              </p>
            </div>

            {/* Feature 6 */}
            <div className='bg-linear-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-colors'>
              <div className='w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 text-2xl'>
                🤝
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                Dedicated Account Team
              </h3>
              <p className='text-zinc-400 leading-relaxed'>
                Your personal team of strategists, creatives, and analysts.
                Weekly check-ins and 24/7 support to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>How We Work</h2>
            <p className='text-zinc-400 text-lg'>
              Simple, transparent process from strategy to success
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                1
              </div>
              <h3 className='text-2xl font-bold mb-4'>Strategy Session</h3>
              <p className='text-zinc-400'>
                Free consultation to understand your goals, audience, and
                current challenges.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                2
              </div>
              <h3 className='text-2xl font-bold mb-4'>Custom Plan</h3>
              <p className='text-zinc-400'>
                We craft a tailored content strategy and campaign roadmap for
                your brand.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                3
              </div>
              <h3 className='text-2xl font-bold mb-4'>Execute & Scale</h3>
              <p className='text-zinc-400'>
                We manage everything while you track results and watch your
                business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-6 bg-zinc-950'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>
              Simple, Transparent Pricing
            </h2>
            <p className='text-zinc-400 text-lg'>
              Choose the plan that fits your needs
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
            {/* Starter Plan */}
            <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors'>
              <h3 className='text-xl font-bold mb-2'>Starter</h3>
              <div className='text-3xl font-bold mb-1'>$3,000</div>
              <div className='text-sm text-zinc-500 mb-4'>
                One-time ($100 deposit)
              </div>
              <ul className='space-y-3 mb-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Commercial about your company
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>1 viral short</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>1 10-min video</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Paid ad management (up to $5k)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Weekly analytics & strategy call
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors'
              >
                Get Started
              </button>
            </div>

            {/* Growth Plan */}
            <div className='bg-linear-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6 relative'>
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-3 py-0.5 rounded-full text-xs font-semibold'>
                MOST POPULAR
              </div>
              <h3 className='text-xl font-bold mb-2'>Growth</h3>
              <div className='text-3xl font-bold mb-4'>
                $5,000<span className='text-lg text-zinc-500'>/mo</span>
              </div>
              <ul className='space-y-3 mb-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-300'>4 10-min videos</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-300'>Posting for 3 platforms</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-300'>
                    Paid ad management (up to $5k)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-300'>
                    Weekly analytics & strategy calls
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity'
              >
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors'>
              <h3 className='text-xl font-bold mb-2'>Premium</h3>
              <div className='text-3xl font-bold mb-4'>
                $10,000<span className='text-lg text-zinc-500'>/mo</span>
              </div>
              <ul className='space-y-3 mb-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>12 viral shorts</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>4 10-min videos</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>Posting for 5 platforms</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Paid ad management (up to $10k)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Weekly analytics & strategy calls
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors'
              >
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className='bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors'>
              <h3 className='text-xl font-bold mb-2'>Enterprise</h3>
              <div className='text-3xl font-bold mb-4'>
                $30,000<span className='text-lg text-zinc-500'>/mo</span>
              </div>
              <ul className='space-y-3 mb-6 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    32 viral shorts/mo (8/wk)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    16 10-min videos/mo (4/wk)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Posting for 10 platforms
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Paid ad management (up to $50k)
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-500'>✓</span>
                  <span className='text-zinc-400'>
                    Weekly analytics & strategy calls
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors'
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-5xl font-bold mb-6'>
            Ready to Go
            <br />
            <span className='bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
              Viral?
            </span>
          </h2>
          <p className='text-xl text-zinc-400 mb-10'>
            Let&apos;s create content that hooks your audience and drives real
            results
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className='px-10 py-5 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl shadow-cyan-500/50'
          >
            Get Your Strategy Call
          </button>
          <p className='text-zinc-500 mt-4 text-sm'>
            Free consultation · 5M+ views generated · Start with $100 deposit
          </p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className='border-t border-zinc-800 py-12 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <div className='text-2xl font-bold mb-4'>
                <span className='bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                  mythic
                </span>
                <span className='bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
                  HOOK
                </span>
              </div>
              <p className='text-zinc-500 text-sm'>
                Next-gen content marketing that hooks audiences and drives
                growth.
              </p>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Product</h4>
              <ul className='space-y-2 text-zinc-500 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    API
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Company</h4>
              <ul className='space-y-2 text-zinc-500 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Legal</h4>
              <ul className='space-y-2 text-zinc-500 text-sm'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Privacy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Terms
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm'>
            © 2025 mythicHOOK. All rights reserved.
          </div>
        </div>
      </footer> */}

      {/* Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <YouTubeModal
        isOpen={isYouTubeModalOpen}
        onClose={() => setIsYouTubeModalOpen(false)}
        videoId={youtubeVideoId}
      />
    </div>
  );
}
