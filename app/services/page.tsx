'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';
import Image from 'next/image';

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  useEffect(() => {
    const videos = document.querySelectorAll('video');

    const handlePlay = (e: Event) => {
      const currentVideo = e.target as HTMLVideoElement;
      videos.forEach((video) => {
        if (video !== currentVideo) {
          video.pause();
        }
      });
    };

    videos.forEach((video) => {
      video.addEventListener('play', handlePlay);
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener('play', handlePlay);
      });
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const message = `
APPLICATION FOR FREE VIDEOS

Company/Business: ${data.company}
Website: ${data.website || 'Not provided'}

Why we should choose them:
${data.why}
    `.trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send application');
      }

      setSubmitStatus('success');
      e.currentTarget.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Multi-Section Background Wrapper */}
      <div className='relative'>
        {/* Large Background Image spanning multiple sections */}
        <div
          className='absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0'
          style={{ width: '70%', height: '5000px' }}
        >
          <img
            src='/images/Faceless content production.png'
            alt='Faceless Content Production'
            className='w-full h-auto object-contain opacity-20'
          />
        </div>

        {/* Hero Section */}
        <section className='relative pt-40 pb-20 px-6 z-10'>
          {/* 3D Background Text */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10 z-10'>
            <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-12 -left-20 top-20 animate-float-3d'>
              VIDEOS
            </div>
            <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-12 -right-20 top-40 animate-drift-left'>
              CONTENT
            </div>
            <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-6 left-1/4 bottom-20 animate-pulse-3d'>
              VIRAL
            </div>
          </div>

          <div className='max-w-6xl mx-auto relative z-20'>
            <div className='text-center'>
              <h1 className='text-7xl md:text-9xl font-black mb-8 tracking-tight leading-none'>
                Video Creation
              </h1>
              <p className='text-2xl md:text-3xl font-light'>
                Choose the plan that scales your&nbsp;vision
              </p>
            </div>
          </div>
        </section>

        {/* Scriptwriters Section */}
        <section className='relative py-12 px-6 bg-zinc-950/50 z-10'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all text-center'>
              <p className='text-3xl font-light'>
                Need scriptwriters? We staff starting at{' '}
                <span className='font-bold text-purple-400'>$80/hr</span>
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className='relative py-20 px-6 bg-zinc-950/50 z-10'>
          <div className='max-w-7xl mx-auto'>
            <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
              Our Work
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              <div className='bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
                <video
                  src='/videos/evolutionv1s.mp4'
                  controls
                  className='w-full aspect-9/16'
                  preload='metadata'
                />
              </div>
              <div className='bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
                <video
                  src='/videos/evolutionv2s.mp4'
                  controls
                  className='w-full aspect-9/16'
                  preload='metadata'
                />
              </div>
              <div className='bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
                <video
                  src='/videos/heartlandfr1s.mp4'
                  controls
                  className='w-full aspect-9/16'
                  preload='metadata'
                />
              </div>
              <div className='bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
                <video
                  src='/videos/irondots1s.mp4'
                  controls
                  className='w-full aspect-9/16'
                  preload='metadata'
                />
              </div>
              <div className='bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
                <video
                  src='/videos/irondots2s.mp4'
                  controls
                  className='w-full aspect-9/16'
                  preload='metadata'
                />
              </div>
              <div className='bg-zinc-900 rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
                <video
                  src='/videos/irondots3s.mp4'
                  controls
                  className='w-full aspect-9/16'
                  preload='metadata'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* End Multi-Section Background Wrapper */}

      {/* White Glove Service - Premium Add-on */}
      <section className='relative py-12 px-6 bg-linear-to-br from-purple-900 to-pink-900'>
        <div className='max-w-6xl mx-auto'>
          <div className='bg-black/50 backdrop-blur-sm p-12 rounded-3xl border-2 border-purple-500'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
              <div>
                <div className='inline-block px-4 py-2 bg-purple-500 text-white text-sm font-bold rounded-full mb-4'>
                  PREMIUM ADD-ON
                </div>
                <h2 className='text-5xl md:text-6xl font-black mb-4'>
                  White Glove Service
                </h2>
                <p className='text-2xl font-light text-gray-300 mb-6'>
                  Work with Wiktor & Chris one-on-one
                </p>
                <ul className='space-y-3 text-lg'>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>✓</span>
                    <span>1 Call per week with founders</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>✓</span>
                    <span>Personal research on your market</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>✓</span>
                    <span>Always priority videos</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-purple-400'>✓</span>
                    <span>24-hour response guarantee</span>
                  </li>
                </ul>
              </div>
              <div className='text-center lg:text-right'>
                <div className='text-6xl font-black mb-2'>$36,000</div>
                <div className='text-2xl text-gray-400 mb-6'>/month</div>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className='px-10 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:opacity-90 transition-all'
                >
                  Apply Now
                </button>
                <p className='text-sm text-gray-500 mt-3'>
                  (Add-on, not including services)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HypnoStyle Add-on */}
      <section className='relative py-20 px-6 bg-linear-to-br from-indigo-950 to-purple-950'>
        <div className='max-w-6xl mx-auto'>
          <div className='bg-black/70 backdrop-blur-sm p-12 rounded-3xl border-2 border-purple-500'>
            <div className='grid lg:grid-cols-2 gap-12'>
              <div>
                <div className='inline-block px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full mb-4'>
                  ADD-ON SERVICE
                </div>
                <h2 className='text-5xl md:text-6xl font-black mb-6'>
                  HypnoStyle
                </h2>
                <p className='text-2xl font-light text-purple-200 mb-8'>
                  Neuro-persuasion techniques that convert
                </p>

                <div className='space-y-3 text-lg'>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Subliminal text & audio</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>AI-blended tones & pacing</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Persuasive text patterns</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Repetition for truthiness</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Goal priming & gaze cueing</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>
                      Presuppositions: speak as if adoption is decided
                    </span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Embedded commands: stress action verbs</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Yes ladder technique</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Specific numbers for credibility</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Rule of 3 repetition</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Contrast frames & social proof</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Future pacing & sensory language</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-purple-400'>•</span>
                    <span>Strategic pauses for impact</span>
                  </div>
                </div>
              </div>

              <div>
                <div className='bg-purple-900/50 p-8 rounded-2xl border border-purple-500/30 mb-8'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Craftsmanship of HypnoStyle
                  </h3>
                  <p className='text-gray-300 leading-relaxed mb-6'>
                    We&apos;re not giving away the secret sauce, but here&apos;s
                    how it was made:
                  </p>
                  <ul className='space-y-3 text-sm text-gray-400'>
                    <li>• EIA group behavioral analysis training</li>
                    <li>
                      • Chase Hughes&apos; courses on behavioral profiling &
                      influence
                    </li>
                    <li>• Voice Stress Analysis techniques</li>
                    <li>• Police interrogation methods</li>
                  </ul>
                  <p className='text-lg font-light mt-6 italic text-purple-300'>
                    &quot;What&apos;s better than an original? The craftsman of
                    a perfect replica, minus the brand cost.&quot;
                  </p>
                </div>

                <div className='bg-black p-8 rounded-2xl text-center'>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className='w-full px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-xl hover:opacity-90 transition-all'
                  >
                    Request HypnoStyle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className='relative py-20 px-6 bg-linear-to-br from-zinc-900 to-black'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex justify-center mb-12'>
            {/* Card 1 */}
            <div className='bg-zinc-950/80 backdrop-blur-sm p-10 rounded-3xl border-2 border-green-500/50 max-w-xl'>
              <h3 className='text-4xl md:text-5xl font-black mb-4 text-green-400'>
                Free videos monthly
              </h3>
              <p className='text-xl text-gray-300'>
                for first 1000 views for qualified applicants
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className='bg-black p-10 md:p-12 rounded-3xl border-4 border-purple-500 shadow-2xl'>
            <h3 className='text-4xl md:text-5xl font-black mb-4 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Apply for Free Videos
            </h3>
            <p className='text-xl text-gray-400 text-center mb-10'>
              Ever want to reject a customer? We know. That&apos;s why we have
              an application.
            </p>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-bold mb-2 text-gray-300'
                  >
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-700 rounded-xl focus:outline-none focus:border-purple-500 text-white'
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-bold mb-2 text-gray-300'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-700 rounded-xl focus:outline-none focus:border-purple-500 text-white'
                    placeholder='your@email.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='block text-sm font-bold mb-2 text-gray-300'
                >
                  Company/Business *
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  required
                  className='w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-700 rounded-xl focus:outline-none focus:border-purple-500 text-white'
                  placeholder='Your company name'
                />
              </div>

              <div>
                <label
                  htmlFor='website'
                  className='block text-sm font-bold mb-2 text-gray-300'
                >
                  Website/Social Media URL
                </label>
                <input
                  type='url'
                  id='website'
                  name='website'
                  className='w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-700 rounded-xl focus:outline-none focus:border-purple-500 text-white'
                  placeholder='https://yourwebsite.com'
                />
              </div>

              <div>
                <label
                  htmlFor='why'
                  className='block text-sm font-bold mb-2 text-gray-300'
                >
                  Why should we choose to give you free work? *
                </label>
                <textarea
                  id='why'
                  name='why'
                  required
                  rows={6}
                  className='w-full px-4 py-3 bg-zinc-900 border-2 border-zinc-700 rounded-xl focus:outline-none focus:border-purple-500 text-white resize-none'
                  placeholder='Tell us about your business, your goals, and why you would be a great fit for our free video program...'
                />
                <p className='text-sm text-gray-500 mt-2'>
                  Be specific and authentic. We value transparency and ambition.
                </p>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full px-8 py-5 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xl font-black rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className='bg-green-500/20 border border-green-500 rounded-xl p-4'>
                  <p className='text-green-400 text-center font-semibold'>
                    Application submitted successfully! We&apos;ll review your
                    submission and get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className='bg-red-500/20 border border-red-500 rounded-xl p-4'>
                  <p className='text-red-400 text-center font-semibold'>
                    Failed to submit application. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}

              <p className='text-center text-sm text-gray-500'>
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Growth Graph Section */}
      <section className='relative py-20 px-6 bg-zinc-950'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-black mb-12 text-center'>
            Proven Growth Trajectory
          </h2>
          <div className='bg-white rounded-3xl p-8'>
            <img
              src='/images/graph.svg'
              alt='Growth Analytics'
              className='w-full h-auto'
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className='relative py-20 px-6 bg-black'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-black mb-6'>
            We Post On All Major Platforms
          </h2>
          <p className='text-xl text-gray-400 mb-12'>
            Your content everywhere your audience is
          </p>

          <div className='flex flex-wrap justify-center items-center gap-12'>
            <div className='flex flex-col items-center gap-3 hover-lift'>
              <Image
                src='/icons/simple-icons_youtube.svg'
                alt='YouTube'
                width={64}
                height={64}
                className='invert'
              />
              <span className='text-sm font-bold'>YouTube</span>
            </div>
            <div className='flex flex-col items-center gap-3 hover-lift'>
              <Image
                src='/icons/ri_instagram-fill.svg'
                alt='Instagram'
                width={64}
                height={64}
                className='invert'
              />
              <span className='text-sm font-bold'>Instagram</span>
            </div>
            <div className='flex flex-col items-center gap-3 hover-lift'>
              <Image
                src='/icons/streamline-logos_tiktok-logo-block.svg'
                alt='TikTok'
                width={64}
                height={64}
                className='invert'
              />
              <span className='text-sm font-bold'>TikTok</span>
            </div>
            <div className='flex flex-col items-center gap-3 hover-lift'>
              <Image
                src='/icons/fa6-brands_square-x-twitter.svg'
                alt='Twitter/X'
                width={64}
                height={64}
                className='invert'
              />
              <span className='text-sm font-bold'>Twitter/X</span>
            </div>
            <div className='flex flex-col items-center gap-3 hover-lift'>
              <Image
                src='/icons/mage_linkedin.svg'
                alt='LinkedIn'
                width={64}
                height={64}
                className='invert'
              />
              <span className='text-sm font-bold'>LinkedIn</span>
            </div>
            <div className='flex flex-col items-center gap-3 hover-lift'>
              <Image
                src='/icons/mingcute_pinterest-fill.svg'
                alt='Pinterest'
                width={64}
                height={64}
                className='invert'
              />
              <span className='text-sm font-bold'>Pinterest</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className='relative py-20 px-6 bg-black'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            Choose Your Plan
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Starter Plan */}
            <div className='bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-8 hover-lift hover-glow'>
              <h3 className='text-2xl font-black mb-2'>Starter</h3>
              <div className='text-5xl font-black mb-1'>$500</div>
              <div className='text-sm text-gray-500 mb-8'>
                One-time • $100 deposit
              </div>

              <ul className='space-y-4 mb-8 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Commercial about your company</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>1 viral short</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>1 10-min video</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Paid ad management (up to $5k)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Weekly analytics & strategy call</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className='bg-linear-to-br from-purple-900 to-pink-900 border-4 border-purple-500 rounded-2xl p-8 relative transform lg:scale-110 z-10 shadow-2xl'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-black'>
                MOST POPULAR
              </div>

              <h3 className='text-2xl font-black mb-2'>Growth</h3>
              <div className='text-5xl font-black mb-1'>$5,000</div>
              <div className='text-sm text-purple-200 mb-8'>/month</div>

              <ul className='space-y-4 mb-8 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>15 shorts</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>5 10-min videos</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Posting for 3 platforms</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Paid ad management (up to $5k)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Weekly analytics & strategy calls</span>
                </li>
              </ul>

              <div className='bg-black/30 p-4 rounded-lg mb-6'>
                <p className='text-sm font-bold text-pink-300'>
                  &quot;20 booked demos by day 30.&quot;
                </p>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className='bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-8 hover-lift hover-glow'>
              <div className='text-xs font-bold text-orange-400 mb-2'>
                2ND PRIORITY
              </div>
              <h3 className='text-2xl font-black mb-2'>Premium</h3>
              <div className='text-5xl font-black mb-1'>$10,000</div>
              <div className='text-sm text-gray-500 mb-8'>/month</div>

              <ul className='space-y-4 mb-8 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>30 viral shorts</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>10 10-min videos</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Posting for 5 platforms</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Paid ad management (up to $10k)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Weekly analytics & strategy calls</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className='bg-linear-to-br from-yellow-900 to-orange-900 border-2 border-yellow-600 rounded-2xl p-8 hover-lift'>
              <div className='text-xs font-bold text-yellow-400 mb-2'>
                1 PRIORITY
              </div>
              <h3 className='text-2xl font-black mb-2'>Enterprise</h3>
              <div className='text-5xl font-black mb-1'>$30,000</div>
              <div className='text-sm text-yellow-200 mb-8'>/month</div>

              <ul className='space-y-4 mb-8 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-yellow-300'>✓</span>
                  <span>32 viral shorts/mo (8/wk)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-yellow-300'>✓</span>
                  <span>16 10-min videos/mo (4/wk)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-yellow-300'>✓</span>
                  <span>Posting for 10 platforms</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-yellow-300'>✓</span>
                  <span>Paid ad management (up to $50k)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-yellow-300'>✓</span>
                  <span>Weekly analytics & strategy call</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-all'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-zinc-950 border-t border-zinc-800 py-12 px-6'>
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
