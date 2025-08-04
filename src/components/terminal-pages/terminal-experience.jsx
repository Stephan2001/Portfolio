export default function Profile() {
  return (
    <div className='max-w-[75vw] text-amber-500 p-10'>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        {/* Item 1 */}
        <li className='relative'>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='timeline-start mb-10 md:text-end relative pr-6'>
            <time className='font-mono text-3xl italic text-white'>
              2021/03/06–2025/04/26
            </time>
            <div className='border-r-6 mt-4 pr-6'>
              <div className='text-3xl text-amber-500 font-black'>
                Bachelor of Science in Information Technology at The IIE Varsity
                College
              </div>
              <div className='text-white mt-2 text-2xl'>
                Graduated with a 90% average, completing modules covering
                Programming, Databases, Mobile Development, Cloud Computing,
                Networking, Security, Data Structures and Algorithms.
              </div>
            </div>
          </div>
          <hr />
        </li>

        {/* Item 2 */}
        <li className='relative'>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='timeline-end md:mb-10 relative pl-6'>
            <time className='font-mono italic text-3xl text-white'>
              03/03/2025–current
            </time>
            <div className='border-l-6 mt-4 pl-6'>
              <div className='text-3xl font-black'>
                Web developer and IT Specialist
              </div>
              <div className='text-white mt-2 text-2xl'>
                Collaborated with designers to build responsive client websites
                using JavaScript, React, HTML, and CSS, while also handling
                day-to-day IT troubleshooting and support. Outside of work, I
                dedicated personal time to advancing my skills in JavaScript and
                Go.
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  )
}
