import GitSVG from '../components/svg/github'
import LinkdinSVG from '../components/svg/linkdin'
import EmailSVG from '../components/svg/email'

export default function Section2() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 pb-10 pl-[10vw]">
        <div className="space-y-6 max-w-[500px]">
          <div className='text-2xl'>
            Technology continues to shape the world in remarkable ways, influencing how we live, work, and communicate. 
            From smartphones that connect us instantly across the globe to AI systems that assist in everything from healthcare to creative writing, 
            the pace of innovation is faster than ever. As society becomes increasingly digital, it’s important to consider both the benefits and challenges that come with this transformation.
          </div>
          <div className='text-lg black italic'>
            ~ The HearthDev
          </div>
        </div>
        <div className="border-2 flex justify-center items-center">

        </div>   
      </div>
    </>
  );
}
