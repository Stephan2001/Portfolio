export default function Section1() {
  return (
    <div className='text-white w-full flex flex-col items-center'>
      <div className='md:w-[60vw] w-[90vw] flex flex-col gap-6'>
        <div className='relative overflow-hidden md:h-[75vh] h-[500px] w-full rounded-2xl group hover:border-2 hover:border-yellow-500'>
          <div className='absolute inset-0'>
            <video
              src='/VID-20240905-WA0001.mp4'
              autoPlay
              loop
              muted
              playsInline
              className='object-cover object-center w-full h-full rounded-2xl'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
          </div>

          <div
            className='
    absolute top-0 right-0 h-full
    w-1/3 max-w-[480px]
    transform translate-x-full
    group-hover:translate-x-0
    transition-transform duration-500 ease-out
    z-20
    backdrop-blur-xl
    bg-black/10
  '
          >
            <div className='h-full p-8 flex flex-col justify-center gap-4'>
              <p className='text-lg font-semibold leading-relaxed'>
                IoT project and mobile app project for managing a smallscale
                smart home.
              </p>

              <ul className='text-sm space-y-2'>
                <div>Sensor Readings</div>
                <div>Event history</div>
                <div>Scheduled routines</div>
                <div>and more...</div>
              </ul>

              <div className='relative z-10'>
                <a
                  href='https://github.com/Stephan2001/Smart-home-app/tree/main/UnoHomeApp#unohome-app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-4 inline-block w-auto bg-yellow-400 text-gray-900 py-2 px-5 rounded-full text-sm font-semibold hover:bg-yellow-300 transition'
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className='relative z-10 flex flex-col justify-end items-start h-full p-10'>
            <h1 className='text-5xl font-bold leading-tight mb-4'>
              Arduino smart home
            </h1>

            <a
              href='https://github.com/Stephan2001/Smart-home-app'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
