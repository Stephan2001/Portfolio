import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

const colourVariants = {
  rose: {
    shadow: 'hover:shadow-rose-500',
    bg: 'bg-rose-500',
    border: 'border-rose-500',
    hoverBg: 'hover:bg-rose-500',
    text: 'text-gray-100',
  },
  green: {
    shadow: 'hover:shadow-green-500',
    bg: 'bg-green-500',
    border: 'border-green-500',
    hoverBg: 'hover:bg-green-500',
    text: 'text-white',
  },
  sky: {
    shadow: 'hover:shadow-sky-500',
    bg: 'bg-sky-500',
    border: 'border-sky-500',
    hoverBg: 'hover:bg-sky-500',
    text: 'text-gray-100',
  },
  indigo: {
    shadow: 'hover:shadow-indigo-500',
    bg: 'bg-indigo-500',
    border: 'border-indigo-500',
    hoverBg: 'hover:bg-indigo-500',
    text: 'text-gray-100',
  },
  amber: {
    shadow: 'hover:shadow-amber-500',
    bg: 'bg-amber-500',
    border: 'border-amber-500',
    hoverBg: 'hover:bg-amber-500',
    text: 'text-white',
  },
  fuchsia: {
    shadow: 'hover:shadow-fuchsia-500',
    bg: 'bg-fuchsia-500',
    border: 'border-fuchsia-500',
    hoverBg: 'hover:bg-fuchsia-500',
    text: 'text-gray-100',
  },
  purple: {
    shadow: 'hover:shadow-purple-500',
    bg: 'bg-purple-500',
    border: 'border-purple-500',
    hoverBg: 'hover:bg-purple-500',
    text: 'text-gray-100',
  },
}

export default function CardDetails({
  imageSrc = '',
  title = '',
  description = '',
  github = '',
  live = false,
  viewMore = '',
  tech = [],
  colours = [],
}) {
  const variant = useMemo(() => {
    const keys = colours.length > 0 ? colours : Object.keys(colourVariants)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return colourVariants[randomKey] || colourVariants.rose
  }, [colours])

  return (
    <div className='p-4 w-full h-full flex justify-center items-center cursor-pointer'>
      <div
        className={`relative max-w-md w-full rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 border-2 border-transparent ${variant.shadow} ${variant.border}`}
      >
        {imageSrc && (
          <div
            className='h-48 bg-cover bg-center'
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        )}

        {live && (
          <div
            className={`absolute top-0 right-0 ${variant.bg} text-gray-100 px-3 py-1 m-3 rounded-lg text-sm font-semibold`}
          >
            Live
          </div>
        )}

        <div className='p-6'>
          <h2 className='text-3xl font-bold mb-2 text-gray-100'>{title}</h2>
          <p className='text-gray-500 text-xl mb-4'>{description}</p>

          {tech.length > 0 && (
            <ul className='flex flex-wrap gap-2 mb-4'>
              {tech.map((item, idx) => (
                <li
                  key={idx}
                  className={`${variant.bg} ${variant.text} text-xs font-medium px-2 py-1 rounded-md`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className='flex space-x-4'>
            {github && (
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 text-center px-4 py-2 text-2xl bg-gray-800 text-gray-100 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-600'
              >
                GitHub
              </a>
            )}

            {viewMore && (
              <a
                href={viewMore}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex-1 text-center px-4 py-2 text-2xl text-gray-100 font-semibold rounded-lg border-2 ${variant.border} shadow-md ${variant.hoverBg} transition duration-300 ease-in-out`}
              >
                View More
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

CardDetails.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
  live: PropTypes.bool,
  viewMore: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  colours: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(colourVariants))),
}
