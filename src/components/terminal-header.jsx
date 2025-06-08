export default function Header() {
  return (
    <>
      <div className='flex w-full min-h-[7%] bg-stone-700 items-center justify-between px-4 rounded-t-2xl'>
        <div className='flex items-center gap-2 text-green-500 font-mono'>
          <img src={'/linux-svgrepo-com.svg'} className='h-5 w-5'></img>
          <span className='text-lg select-none'>hearthdev@hearthdev:~</span>
        </div>

        <div className='flex items-center gap-3'>
          <button
            className='h-8 w-8 flex items-center justify-center rounded hover:bg-gray-600 transition'
            aria-label='Minimize'
            title='Minimize'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <line x1='6' y1='12' x2='18' y2='12' />
            </svg>
          </button>
          <button
            className='h-8 w-8 flex items-center justify-center rounded hover:bg-gray-600 transition'
            aria-label='Maximize'
            title='Maximize'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
            </svg>
          </button>

          <button
            className='h-8 w-8 flex items-center justify-center rounded hover:bg-red-600 transition'
            aria-label='Close'
            title='Close'
          >
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 stroke-black'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
