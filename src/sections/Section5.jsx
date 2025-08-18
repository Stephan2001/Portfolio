import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Project from '../components/card'

SwiperCore.use([Pagination])

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
    viewMore: '/inventory',
    tech: ['React', 'TailwindCSS', 'PostgreSQL', 'TypeScript'],
  },
  {
    imageSrc: '/tuck.png',
    title: 'Tuckshop',
    description: 'Small web app for managing your tuckshop',
    live: true,
    viewMore: '/tuckshop',
    tech: ['React', 'Tailwind CSS', 'PWA', 'JavaScript'],
  },
  {
    imageSrc: '/goof.png',
    title: 'Portfolio',
    description: 'Portfolio template with react components',
    github: 'https://github.com/Stephan2001/Portfolio',
    live: true,
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
  },
]

export default function ProjectCarousel() {
  const containerRef = useRef(null)
  const followerRef = useRef(null)
  const cursorPos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(true)

  const OFFSET = { x: 10, y: 10 }

  const handleDrag = () => {
    if (showTooltip) setShowTooltip(false)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMouseMove = (e) => {
      cursorPos.current = { x: e.clientX - 80, y: e.clientY - 80 }
      if (showTooltip) followerRef.current.style.opacity = 1
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
                  <Project {...proj} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
