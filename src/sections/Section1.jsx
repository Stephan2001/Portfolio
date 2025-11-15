import GitSVG from '../components/svg/github'
import LinkdinSVG from '../components/svg/linkdin'
import EmailSVG from '../components/svg/email'
import Avatar from '../components/profile-avatar'

export default function Section1() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 p-10 md:p-0'>
        {/* Display avatar for mobile */}
        <div className='flex justify-center md:hidden mb-4'>
          <Avatar size={200} />
        </div>

        {/* text content */}
        <div className='space-y-6'>
          <div className='flex gap-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>Stephan</h1>
            <h1 className='text-4xl md:text-6xl font-bold text-green-500'>
              Moolman
            </h1>
          </div>
          <div className='flex gap-4'>
            <h2 className='text-3xl md:text-5xl font-bold text-green-500'>
              Full-Stack
            </h2>
            <h2 className='text-3xl md:text-5xl font-bold'>Developer</h2>
          </div>
          <div className='flex items-center'>
            <ul className='pl-3 md:pl-5 border-l-4 border-green-500 space-y-2'>
              <h1 className='text-lg md:text-2xl'>
                South Africa, Eastern Cape, Port Elizabeth
              </h1>
              <h1 className='text-lg md:text-2xl'>
                stephan.moolman.dev@gmail.com
              </h1>
              <h1 className='text-lg md:text-2xl'>+27 79 042 1364</h1>
            </ul>
          </div>
          <div className='text-2xl hidden md:block'>
            <div className='flex flex-wrap justify-center gap-6 p-4'>
              {[
                {
                  label: 'GitHub',
                  svg: <GitSVG />,
                  link: 'https://github.com/Stephan2001',
                },
                {
                  label: 'LinkedIn',
                  svg: <LinkdinSVG />,
                  link: 'https://www.linkedin.com/in/stephan-moolman2001/',
                },
                {
                  label: 'Email',
                  svg: <EmailSVG />,
                  link: 'mailto:stephan.moolman.dev@gmail.com',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group'
                >
                  <div
                    className='
                      flex flex-col items-center w-24 border-2 p-2 rounded-sm
                      border-green-500
                      text-green-500
                      transition-colors duration-300
                      group-hover:bg-green-500
                      group-hover:text-white
                      '
                  >
                    <div
                      className='
                      w-16 h-16 p-2 rounded-full
                      flex items-center justify-center
                      bg-neutral-900
                      group-hover:bg-green-500
                      group-hover:text-white
                      transition-colors duration-300
                    '
                    >
                      {item.svg}
                    </div>
                    <span className='text-center text-xl select-none'>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>{' '}
          <div className='text-2xl md:hidden'>
            <div className='flex flex-wrap justify-center gap-6 p-4'>
              {[
                {
                  label: 'GitHub',
                  svg: <GitSVG size='60' />,
                  link: 'https://github.com/Stephan2001',
                },
                {
                  label: 'LinkedIn',
                  svg: <LinkdinSVG size='60' />,
                  link: 'https://www.linkedin.com/in/stephan-moolman2001/',
                },
                {
                  label: 'Email',
                  svg: <EmailSVG size='60' />,
                  link: 'mailto:stephan.moolman.dev@gmail.com',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group'
                >
                  <div
                    className='
                      flex flex-col items-center w-18 md:w-24 border-2 p-2 rounded-sm
                      border-green-500
                      text-green-500
                      transition-colors duration-300
                      group-hover:bg-green-500
                      group-hover:text-white
                      '
                  >
                    <div
                      className='
                      w-12 md:w-16 h-12 md:h-16 p-2 rounded-full
                      flex items-center justify-center
                      bg-neutral-900
                      group-hover:bg-green-500
                      group-hover:text-white
                      transition-colors duration-300
                    '
                    >
                      {item.svg}
                    </div>
                    <span className='text-center text-sm md:text-xl select-none'>
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='flex justify-end items-center'>
          <div className='hidden md:block'>
            <Avatar size={400} />
          </div>
        </div>
      </div>
    </>
  )
}
