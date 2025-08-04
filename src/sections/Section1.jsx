import GitSVG from '../components/svg/github'
import LinkdinSVG from '../components/svg/linkdin'
import EmailSVG from '../components/svg/email'
import Avatar from '../components/profile-avatar'

export default function Section1() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 pb-10 pl-[10vw]">
        <div className="space-y-6 border-2">
          {/* Full-width heading row */}
          <div className="flex gap-4">
            <h1 className="text-4xl font-bold">Heading1_Line1</h1>
            <h1 className="text-4xl font-bold text-green-500">Heading2_Line1</h1>
          </div>

          <div className="flex gap-4">
            <h2 className="text-3xl font-bold text-green-500">Heading1_Line1</h2>
            <h2 className="text-3xl font-bold">Heading2_Line1</h2>
          </div>

          <div className="flex items-center">
            <ul className='pl-5 border-l-4 border-green-500'>
              <h1 className='text-xl'>here, here, here, here, here, here</h1>
              <h1 className='text-xl'>here, here, here, here, here</h1>
              <h1 className='text-xl'>here, here, here</h1>
            </ul>
          </div>

          <div className="text-2xl">
            <div className='flex flex-wrap justify-end gap-6 p-4'>
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
          </div>
        </div>
        
        <div className="border-2 flex justify-center items-center">
          {/* <Avatar /> */}
        </div>      
      </div>
    </>
  );
}
