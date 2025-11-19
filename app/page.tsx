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
    <div className='min-h-screen bg-slate-950 text-white'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className='relative pt-32 pb-24 px-6 overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950/30 -z-10' />
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10' />
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10' />

        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6'>
                <span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse' />
                Trusted by industry leaders
              </div>
              <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-[1.1]'>
                Transform Your Brand Into a
                <span className='block mt-2 bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                  Content Powerhouse
                </span>
              </h1>
              <p className='text-lg md:text-xl text-slate-300 mb-10 leading-relaxed'>
                We craft high-converting video content, manage your paid
                campaigns, and provide strategic guidance to skyrocket your
                brand&apos;s visibility and revenue.
              </p>
              <div className='flex gap-4 flex-wrap'>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className='px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105'
                >
                  Start Your Growth Journey
                </button>
                <button
                  onClick={() => setIsYouTubeModalOpen(true)}
                  className='px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-all duration-300'
                >
                  See Our Work
                </button>
              </div>

              {/* Stats Row */}
              <div className='grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-800'>
                <div>
                  <div className='text-3xl md:text-4xl font-bold text-emerald-400 mb-1'>
                    5M+
                  </div>
                  <div className='text-sm text-slate-400'>Views Generated</div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-bold text-amber-400 mb-1'>
                    100%
                  </div>
                  <div className='text-sm text-slate-400'>
                    Satisfaction Rate
                  </div>
                </div>
                <div>
                  <div className='text-3xl md:text-4xl font-bold text-emerald-400 mb-1'>
                    24/7
                  </div>
                  <div className='text-sm text-slate-400'>Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className='relative hidden lg:block'>
              <div className='relative w-full aspect-square'>
                {/* Decorative Elements */}
                <div className='absolute inset-0 bg-linear-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl rotate-6 blur-xl' />
                <div className='relative bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl'>
                  <div className='space-y-4'>
                    {/* Mock Video Player */}
                    <div className='aspect-video bg-linear-to-br from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/20 flex items-center justify-center'>
                      <div className='w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/50'>
                        <svg
                          className='w-8 h-8 text-white ml-1'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M8 5v14l11-7z' />
                        </svg>
                      </div>
                    </div>
                    {/* Stats Bars */}
                    <div className='space-y-3 pt-4'>
                      <div className='flex items-center gap-3'>
                        <div className='text-xs text-slate-400 w-20'>
                          Engagement
                        </div>
                        <div className='flex-1 h-2 bg-slate-700 rounded-full overflow-hidden'>
                          <div className='h-full w-[92%] bg-linear-to-r from-emerald-500 to-teal-500 rounded-full' />
                        </div>
                        <div className='text-xs font-semibold text-emerald-400'>
                          92%
                        </div>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='text-xs text-slate-400 w-20'>Reach</div>
                        <div className='flex-1 h-2 bg-slate-700 rounded-full overflow-hidden'>
                          <div className='h-full w-[87%] bg-linear-to-r from-amber-500 to-orange-500 rounded-full' />
                        </div>
                        <div className='text-xs font-semibold text-amber-400'>
                          87%
                        </div>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='text-xs text-slate-400 w-20'>
                          Conversion
                        </div>
                        <div className='flex-1 h-2 bg-slate-700 rounded-full overflow-hidden'>
                          <div className='h-full w-[95%] bg-linear-to-r from-emerald-500 to-teal-500 rounded-full' />
                        </div>
                        <div className='text-xs font-semibold text-emerald-400'>
                          95%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-24 px-6 bg-slate-950'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <div className='inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6'>
              Our Services
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Everything You Need to
              <span className='block mt-2 bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                Dominate Your Market
              </span>
            </h2>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
              Comprehensive content marketing solutions designed to amplify your
              brand and drive measurable growth
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Feature 1 - Large */}
            <div className='lg:col-span-2 bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group'>
              <div className='flex items-start gap-4'>
                <div className='w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300'>
                  ✍️
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-3'>
                    Premium Content Creation
                  </h3>
                  <p className='text-slate-400 leading-relaxed mb-4'>
                    Expert copywriters, videographers, and designers collaborate
                    to produce scroll-stopping content perfectly aligned with
                    your brand identity. From viral shorts to long-form videos,
                    we handle it all.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs'>
                      Video Production
                    </span>
                    <span className='px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs'>
                      Copywriting
                    </span>
                    <span className='px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs'>
                      Social Media
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group'>
              <div className='w-14 h-14 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300'>
                📊
              </div>
              <h3 className='text-2xl font-bold mb-3'>Analytics & Insights</h3>
              <p className='text-slate-400 leading-relaxed'>
                Data-driven reports with actionable metrics. Track engagement,
                ROI, and conversions in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group'>
              <div className='w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300'>
                📢
              </div>
              <h3 className='text-2xl font-bold mb-3'>Paid Advertising</h3>
              <p className='text-slate-400 leading-relaxed'>
                Strategic campaigns across all major platforms. We optimize
                every dollar of your ad spend for maximum impact.
              </p>
            </div>

            {/* Feature 4 - Large */}
            <div className='lg:col-span-2 bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group'>
              <div className='flex items-start gap-4'>
                <div className='w-14 h-14 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300'>
                  ⚡
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-3'>
                    Rapid Execution & Delivery
                  </h3>
                  <p className='text-slate-400 leading-relaxed mb-4'>
                    Time is money. Our streamlined workflows and dedicated teams
                    ensure lightning-fast turnaround without sacrificing
                    quality. Launch campaigns in days, not weeks.
                  </p>
                  <div className='grid grid-cols-3 gap-4 pt-4 border-t border-slate-700'>
                    <div>
                      <div className='text-2xl font-bold text-emerald-400'>
                        3x
                      </div>
                      <div className='text-xs text-slate-500'>
                        Faster Delivery
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-amber-400'>
                        48h
                      </div>
                      <div className='text-xs text-slate-500'>Avg Response</div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-emerald-400'>
                        100%
                      </div>
                      <div className='text-xs text-slate-500'>On Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group'>
              <div className='w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300'>
                🎯
              </div>
              <h3 className='text-2xl font-bold mb-3'>Strategic Planning</h3>
              <p className='text-slate-400 leading-relaxed'>
                Custom roadmaps built on deep market research, competitor
                analysis, and audience insights.
              </p>
            </div>

            {/* Feature 6 */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group'>
              <div className='w-14 h-14 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300'>
                🤝
              </div>
              <h3 className='text-2xl font-bold mb-3'>Dedicated Team</h3>
              <p className='text-slate-400 leading-relaxed'>
                Your own strategist, creative director, and analyst. Weekly
                calls and 24/7 Slack access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-24 px-6 bg-slate-900/50'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-20'>
            <div className='inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm mb-6'>
              Our Process
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              From First Call to
              <span className='block mt-2 bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent'>
                Viral Success
              </span>
            </h2>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
              A proven, streamlined process that gets you results fast
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Connecting Line */}
            <div className='absolute top-8 left-8 right-8 h-1 bg-linear-to-r from-emerald-500 via-amber-500 to-emerald-500 hidden md:block' />

            <div className='grid md:grid-cols-3 gap-8 md:gap-6'>
              {/* Step 1 */}
              <div className='relative'>
                <div className='bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300'>
                  <div className='relative w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-emerald-500/30 z-10'>
                    1
                  </div>
                  <h3 className='text-2xl font-bold mb-3 text-center'>
                    Discovery Call
                  </h3>
                  <p className='text-slate-400 text-center leading-relaxed mb-4'>
                    Free 30-minute consultation to dive deep into your goals,
                    audience, and current marketing challenges.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    Free & No Commitment
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className='relative'>
                <div className='bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300'>
                  <div className='relative w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-amber-500/30 z-10'>
                    2
                  </div>
                  <h3 className='text-2xl font-bold mb-3 text-center'>
                    Custom Strategy
                  </h3>
                  <p className='text-slate-400 text-center leading-relaxed mb-4'>
                    We build a comprehensive content roadmap and campaign
                    strategy tailored specifically to your brand.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-amber-400 text-sm font-semibold'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                    Delivered in 48 Hours
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className='relative'>
                <div className='bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300'>
                  <div className='relative w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-emerald-500/30 z-10'>
                    3
                  </div>
                  <h3 className='text-2xl font-bold mb-3 text-center'>
                    Launch & Scale
                  </h3>
                  <p className='text-slate-400 text-center leading-relaxed mb-4'>
                    We execute the plan, manage campaigns, and continuously
                    optimize for maximum growth and ROI.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                      />
                    </svg>
                    Ongoing Optimization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-24 px-6 bg-slate-950'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-20'>
            <div className='inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6'>
              Pricing Plans
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Invest in Your
              <span className='block mt-2 bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                Growth Journey
              </span>
            </h2>
            <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
              Transparent pricing with no hidden fees. Scale as you grow.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
            {/* Starter Plan */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]'>
              <div className='mb-6'>
                <h3 className='text-lg font-bold text-slate-300 mb-2'>
                  Starter
                </h3>
                <div className='flex items-baseline gap-1'>
                  <span className='text-4xl font-bold'>$3,000</span>
                </div>
                <div className='text-xs text-slate-500 mt-1'>
                  One-time • $100 deposit
                </div>
              </div>
              <ul className='space-y-3 mb-8 text-sm'>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Company commercial</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>1 viral short</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>1 long-form video</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Ad mgmt (up to $5k)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Weekly strategy call</span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm font-semibold transition-colors'
              >
                Get Started
              </button>
            </div>

            {/* Growth Plan - Featured */}
            <div className='bg-linear-to-br from-emerald-900/40 to-teal-900/40 border-2 border-emerald-500/50 rounded-2xl p-6 relative hover:border-emerald-400 transition-all duration-300 hover:scale-[1.05] shadow-xl shadow-emerald-500/10'>
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg'>
                MOST POPULAR
              </div>
              <div className='mb-6'>
                <h3 className='text-lg font-bold text-white mb-2'>Growth</h3>
                <div className='flex items-baseline gap-1'>
                  <span className='text-4xl font-bold text-white'>$5,000</span>
                  <span className='text-slate-400'>/mo</span>
                </div>
              </div>
              <ul className='space-y-3 mb-8 text-sm'>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-300 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-white'>4 long-form videos</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-300 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-white'>3 platform posting</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-300 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-white'>Ad mgmt (up to $5k)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-300 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-white'>Weekly strategy calls</span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-3 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-emerald-500/20'
              >
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:scale-[1.02]'>
              <div className='mb-6'>
                <h3 className='text-lg font-bold text-slate-300 mb-2'>
                  Premium
                </h3>
                <div className='flex items-baseline gap-1'>
                  <span className='text-4xl font-bold'>$10,000</span>
                  <span className='text-slate-500'>/mo</span>
                </div>
              </div>
              <ul className='space-y-3 mb-8 text-sm'>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>12 viral shorts</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>4 long-form videos</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>5 platform posting</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Ad mgmt (up to $10k)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-emerald-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Weekly strategy calls</span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm font-semibold transition-colors'
              >
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className='bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.02]'>
              <div className='mb-6'>
                <h3 className='text-lg font-bold text-slate-300 mb-2'>
                  Enterprise
                </h3>
                <div className='flex items-baseline gap-1'>
                  <span className='text-4xl font-bold'>$30,000</span>
                  <span className='text-slate-500'>/mo</span>
                </div>
              </div>
              <ul className='space-y-3 mb-8 text-sm'>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-amber-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>32 viral shorts/mo</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-amber-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>16 long-form videos/mo</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-amber-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>10 platform posting</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-amber-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Ad mgmt (up to $50k)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <svg
                    className='w-5 h-5 text-amber-400 shrink-0 mt-0.5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='text-slate-300'>Priority support</span>
                </li>
              </ul>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm font-semibold transition-colors'
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-32 px-6 overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0 bg-linear-to-br from-emerald-950 via-slate-900 to-teal-950 -z-10' />
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -z-10' />
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -z-10' />

        <div className='max-w-4xl mx-auto text-center relative'>
          <div className='inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-8'>
            Ready to Transform Your Brand?
          </div>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
            Let&apos;s Build Your
            <span className='block mt-2 bg-linear-to-r from-emerald-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent'>
              Content Empire
            </span>
          </h2>
          <p className='text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed'>
            Join the brands that trust mythicHOOK to create viral content,
            manage campaigns, and drive real, measurable growth
          </p>
          <div className='flex gap-4 justify-center flex-wrap mb-10'>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className='px-10 py-5 bg-linear-to-r from-emerald-500 to-teal-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105'
            >
              Book Your Free Strategy Call
            </button>
            <button
              onClick={() => setIsYouTubeModalOpen(true)}
              className='px-10 py-5 bg-slate-800/50 border-2 border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-700/50 transition-all duration-300'
            >
              Watch Case Studies
            </button>
          </div>
          <div className='flex items-center justify-center gap-8 text-sm text-slate-400'>
            <div className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-emerald-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              Free consultation
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-emerald-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              No commitment
            </div>
            <div className='flex items-center gap-2'>
              <svg
                className='w-5 h-5 text-emerald-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              5M+ views generated
            </div>
          </div>
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
