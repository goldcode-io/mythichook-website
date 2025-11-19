'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';

export default function ShopifyPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {/* Navigation */}
      <Navbar onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Hero Section */}
      <section className='relative pt-40 pb-20 px-6'>
        {/* 3D Background Text */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10'>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-6 -left-32 top-10 animate-drift-right'>
            SHOPIFY
          </div>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap -rotate-6 -right-32 top-1/3 animate-float-3d'>
            ECOMMERCE
          </div>
          <div className='absolute text-9xl font-black text-3d whitespace-nowrap rotate-3 left-1/4 bottom-10 animate-pulse-3d'>
            CONVERT
          </div>
        </div>

        <div className='max-w-6xl mx-auto relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h1 className='text-7xl md:text-9xl font-black mb-8 tracking-tight leading-none'>
                Shopify Stores
              </h1>
              <p className='text-3xl md:text-4xl font-light mb-8'>
                Built to convert. Designed to scale.
              </p>
              <p className='text-xl text-gray-400 leading-relaxed mb-12'>
                Most Shopify stores look like templates because they are. We
                build custom stores that match your brand, convert visitors, and
                grow with your business.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className='px-12 py-5 bg-linear-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'
              >
                Start Your Store
              </button>
            </div>
            <div className='relative'>
              <img
                src='/studio.jpg'
                alt='Shopify Store Development'
                className='rounded-3xl shadow-2xl w-full h-auto border-4 border-purple-500/30'
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className='relative py-20 px-6 bg-zinc-950'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            What&apos;s Included
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>🎨</div>
              <h3 className='text-3xl font-black mb-4'>Custom Design</h3>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Brand-specific design system</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Mobile-first responsive layout</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>High-converting product pages</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Custom checkout experience</span>
                </li>
              </ul>
            </div>

            <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>⚡</div>
              <h3 className='text-3xl font-black mb-4'>Performance</h3>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Lightning-fast load times</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>SEO optimization</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Conversion rate optimization</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Analytics integration</span>
                </li>
              </ul>
            </div>

            <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>🛠️</div>
              <h3 className='text-3xl font-black mb-4'>Technical Setup</h3>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>App integration & configuration</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Payment gateway setup</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Shipping & tax automation</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Email marketing integration</span>
                </li>
              </ul>
            </div>

            <div className='bg-zinc-900 p-8 rounded-2xl border-2 border-zinc-800 hover:border-purple-500/50 transition-all'>
              <div className='text-5xl mb-4'>📈</div>
              <h3 className='text-3xl font-black mb-4'>Growth Features</h3>
              <ul className='space-y-3 text-gray-400'>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Product recommendations</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Abandoned cart recovery</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Upsell & cross-sell automation</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-purple-400'>•</span>
                  <span>Customer loyalty programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='relative py-20 px-6 bg-black'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            Pricing
          </h2>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Standard */}
            <div className='bg-zinc-900 border-2 border-zinc-800 rounded-2xl p-8'>
              <h3 className='text-2xl font-black mb-2'>Standard Store</h3>
              <div className='text-5xl font-black mb-1'>$5,000</div>
              <div className='text-sm text-gray-500 mb-8'>One-time build</div>

              <ul className='space-y-4 mb-8 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400'>✓</span>
                  <span>Custom theme development</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400'>✓</span>
                  <span>Up to 50 products</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400'>✓</span>
                  <span>Mobile responsive design</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400'>✓</span>
                  <span>Basic SEO setup</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400'>✓</span>
                  <span>2 weeks delivery</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>

            {/* Premium */}
            <div className='bg-linear-to-br from-purple-900 to-pink-900 border-4 border-purple-500 rounded-2xl p-8 relative shadow-2xl'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-black'>
                RECOMMENDED
              </div>

              <h3 className='text-2xl font-black mb-2'>Premium Store</h3>
              <div className='text-5xl font-black mb-1'>$10,000</div>
              <div className='text-sm text-purple-200 mb-8'>One-time build</div>

              <ul className='space-y-4 mb-8 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Fully custom design</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Unlimited products</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Advanced animations & interactions</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Full SEO optimization</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>Custom app integrations</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>3 weeks delivery</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-pink-300'>✓</span>
                  <span>30 days post-launch support</span>
                </li>
              </ul>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className='w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all'
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className='relative py-20 px-6 bg-zinc-950'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 text-center'>
            Our Process
          </h2>

          <div className='grid md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black'>
                1
              </div>
              <h3 className='text-2xl font-black mb-3'>Discovery</h3>
              <p className='text-gray-400'>
                We learn your brand, products, and target audience
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black'>
                2
              </div>
              <h3 className='text-2xl font-black mb-3'>Design</h3>
              <p className='text-gray-400'>
                Custom mockups and prototypes for your approval
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black'>
                3
              </div>
              <h3 className='text-2xl font-black mb-3'>Build</h3>
              <p className='text-gray-400'>
                Development, testing, and optimization
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black'>
                4
              </div>
              <h3 className='text-2xl font-black mb-3'>Launch</h3>
              <p className='text-gray-400'>
                Go live with full support and training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='relative py-24 px-6 bg-linear-to-br from-purple-900 to-pink-900'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-5xl md:text-7xl font-black mb-6'>
            Ready to launch?
          </h2>
          <p className='text-2xl md:text-3xl font-light mb-12 opacity-90'>
            Let&apos;s build a store that converts.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className='px-12 py-5 bg-white text-purple-900 text-xl font-black rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105'
          >
            Get Your Quote
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
