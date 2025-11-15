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

export function Description(label) {
  const summaries = {
    Golang:
      'Currently learning Go while building small CLI tools and backend projects.',
    JavaScript: 'Built interactive inventory systems and websites for users.',
    'C#': 'Created feature-driven backends, from basic cli to JWT Auth middleware, all integrated with Azure.',
    React:
      'Built SPAs and responsive frontends for both landing pages and internal web applications.',
    'Node JS':
      'Implemented security focued APIs, Cron, and serverless functions all with Node.js.',
    Tailwind: 'Styled web UI with Tailwind CSS.',
    Linux: `I've been forced to use NeoVim with WSL since 2024-12-20. Still stuck on the home screen...where is the exit?`,
    MySQL: 'Designed relational schemas and SQL queries.',
    PostgreSQL:
      'Used with Supabase for building and managing full-featured inventory apps.',
    MongoDB: 'Managed flexible NoSQL data structures in some of my projects.',
    Azure:
      'Deployed cloud apps and used Azure services like Functions, Storage and Service Bus.',
  }

  return summaries[label]
}

export function Profile({ onSelect }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center mb-10 md:hidden'>
        <div className='mt-4 flex flex-wrap justify-center gap-4'>
          {[
            {
              label: 'Golang',
              svg: <GolangSVG size='60' />,
            },
            {
              label: 'JavaScript',
              svg: <JSSVG size='60' />,
            },
            {
              label: 'C#',
              svg: <CSharpSVG size='60' />,
            },
            {
              label: 'React',
              svg: <ReactSVG size='60' />,
            },
            {
              label: 'NodeJS',
              svg: <NodeJSSVG size='60' />,
            },
            {
              label: 'Tailwind',
              svg: <TailwindSVG size='60' />,
            },
            {
              label: 'Linux',
              svg: <LinuxSVG size='60' />,
            },
            {
              label: 'MySQL',
              svg: <MySQLSVG size='60' />,
            },
            {
              label: 'PostgreSQL',
              svg: <PosgresqlSVG size='60' />,
            },
            {
              label: 'MongoDB',
              svg: <MongoSVG size='60' />,
            },
            {
              label: 'Azure',
              svg: <AzureSVG size='60' />,
            },
          ].map((item, index) => (
            <div key={index} className='group'>
              <div
                onClick={() => onSelect(item.label)}
                className='
                  flex flex-col items-center w-18 border-2 p-2 rounded-sm
                  border-green-500
                  cursor-pointer
                  text-green-500
                  transition-colors duration-300
                  group-hover:bg-green-500
                  group-hover:text-white
                  '
              >
                <div
                  className='
                  w-12 h-12 p-2 rounded-full
                  flex items-center justify-center
                  bg-neutral-900
                  group-hover:bg-green-500
                  group-hover:text-white
                  transition-colors duration-300
                '
                >
                  {item.svg}
                </div>
                <span className='text-center text-sm select-none'>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='md:flex flex-col items-center justify-center p-5 m-5 hidden'>
        <div className='mt-4 flex flex-wrap justify-center gap-6 p-4'>
          {[
            {
              label: 'Golang',
              svg: <GolangSVG height='' />,
            },
            {
              label: 'JavaScript',
              svg: <JSSVG />,
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
                onClick={() => onSelect(item.label)}
                className='
                  flex flex-col items-center w-18 md:w-30 border-2 p-2 rounded-sm
                  border-green-500
                  cursor-pointer
                  text-green-500
                  transition-colors duration-300
                  group-hover:bg-green-500
                  group-hover:text-white
                  '
              >
                <div
                  className='
                  w-12 md:w-16 h-12 md:h-16 p-2 rounded-full
                  flex items-center justify-center
                  bg-neutral-900
                  group-hover:bg-green-500
                  group-hover:text-white
                  transition-colors duration-300
                '
                >
                  {item.svg}
                </div>
                <span className='text-center px-1 text-base select-none'>
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
