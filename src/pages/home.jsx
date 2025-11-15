import { useRef, useLayoutEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Section1 from '../sections/Section1'
import Section2 from '../sections/Section2'
import Section3 from '../sections/Section3'
import Section4 from '../sections/Section4'
import Section5 from '../sections/Section51'
import Section52 from '../sections/Section52'
import Section53 from '../sections/Section53'
import Section54 from '../sections/Section54'
import Section6 from '../sections/Section6'

const sections = [
  {
    id: 'section1',
    label: 'Details',
    color: 'bg-neutral-900',
  },
  {
    id: 'section2',
    label: 'About',
    color: 'bg-sky-500',
  },
  {
    id: 'section3',
    label: 'Skills',
    color: 'bg-neutral-900',
  },
  {
    id: 'section4',
    label: 'Experience',
    color: 'bg-neutral-900',
  },
  {
    id: 'section5',
    label: 'Projects',
    color: 'bg-neutral-900',
  },
  {
    id: 'section6',
    label: 'Gallery',
    color: 'bg-neutral-900',
  },
]

export default function App() {
  const scrollRef = useRef(null)
  const scrollInstance = useRef(null)
  const progressRef = useRef(null)

  useLayoutEffect(() => {
    if (!scrollRef.current) return

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
    })

    const updateProgress = ({ scroll, limit }) => {
      const percentage = scroll.y / limit.y
      if (progressRef.current) {
        progressRef.current.style.height = `${percentage * 100}%`
      }
    }

    scrollInstance.current.on('scroll', updateProgress)

    setTimeout(() => {
      scrollInstance.current?.update()
    }, 200)

    return () => {
      scrollInstance.current?.off('scroll', updateProgress)
      scrollInstance.current?.destroy()
    }
  }, [])

  const handleNavClick = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (target) {
      scrollInstance.current?.scrollTo(target)
    }
  }

  return (
    <div className='relative bg-stone-900'>
      {/* Scrollable content */}
      <main
        ref={scrollRef}
        data-scroll-container
        className='min-h-screen text-gray-100'
      >
        <section
          id='section1'
          data-scroll-section
          className='min-h-screen h-auto flex items-center justify-center text-4xl md:py-[20vh] bg-neutral-900'
        >
          <Section1 />
        </section>

        <section
          id='section2'
          data-scroll-section
          className='min-h-screen h-auto flex items-center justify-center text-4xl py-[20vh] bg-sky-500'
        >
          <Section2 />
        </section>

        <section
          id='section3'
          data-scroll-section
          className='min-h-screen h-auto flex items-center justify-center text-4xl md:py-[30vh] bg-neutral-900'
        >
          <Section3 />
        </section>

        <section
          id='section4'
          data-scroll-section
          className='min-h-screen h-auto flex items-center justify-center text-4xl py-[30vh] bg-neutral-900'
        >
          <Section4 />
        </section>

        <section
          id='section5'
          data-scroll-section
          className='md:min-h-screen md:h-auto h-[50vh] flex items-center justify-center text-4xl md:py-[20vh] bg-neutral-900'
        >
          <Section5 />
        </section>

        <section
          data-scroll-section
          className='md:min-h-screen md:h-auto h-auto flex items-center justify-center text-4xl bg-neutral-900'
        >
          <Section52 />
        </section>

        <section
          data-scroll-section
          className='md:min-h-screen md:h-auto h-auto flex items-center justify-center text-4xl bg-neutral-900'
        >
          <Section54 />
        </section>

        <section
          data-scroll-section
          className='min-h-screen h-auto flex items-center justify-center text-4xl bg-neutral-900'
        >
          <Section53 />
        </section>

        <section
          id='section6'
          data-scroll-section
          className='min-h-screen h-auto flex items-center justify-center text-4xl bg-neutral-900'
        >
          <Section6 />
        </section>
      </main>

      {/* Fixed nav bar */}
      <nav className='hidden md:flex md:fixed md:top-1/2 md:left-6 md:-translate-y-1/2 md:z-50'>
        <div className='relative bg-black/20 p-4 rounded-md shadow-lg space-y-2 w-40 overflow-hidden'>
          <div className='absolute left-0 top-0 bottom-0 w-1 rounded' />
          <div
            ref={progressRef}
            className='absolute left-0 top-0 w-1 bg-green-500 rounded transition-all duration-75'
            style={{ height: '0%' }}
          />

          {/* Nav buttons */}
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className='w-full px-3 py-2 rounded text-gray-100 text-xl text-left font-medium transition-colors duration-300 hover:bg-green-500 cursor-pointer relative z-10'
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
