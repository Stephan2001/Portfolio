import ProjectDetails from '../components/Project'

const dummyProject = {
  title: 'Inventory Manager',
  description: 'In house tool for managing inventory and generating invoices',
  overview:
    'Built to streamline operations, this project integrates inventory tracking, invoice generation, and reporting into a single platform.',
  tech: ['React', 'TailwindCSS', 'PostgreSQL', 'TypeScript'],
  images: [
    '/inventory1.png',
    '/inventory2.png',
    '/inventory3.png',
    '/inventory4.png',
    '/inventory5.png',
  ],
}

export default function Project1() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900 p-10'>
      <div className='relative p-[4px] rounded-2xl animate-rainbowBorder'>
        <div className='bg-gray-900 rounded-2xl p-10'>
          <ProjectDetails {...dummyProject} />
        </div>
      </div>
      <style jsx>{`
        @keyframes rainbow {
          0% {
            border-color: red;
          }
          14% {
            border-color: orange;
          }
          28% {
            border-color: yellow;
          }
          42% {
            border-color: green;
          }
          57% {
            border-color: blue;
          }
          71% {
            border-color: indigo;
          }
          85% {
            border-color: violet;
          }
          100% {
            border-color: red;
          }
        }
        .animate-rainbowBorder {
          border-width: 4px;
          border-style: solid;
          animation: rainbow 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
