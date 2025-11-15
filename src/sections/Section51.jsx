export default function Section1() {
  return (
    <div className='text-white w-full flex min-h-[300px] flex-col items-center'>
      <div className='md:w-[60vw] w-[90vw] flex flex-col gap-6'>
        <div className='relative overflow-hidden h-[40vh] md:h-[75vh] w-full rounded-2xl'>
          {/* Background Image */}
          <div className='absolute inset-0'>
            <img
              src='/bbv.webp'
              alt='Background Image'
              className='w-full h-full object-cover object-center rounded-2xl'
            />
            <div className='absolute inset-0 bg-black/15'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 flex flex-col justify-end items-start h-full p-10'>
            <h1 className='md:text-5xl text-base font-bold leading-tight mb-4'>
              BBV attorneys website
            </h1>

            <a
              href='https://bbv-website.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
            >
              View demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
