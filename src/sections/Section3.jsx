import { useState } from 'react'
import {
  Description,
  Profile,
} from '../components/terminal-pages/terminal-skills'
import TypingEffect from '../components/TypingEffect'

export default function Section1() {
  const [selected, setSelected] = useState('Golang')

  return (
    <div className='md:max-w-[60vw] max-w-[90vw] space-y-6'>
      <Profile onSelect={setSelected} />

      <TypingEffect text={Description(selected)} />
    </div>
  )
}
