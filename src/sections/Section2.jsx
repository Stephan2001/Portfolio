export default function Section2() {
  return (
    <div className='grid grid-cols-2 gap-4 pb-10'>
      <div className='max-w-[500px]'>
        {/* Quote */}
        <div className='flex gap-2'>
          <div className='text-2xl italic'>"There is beauty in the</div>
          <div className='text-2xl italic text-gray-700'>little things"</div>
        </div>
        <div className='text-lg italic pb-5'>~ The HearthDev</div>

        {/* Single paragraph with colored word */}
        <p className='text-2xl italic'>
          This is my{' '}
          <span className='text-fuchsia-700 font-semibold'>philosophy</span> for
          both life and software. Noticing the finer parts of a program or the
          grace of a falling leaf... I admire passion, and like seeing it
          thrive.
        </p>
      </div>

      <div className='border-2 flex justify-center items-center'>
        {/* (whatever graphic or content you need here) */}
      </div>
    </div>
  )
}
