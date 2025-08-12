import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


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

export default function ProjectDetails({
  images = [],
  title = '',
  description = '',
  overview = '',
  github = '',
  live = false,
  viewMore = '',
  tech = [],
  colours = [],
}) {
  const variant = useMemo(() => {
    const keys = colours.length > 0 ? colours : Object.keys(colourVariants)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return colourVariants.rose
  }, [colours])

  return (
    <div className='flex justify-start'>
      <div className='relative w-[75vw] mx-0 py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

          {/* Left Column */}
          <div className='space-y-6 text-left'>
            <h1 className='text-4xl font-bold text-gray-100'>{title}</h1>

            {live && (
              <div
                className={`${variant.bg} inline-block text-gray-100 px-3 py-1 rounded-lg text-sm font-semibold`}
              >
                Live
              </div>
            )}

            {description && <p className='text-gray-400 text-lg'>{description}</p>}
            {overview && <p className='text-gray-300'>{overview}</p>}

            {tech.length > 0 && (
              <div>
                <h3 className='text-lg font-semibold text-gray-200 mb-2'>Tech Stack</h3>
                <ul className='flex flex-wrap gap-2'>
                  {tech.map((item, idx) => (
                    <li
                      key={idx}
                      className={`${variant.bg} ${variant.text} text-xs font-medium px-2 py-1 rounded-md`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className='flex space-x-4'>
              {github && (
                <a
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition'
                >
                  GitHub
                </a>
              )}
              {viewMore && (
                <a
                  href={viewMore}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`px-4 py-2 rounded-lg border-2 ${variant.border} ${variant.text} ${variant.hoverBg} transition`}
                >
                  View Live
                </a>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className='flex items-center justify-center'>
            {images.length > 0 && (
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  type: 'progressbar',
                }}
                className="w-full h-64 rounded-lg shadow-lg swiper progress-slide-carousel relative"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className='w-full h-64 bg-cover bg-center rounded-lg shadow-lg'
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </SwiperSlide>
                ))}

                <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100 absolute"></div>
              </Swiper>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

ProjectDetails.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  overview: PropTypes.string,
  github: PropTypes.string,
  live: PropTypes.bool,
  viewMore: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  colours: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(colourVariants))),
}
