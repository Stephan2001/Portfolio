import React, { useState, useRef } from 'react'

export default function ProfileAvatar({
  image = '',
  title = '',
  githubURL = '',
}) {
  return (
    <div
      className='relative inline-block group'
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={showAlt ? 'ThugImg.webp' : 'IMG-20250427-WA0019.webp'}
        alt='avatar'
        className='rounded-full w-full h-full object-cover object-top'
      />

      <svg
        viewBox='0 0 100 100'
        className='absolute top-0 left-0 w-full h-full pointer-events-none'
      >
        <circle
          cx='50'
          cy='50'
          r={radius}
          fill='none'
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
            transition: 'stroke-dashoffset 1s ease-out',
          }}
        />
      </svg>

      <style>{`
        .group:hover circle {
          stroke-dashoffset: 0 !important;
        }
      `}</style>
    </div>
  )
}
