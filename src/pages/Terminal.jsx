// src/components/Terminal.jsx
import React, { useEffect, useRef } from 'react'
import {
  useTerminalState,
  useTerminalDispatch,
} from '../components/terminal-context'
import Home from '../components/terminal-pages/terminal-home'
import Experience from '../components/terminal-pages/terminal-experience'
import Profile from '../components/terminal-pages/terminal-profile'
import Skills from '../components/terminal-pages/terminal-skills'
import Todo from '../components/terminal-pages/terminal-todo'
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
        return <Home />
      case 'experience':
        return <Experience />
      case 'overview':
        return <Profile />
      case 'skills':
        return <Skills />
      case 'personal':
        return <Todo />
      case 'other':
        return <Todo />
      default:
        return <Home />
    }
  }

  return (
    <div className='bg-black flex items-center justify-center h-screen font-mono'>
      <div className='bg-gray-900 h-[90vh] w-[80vw] rounded-2xl outline-1 outline-black flex flex-col'>
        {/* ——— HEADER ——— */}
        <Header />

        {/* ——— BODY ——— */}
        <div className='min-h-[70vh] grid grid-cols-1 md:grid-cols-[550px_1fr] lg:grid-cols-[650px_1fr]'>
          {/* Sidebar: Navigation + History */}
          <div className='flex flex-col border-r border-green-900'>
            {/* Navigation takes most of the height */}
            <div className='flex-grow overflow-auto text-green-400'>
              <Navigation />
            </div>

            {/* History takes less height */}
            <div className='max-h-[300px] overflow-auto text-green-400 border-t border-green-800 p-5'>
              <History />
            </div>
          </div>

          {/* Main Body */}
          <div className='overflow-auto text-green-400 p-5'>{renderBody()}</div>
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
