import React from 'react'

export default function Contact({ Icon, text }) {
  return (
    <div className='flex items-center gap-x-2'>
      <div className='w-8 h-8 p-1 rounded-full text-green-500 flex items-center justify-center'>
        <Icon className='w-full h-full fill-current' />
      </div>
      <span className='text-lg select-none'>{text}</span>
    </div>
  )
}
