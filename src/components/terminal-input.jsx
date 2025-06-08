import React, { useState, useCallback } from 'react'

const Input = React.forwardRef((props, ref, history) => {
  const [input, setInput] = useState('')

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        setInput((prev) => prev + e.key)
        e.preventDefault()
      } else if (e.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1))
        e.preventDefault()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        runCommand(input.trim())
        addHistory(input.trim())
        setInput('')
      }
    },
    [input]
  )

  const addHistory = (cmd) => {
    props.history(cmd)
  }

  const runCommand = (cmd) => {
    if (cmd.startsWith('cd ')) {
      const target = cmd.slice(3) || '/'
      props.onChangeDir(target)
    }
  }

  return (
    <div className='px-4 pb-3 pt-2'>
      <div
        ref={ref}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role='textbox'
        aria-multiline='false'
        className='flex items-center outline-none bg-transparent whitespace-pre-wrap text-xl break-all font-mono focus:border-2 focus:rounded-2xl p-2 text-green-500'
        style={{
          caretColor: 'transparent',
          userSelect: 'text',
        }}
      >
        <span className='text-green-500 mr-1'>:</span>

        {input.split('').map((ch, i) => (
          <span key={i}>{ch === ' ' ? '\u00A0' : ch}</span>
        ))}

        <span style={{ width: 0, display: 'inline-block' }}>{'\u200B'}</span>

        <span
          className='inline-block w-[0.6ch] h-[1em] bg-green-400 animate-pulse'
          style={{
            animationTimingFunction: 'steps(1, start)',
            userSelect: 'none',
          }}
        />
      </div>
    </div>
  )
})

export default Input
