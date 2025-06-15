// src/components/Terminal.jsx
import React, { useEffect, useRef } from 'react'
import {
  useTerminalState,
  useTerminalDispatch,
} from '../components/terminal-context'
import Profile from '../components/terminal-pages/terminal-profile'
import Skills from '../components/terminal-pages/terminal-skills'
import Navigation from '../components/terminal-pages/terminal-navigation'
import History from '../components/terminal-pages/terminal-history'
import Header from '../components/terminal-header'
import Input from '../components/terminal-input'

export default function Terminal() {
  const promptRef = useRef(null)
  const state = useTerminalState()
  const dispatch = useTerminalDispatch()

  useEffect(() => {
    dispatch({ type: 'SET_CWD', payload: '/home/Portfolio' })
    promptRef.current?.focus()
  }, [])

  const handleChangeDir = (newDir) => {
    dispatch({ type: 'SET_CWD', payload: newDir })
  }

  const handleAddHistory = (newHistory) => {
    dispatch({ type: 'ADD_HISTORY', payload: newHistory })
  }

  const renderBody = () => {
    switch (state.cwdId) {
      case 'home':
        return <Navigation />
      case 'overview':
        return <Profile />
      case 'skills':
        return <Skills />
      default:
        return <p>📁 Directory: {state.cwd}</p>
    }
  }

  return (
    <div className='bg-black flex items-center justify-center h-screen font-mono'>
      <div className='bg-gray-900 h-[90vh] w-[80vw] rounded-2xl outline-1 outline-black flex flex-col'>
        {/* ——— HEADER ——— */}
        <Header />

        {/* ——— BODY ——— */}
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[70vh]'>
          <div className='overflow-auto px-4 py-2 text-green-400'>
            <Navigation />
          </div>
          <div className='overflow-auto px-4 py-2 text-green-400 row-span-2'>
            {renderBody()}
          </div>
          <div className='overflow-auto px-4 py-2 text-green-400'>
            <History />
          </div>
        </div>

        {/* ——— Input ——— */}
        <Input
          ref={promptRef}
          onChangeDir={handleChangeDir}
          history={handleAddHistory}
        />
      </div>
    </div>
  )
}
