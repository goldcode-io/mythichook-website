'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/80 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-md w-full shadow-2xl'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors'
        >
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
        </button>

        {/* Header */}
        <h2 className='text-3xl font-bold mb-2'>
          <span className='bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Get in Touch
          </span>
        </h2>
        <p className='text-zinc-400 mb-6'>
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Name field */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors'
              placeholder='Your name'
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors'
              placeholder='your.email@example.com'
            />
          </div>

          {/* Message field */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className='w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none'
              placeholder='Tell us about your project...'
            />
          </div>

          {/* Submit button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <p className='text-green-500 text-sm text-center'>
              Message sent successfully!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className='text-red-500 text-sm text-center'>
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
