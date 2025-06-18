export default function Profile() {
  return (
    <>
      <div className='flex flex-col items-center justify-center border-2 p-5 m-5'>
        <h2 className='text-sm mt-5 font-semibold mb-2'>
          <i>This page is still being worked on...</i>
        </h2>
        <h2 className='text-sm mt-5 font-semibold mb-2'>
          In the meantime, check out my{' '}
          <a
            href='https://github.com/stephan2001'
            className='text-blue-400 underline hover:text-blue-600 transition-colors duration-200'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
          !
        </h2>
      </div>
    </>
  )
}
