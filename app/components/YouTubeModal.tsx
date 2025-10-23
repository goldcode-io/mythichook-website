'use client';

interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function YouTubeModal({ isOpen, onClose, videoId }: YouTubeModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/90 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='relative w-full max-w-4xl'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors'
        >
          <svg
            className='w-8 h-8'
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

        {/* Video container with 16:9 aspect ratio */}
        <div className='relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl'>
          <iframe
            className='absolute top-0 left-0 w-full h-full'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
