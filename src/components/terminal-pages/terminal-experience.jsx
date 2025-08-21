import Svg from '../svg/linux'
export default function Profile() {
  return (
    <div className='relative mx-5 md:max-w-[75vw] p-5 md:p-20 space-y-12 border-t-4 border-l-4 border-amber-600'>
      {/* Title on Border */}
      <div className='absolute -top-5 left-6 bg-neutral-900 px-3'>
        <h2 className='text-lg md:text-2xl font-bold text-amber-600'>
          Work Experience
        </h2>
      </div>

      {/* Experience 1 */}
      <div>
        <h3 className='text-lg md:text-2xl font-semibold text-white mb-1 font-mono italic'>
          2021/03/06–2025/04/26
        </h3>
        <h4 className='text-xl md:text-3xl text-amber-500 font-black'>
          Bachelor of Science in Information Technology at The IIE Varsity
          College
        </h4>
        <p className='mt-2 text-base md:text-xl text-white'>
          Graduated with a 90% average, completing modules covering Programming,
          Databases, Mobile Development, Cloud Computing, Networking, Security,
          Data Structures and Algorithms.
        </p>
      </div>

      {/* Experience 2 */}
      <div>
        <h3 className='text-lg md:text-2xl font-semibold text-white mb-1 font-mono italic'>
          03/03/2025–Current
        </h3>
        <h4 className='text-xl md:text-3xl text-amber-500 font-black'>
          Web Developer and IT Specialist
        </h4>
        <p className='mt-2 mb-4 text-base md:text-xl text-white'>
          Collaborated with design team to build responsive client websites
          using JavaScript, React, HTML, and CSS, while also handling day-to-day
          IT troubleshooting and support. Outside of work, I dedicated personal
          time to advancing my skills in JavaScript, Go and AWS.
        </p>
        <ul className='space-y-2 text-white text-base md:text-lg mt-2'>
          <li className='flex items-start gap-2'>
            <div className='text-amber-500 hidden md:block'>
              <Svg height='30' width='30' />
            </div>
            <div className='text-amber-500 md:hidden'>
              <Svg height='22' width='22' />
            </div>
            Collaborated with design team to transform ideas into real-world
            projects
          </li>
          <li className='flex items-start gap-2'>
            <div className='text-amber-500 hidden md:block'>
              <Svg height='30' width='30' />
            </div>
            <div className='text-amber-500 md:hidden'>
              <Svg height='22' width='22' />
            </div>
            Troubleshot and maintained internal IT infrastructure
          </li>
          <li className='flex items-start gap-2'>
            <div className='text-amber-500 hidden md:block'>
              <Svg height='30' width='30' />
            </div>
            <div className='text-amber-500 md:hidden'>
              <Svg height='22' width='22' />
            </div>
            Built internal tools to automate the tedious stuff
          </li>
        </ul>
      </div>
    </div>
  )
}
