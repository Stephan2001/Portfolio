import GolangSVG from '../svg/golang'
import JSSVG from '../svg/javascript'
import CSharpSVG from '../svg/cSharp'
import TSSVG from '../svg/typescript'
import ReactSVG from '../svg/react'
import NodeJSSVG from '../svg/nodeJS'
import MySQLSVG from '../svg/mySQL'
import PosgresqlSVG from '../svg/posgresql'
import MongoSVG from '../svg/mongo'
import LinuxSVG from '../svg/linux'
import TailwindSVG from '../svg/tailwind'
import AzureSVG from '../svg/azure'
import { useTerminalDispatch } from '../terminal-context'

export default function Profile() {
  const dispatch = useTerminalDispatch()

  function Description(label) {
    const summaries = {
      Golang:
        'Currently learning Go while building practical CLI tools and small-scale backend projects',
      JavaScript:
        'Built interactive CRUD applications and responsive web user interfaces for users',
      TypeScript:
        'Used TypeScript to ensure type safety in CRUD app development',
      'C#': 'Created feature-driven backends for various projects, all integrated with Azure',
      React:
        'Built SPAs and responsive frontends for both landing pages and internal web applications',
      'Node JS':
        'Implemented security focued APIs and background jobs with Node.js',
      Tailwind: 'Styled modern UIs efficiently using utility-first CSS',
      Linux:
        'Daily use of Linux and WSL for development and scripting. Been stuck in Neovim since 2024-12-20',
      MySQL: 'Designed relational schemas and optimized SQL queries',
      PostgreSQL:
        'Used with Supabase for building and managing full-featured CRUD applications',
      MongoDB: 'Managed flexible NoSQL data structures and fast queries',
      Azure:
        'Deployed cloud apps and used Azure services like Functions, Storage and Service Bus',
    }

    const summary = summaries[label] || `${label}`

    const newHistory = `→ ${label}: ${summary}`
    dispatch({ type: 'ADD_HISTORY', payload: newHistory })
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center border-2 p-5 m-5'>
        <div className='mt-4 flex flex-wrap justify-center gap-6 p-4'>
          {[
            {
              label: 'Golang',
              svg: <GolangSVG />,
            },
            {
              label: 'JavaScript',
              svg: <JSSVG />,
            },
            {
              label: 'TypeScript',
              svg: <TSSVG />,
            },
            {
              label: 'C#',
              svg: <CSharpSVG />,
            },
            {
              label: 'React',
              svg: <ReactSVG />,
            },
            {
              label: 'Node JS',
              svg: <NodeJSSVG />,
            },
            {
              label: 'Tailwind',
              svg: <TailwindSVG />,
            },
            {
              label: 'Linux',
              svg: <LinuxSVG />,
            },
            {
              label: 'MySQL',
              svg: <MySQLSVG />,
            },
            {
              label: 'PostgreSQL',
              svg: <PosgresqlSVG />,
            },
            {
              label: 'MongoDB',
              svg: <MongoSVG />,
            },
            {
              label: 'Azure',
              svg: <AzureSVG />,
            },
          ].map((item, index) => (
            <div key={index} className='group'>
              <div
                onClick={() => Description(item.label)}
                className='
                  flex flex-col items-center w-30 border-2 p-2 rounded-sm
                  border-green-500
                  
                  text-green-500
                  transition-colors duration-300
                  group-hover:bg-green-500
                  group-hover:text-white
                  '
              >
                <div
                  className='
                  w-16 h-16 p-2 rounded-full
                  flex items-center justify-center
                  bg-gray-900
                  group-hover:bg-green-500
                  group-hover:text-white
                  transition-colors duration-300
                '
                >
                  {item.svg}
                </div>
                <span className='text-center text-xl select-none'>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
