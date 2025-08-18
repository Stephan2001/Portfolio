export default function Section2() {
  return (
    <div className='w-full flex justify-center px-6 pb-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full items-center'>
        {/* Left */}
        <div className='max-w-[500px] mx-auto md:mx-0'>
          <div className='flex gap-2'>
            <div className='text-2xl italic'>"There is beauty in the</div>
            <div className='text-2xl italic text-gray-700'>little things"</div>
          </div>
          <div className='text-lg italic pb-5'>~ The HearthDev</div>

          <p className='text-2xl italic'>
            This is my{' '}
            <span className='text-amber-400 font-semibold'>philosophy</span> for
            both life and software. Noticing the finer parts of a program or the
            grace of a falling leaf... I admire passion, and like seeing it
            thrive.
          </p>
        </div>

        {/* Right */}
        <div className='flex justify-center items-center p-4 bg-black rounded-xl'>
          <img
            src='/gopher3.png'
            alt='Placeholder'
            className='shadow-lg w-[70%] md:w-[60%] lg:w-[60%]'
          />
        </div>
      </div>
    </div>
  )
}
