import ProjectDetails from '../components/Project'

const dummyProject = {
  title: 'Tuckshop',
  description: 'Small web app for managing your tuckshop (Mobile app)',
  overview:
    'Built with an in-memory database and local storage persistence, this app lets you track the ins and outs of your local tuckshop. I built this app as a favor for one of my colleagues.',
  tech: ['React', 'Tailwind CSS', 'PWA', 'JavaScript'],
  live: true,
  images: ['/tuck.png', '/tuck2.png', '/tuck3.png', '/tuck4.png'],
  viewLive: 'https://tuckshop-teal.vercel.app/',
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
