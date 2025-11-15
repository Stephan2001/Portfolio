import { useState } from 'react'

export default function Section1() {
  const [openCard, setOpenCard] = useState(null)

  const handleCardClick = (index) => {
    setOpenCard(openCard === index ? null : index)
  }

  return (
    <div className='text-white w-full flex flex-col items-center pt-[5vh] md:pt-0'>
      {/* Cards Container */}
      <div className='flex flex-col md:flex-row items-center md:gap-6 gap-[5vh] h-auto md:h-[500px] w-[90vw] md:w-[60vw] mx-auto'>
        {/* Card 1 */}
        <div
          onClick={() => handleCardClick(1)}
          className='relative group flex-grow transition-all hover:border-2 hover:border-green-500 w-full md:w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-2xl cursor-pointer'
        >
          <img
            className='h-full w-full object-cover object-left'
            src='/inventory1.webp'
            alt='Inventory Manager'
          />
          <div
            className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/75 transition-all duration-300 ${
              openCard === 1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'
            }`}
          >
            <h2 className='text-3xl text-green-500 font-semibold mb-2'>
              Inventory Manager
            </h2>
            <p className='text-base mb-4'>
              Sleek interface for building templated schemas linking them into a
              flexible inventory management solution.
            </p>
            <div className='flex flex-col gap-1'>
              <p className='text-lg transition-all duration-500 delay-100'>
                <span className='text-green-500'>Build</span> templates
              </p>
              <p className='text-lg transition-all duration-500 delay-200'>
                <span className='text-green-500'>Link</span> with inventory
                types
              </p>
              <p className='text-lg transition-all duration-500 delay-300'>
                <span className='text-green-500'>Access</span> fun features like
                invoice builders!
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => handleCardClick(2)}
          className='relative group flex-grow transition-all hover:border-2 hover:border-yellow-500 w-full md:w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-2xl cursor-pointer'
        >
          <img
            className='h-full w-full object-cover object-center'
            src='/TuckTuck.webp'
            alt='The Tuck Shop'
          />
          <div
            className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/75 transition-all duration-300 ${
              openCard === 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'
            }`}
          >
            <h2 className='text-yellow-500 font-semibold'>The Tuck Shop</h2>
            <p className='text-base mb-4'>
              Simple tuckshop app that I made for a colleague. Better than using
              paper!
            </p>
            <div className='flex flex-col gap-1'>
              <p className='text-lg transition-all duration-500 delay-100'>
                <span className='text-yellow-500'>Setup</span> your stock
              </p>
              <p className='text-lg transition-all duration-500 delay-200'>
                <span className='text-yellow-500'>Add</span> your buyers
              </p>
              <p className='text-lg transition-all duration-500 delay-300'>
                <span className='text-yellow-500'>Keep</span> an eye on your
                history
              </p>
              <div className='relative z-10 flex flex-col justify-end items-start h-full mt-5'>
                <a
                  href='https://tuckshop-teal.vercel.app/stock'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
                >
                  View live
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => handleCardClick(3)}
          className='relative group flex-grow transition-all hover:border-2 border-blue-500 w-full md:w-56 h-[400px] duration-500 hover:w-full overflow-hidden rounded-2xl cursor-pointer'
        >
          <img
            className='h-full w-full object-cover object-center'
            src='/More.webp'
            alt='More Stuff'
          />
          <div
            className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/75 transition-all duration-300 ${
              openCard === 3
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'
            }`}
          >
            <h2 className='text-blue-500 font-semibold'>More stuff?</h2>
            <p className='text-base mb-4'>
              I love doing research into things. I'll try and update stuff as
              time goes on...Currently building a HTTP library and server from
              TCP in Go? Cause why not.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
