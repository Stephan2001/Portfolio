import Avatar from '../profile-avatar'
import GitSVG from '../svg/github'
import LinkdinSVG from '../svg/linkdin'
import EmailSVG from '../svg/email'

export default function Profile() {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-5'>
          <Avatar />
        </div>
        <div className='flex items-center my-5 '>
          <div className='pl-5 border-l-4'>
            <h1 className='text-xl font-bold'>Stephan Moolman</h1>
            <h1 className='text-xl font-bold'>Fullstack developer</h1>
            <h1 className='text-xl'>South Africa, Eastern Cape</h1>
            <h1 className='text-xl'>Port Elizabeth</h1>
            <h1 className='text-xl'>+27 79 042 1364</h1>
            <h1 className='text-xl'>stephan.moolman.dev@gmail.com</h1>
          </div>
          <div className='md:border-l-2 border-green-500 pl-5'></div>
        </div>
        <div className='mt-4 flex flex-wrap justify-center gap-6 p-4'>
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
                  bg-gray-900
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
      </div>
    </>
  )
}
