import { useState, useEffect } from 'react'

export default function TypingEffect({ text, delay = 500, speed = 30 }) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('waiting')
  const [cursorColor, setCursorColor] = useState('bg-green-400')

  useEffect(() => {
    if (phase !== 'done') {
      setCursorColor('bg-green-400')
      return
    }

    const interval = setInterval(() => {
      setCursorColor((prev) =>
        prev === 'bg-green-400' ? 'bg-neutral-900' : 'bg-green-400'
      )
    }, 500)
    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    setDisplayed('')
    setPhase('waiting')
    const waitTimeout = setTimeout(() => {
      setPhase('typing')
    }, delay)
    return () => clearTimeout(waitTimeout)
  }, [text, delay])

  // Simulate typing
  useEffect(() => {
    if (phase !== 'typing') return
    let i = 1
    const typer = setInterval(() => {
      setDisplayed(text.slice(0, i))
      i++
      if (i > text.length) {
        clearInterval(typer)
        setPhase('done')
      }
    }, speed)
    return () => clearInterval(typer)
  }, [phase, text, speed])

  return (
    <div className='text-green-500 text-base md:text-2xl text-center font-mono px-5 md:p-0'>
      {phase === 'waiting' ? '' : displayed}
      {phase === 'waiting' && ' waiting...'}
      <span
        className={`inline-block w-[0.6ch] h-[1em] ${cursorColor}`}
        style={{
          animation:
            phase === 'done' ? 'pulse 1s infinite steps(1, start)' : 'none',
          userSelect: 'none',
        }}
      />
    </div>
  )
}
