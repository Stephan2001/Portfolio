import React, { useState, useCallback } from 'react'
import { useTerminalState, useTerminalDispatch } from './terminal-context'
import { folderTree } from './folder/folder-tree'
import { findPath } from './folder/tree-util'

const Input = React.forwardRef((props, ref) => {
  const [input, setInput] = useState('')
  const dispatch = useTerminalDispatch()
  const { cwdId } = useTerminalState()

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
        const cmd = input.trim()
        runCommand(cmd)
        dispatch({ type: 'ADD_HISTORY', payload: cmd })
        setInput('')
      }
    },
    [input, cwdId]
  )

  const runCommand = (cmd) => {
    if (cmd.startsWith('cd ')) {
      let path = cmd.slice(3)
      if (path === '~' || path === '/' || path === '') {
        // go to root
        path = '~'
      }

      const segments = path.split('/').filter(Boolean)
      let node = null

      // absolute if starts with '~' or '/'
      if (cmd.slice(3).startsWith('~') || cmd.slice(3).startsWith('/')) {
        node = folderTree
        // drop leading '~' if present
        if (segments[0] === '~') segments.shift()
      } else {
        // relative to current directory
        node = getNodeById(folderTree, cwdId)
      }

      segments.forEach((seg) => {
        if (seg === '..') {
          const crumbs = findPath(folderTree, node.id) || []
          if (crumbs.length > 1) node = crumbs[crumbs.length - 2]
        } else {
          const child = node.children.find(
            (c) => c.name.toLowerCase() === seg.toLowerCase()
          )
          if (child) node = child
        }
      })

      const newId = node.id
      const fullCrumbs = findPath(folderTree, newId) || [folderTree]
      const fullPath = `hearthdev@hearthdev:~/${fullCrumbs
        .map((n) => n.name)
        .join('/')}`
      dispatch({ type: 'SET_CWD', payload: { id: newId, path: fullPath } })
    }
  }

  function getNodeById(root, id) {
    if (root.id === id) return root
    if (!root.children) return null
    for (const child of root.children) {
      const found = getNodeById(child, id)
      if (found) return found
    }
    return null
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
        style={{ caretColor: 'transparent', userSelect: 'text' }}
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
