import React, { createContext, useReducer, useContext } from 'react'

const initialState = {
  cwdId: 'home',
  cwd: 'hearthdev@hearthdev:~/Home',
  user: 'hearthdev',
  history: [],
  inputBuffer: '',
}

function terminalReducer(state, action) {
  switch (action.type) {
    case 'SET_CWD': {
      const { id, path } = action.payload
      return {
        ...state,
        cwdId: id,
        cwd: path,
        history: [...state.history, path],
      }
    }
    case 'SET_USER':
      return { ...state, user: action.payload }

    case 'ADD_HISTORY':
      return { ...state, history: [...state.history, action.payload] }

    case 'CLEAR_HISTORY':
      return { ...state, history: [] }

    case 'SET_INPUT':
      return { ...state, inputBuffer: action.payload }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TerminalStateContext = createContext()
const TerminalDispatchContext = createContext()

export function TerminalProvider({ children }) {
  const [state, dispatch] = useReducer(terminalReducer, initialState)

  return (
    <TerminalStateContext.Provider value={state}>
      <TerminalDispatchContext.Provider value={dispatch}>
        {children}
      </TerminalDispatchContext.Provider>
    </TerminalStateContext.Provider>
  )
}

export function useTerminalState() {
  const context = useContext(TerminalStateContext)
  if (context === undefined) {
    throw new Error('useTerminalState must be used within TerminalProvider')
  }
  return context
}

export function useTerminalDispatch() {
  const context = useContext(TerminalDispatchContext)
  if (context === undefined) {
    throw new Error('useTerminalDispatch must be used within TerminalProvider')
  }
  return context
}

export function useTerminal() {
  return [useTerminalState(), useTerminalDispatch()]
}
