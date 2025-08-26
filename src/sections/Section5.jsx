import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Project from '../components/card'
import PropTypes from 'prop-types'

const projects = [
  {
    imageSrc: '/inventory1.png',
    images: [
      '/inventory1.png',
      '/inventory2.png',
      '/inventory3.png',
      '/inventory4.png',
      '/inventory5.png',
    ],
    title: 'Inventory Manager',
    overview:
      'Built to streamline operations, this project integrates inventory tracking, invoice generation, and reporting into a single platform.',
    description: 'In house tool for managing inventory and generating invoices',
    viewMore: true,
    tech: ['React', 'TailwindCSS', 'PostgreSQL', 'TypeScript'],
    colours: ['rose'],
  },
  {
    imageSrc: '/tuck.png',
    images: ['/tuck.png', '/tuck2.png', '/tuck3.png', '/tuck4.png'],
    title: 'Tuckshop',
    description: 'Small web app for managing your tuckshop',
    live: true,
    viewMore: true,
    viewLive: 'https://tuckshop-teal.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'PWA', 'JavaScript'],
    colours: ['green'],
  },
  {
    imageSrc: '/goof.png',
    title: 'Portfolio',
    description: 'Portfolio template with react components',
    github: 'https://github.com/Stephan2001/Portfolio',
    live: true,
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    colours: ['rose'],
  },
]

// simple colour map fallback (keeps look consistent when modal shows badges/buttons)
const colourVariants = {
  rose: {
    shadow: 'hover:shadow-rose-500',
    bg: 'bg-rose-500',
    border: 'border-rose-500',
    hoverBg: 'hover:bg-rose-600',
    text: 'text-white',
  },
  green: {
    shadow: 'hover:shadow-green-500',
    bg: 'bg-green-500',
    border: 'border-green-500',
    hoverBg: 'hover:bg-green-600',
    text: 'text-white',
  },
  default: {
    shadow: 'hover:shadow-gray-500',
    bg: 'bg-gray-700',
    border: 'border-gray-700',
    hoverBg: 'hover:bg-gray-600',
    text: 'text-white',
  },
}

function SimpleModal({ open, content, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      const onKey = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', onKey)
      return () => {
        document.removeEventListener('keydown', onKey)
        document.body.style.overflow = prev
      }
    }
  }, [open, onClose])

  useEffect(() => {
    setActiveIdx(0)
  }, [content])

  if (!open || !content) return null

  // safe destructure with defaults so missing fields are populated
  const {
    title = 'Untitled Project',
    live = false,
    description = 'No description provided.',
    overview = 'Overview not available.',
    tech = [],
    github = null,
    viewMore: projectViewMore = null,
    viewLive: explicitViewLive = null,
    images: contentImages = null,
    imageSrc = null,
    colours = [],
  } = content

  // determine variant
  const chosenColour = colours && colours.length > 0 ? colours[0] : 'default'
  const variant = colourVariants[chosenColour] || colourVariants.default

  // viewLive fallback: prefer explicit viewLive, else try viewMore if it looks like a url/path, else null
  const viewLive =
    explicitViewLive ||
    (typeof projectViewMore === 'string' ? projectViewMore : null)

  const images =
    contentImages && contentImages.length > 0
      ? contentImages
      : imageSrc
      ? [imageSrc]
      : []

  return (
    // overlay + centered modal
    <div
      className='fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60'
      aria-modal='true'
      role='dialog'
      onClick={onClose}
    >
      <div
        className='relative w-[90vw] max-w-2xl bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-300 hover:text-white'
          aria-label='Close modal'
        >
          ✕
        </button>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div className='space-y-6 text-left'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-100'>{title}</h1>

            {live && (
              <div
                className={`${variant.bg} inline-block ${variant.text} px-3 py-1 rounded-lg text-sm font-semibold`}
              >
                Live
              </div>
            )}

            {description && (
              <p className='text-gray-400 text-base md:text-lg'>{description}</p>
            )}
            {overview && <p className='text-gray-300 text-sm md:text-base'>{overview}</p>}

            {tech && tech.length > 0 && (
              <div>
                <h3 className='text-sm md:text-lg font-semibold text-gray-200 mb-2'>
                  Tech Stack
                </h3>
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

            <div className='flex space-x-4 mt-4'>
              {github && (
                <a
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 max-w-[20vw] text-center px-4 py-2 text-lg bg-gray-800 text-gray-100 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-700'
                >
                  GitHub
                </a>
              )}

              {viewLive && (
                <a
                  href={viewLive}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex-1 max-w-[20vw] text-center px-4 py-2 text-lg ${variant.text} font-semibold rounded-lg border-2 ${variant.border} shadow-md ${variant.hoverBg} transition duration-300 ease-in-out`}
                >
                  View Live
                </a>
              )}

              {/* If neither GitHub nor live is available, show a simple OK button */}
              {!github && !viewLive && (
                <button
                  onClick={onClose}
                  className='px-4 py-2 text-lg bg-gray-700 text-white rounded-lg'
                >
                  Close
                </button>
              )}
            </div>
          </div>

          {/* Right column: images carousel */}
          <div className='flex items-center justify-center pt-10'>
            {images.length > 0 ? (
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
                className='w-full h-[40vh] rounded-lg shadow-lg relative'
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className='w-full h-full bg-cover bg-center rounded-lg shadow-lg'
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </SwiperSlide>
                ))}

                <div className='swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100 absolute'></div>
              </Swiper>
            ) : (
              <div className='w-full h-[40vh] flex items-center justify-center rounded-lg bg-gray-800 text-gray-300'>
                No preview available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

SimpleModal.propTypes = {
  open: PropTypes.bool,
  content: PropTypes.object,
  onClose: PropTypes.func,
}

export default function ProjectCarousel() {
  const containerRef = useRef(null)
  const followerRef = useRef(null)
  const cursorPos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(true)

  // modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleDrag = () => {
    if (showTooltip) setShowTooltip(false)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMouseMove = (e) => {
      cursorPos.current = { x: e.clientX - 80, y: e.clientY - 80 }
      if (showTooltip && followerRef.current)
        followerRef.current.style.opacity = 1
    }

    const onDragStart = () => handleDrag()

    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mousedown', onDragStart)
    container.addEventListener('touchstart', onDragStart)

    return () => {
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mousedown', onDragStart)
      container.removeEventListener('touchstart', onDragStart)
    }
  }, [showTooltip])

  useEffect(() => {
    let rafId
    const animate = () => {
      const { x: cx, y: cy } = cursorPos.current
      const { x: fx, y: fy } = followerPos.current
      const t = 0.3
      followerPos.current.x += (cx - fx) * t
      followerPos.current.y += (cy - fy) * t
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(rafId)
  }, [])

  // open modal with project content
  function handleViewMore(project) {
    // ensure missing fields have at least basic values before showing modal
    const populated = {
      title: project.title || 'Untitled Project',
      description: project.description || 'No description provided.',
      overview: project.overview || 'Overview not available.',
      tech: project.tech || [],
      github: project.github || null,
      viewMore: project.viewMore || null,
      viewLive: project.viewLive || null,
      live: !!project.live,
      images: project.images || (project.imageSrc ? [project.imageSrc] : []),
      colours: project.colours || ['default'],
    }
    setModalContent(populated)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setTimeout(() => setModalContent(null), 150)
  }

  return (
    <>
      <div className='flex justify-center'>
        <div ref={containerRef} className='relative w-[75vw] mx-auto py-10'>
          {showTooltip && (
            <div
              ref={followerRef}
              className='fixed pointer-events-none z-50 flex items-center justify-center w-24 h-24 bg-gray-800 bg-opacity-75 text-white rounded-full text-center text-sm'
              style={{
                opacity: 0,
                transform: 'translate3d(0,0,0)',
                transition: 'opacity 0.3s',
              }}
            >
              Click & drag
            </div>
          )}
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            centeredSlides={true}
            pagination={{ clickable: true }}
            onSliderMove={handleDrag}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx}>
                <div className='px-2 p-20'>
                  {/* pass onViewMore so the card can open the modal */}
                  <Project {...proj} onViewMore={() => handleViewMore(proj)} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <SimpleModal
        open={modalOpen}
        content={modalContent}
        onClose={closeModal}
      />
    </>
  )
}
