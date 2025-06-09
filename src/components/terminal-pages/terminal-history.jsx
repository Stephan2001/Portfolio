import React, { useRef, useEffect } from 'react'
import { useTerminalState } from '../terminal-context'

export default function History() {
  const state = useTerminalState()
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [state.history])

  return (
    <div
      ref={containerRef}
      className='h-[40vh] border-2 p-5 font-mono text-green-400 overflow-y-auto m-5'
    >
      {state.history.map((entry, idx) => (
        <div key={idx}>{entry}</div>
      ))}
    </div>
  )
}
