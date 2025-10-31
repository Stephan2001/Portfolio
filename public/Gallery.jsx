import React from 'react'

export default function MasonryGallery() {
  const images = [
    '/goof.webp',
    '/gopher1.webp',
    '/gopher2.webp',
    '/GoWithTheForce.webp',
    '/goofed1.webp',
    '/goofed2.webp',
    '/goofed3.webp',
  ]

  const pattern = ['single', 'pair', 'single', 'tall', 'single']
  const tiles = []
  let i = 0
  for (const p of pattern) {
    if (i >= images.length) break
    if (p === 'pair' && i + 1 < images.length) {
      tiles.push({ type: 'pair', imgs: [images[i], images[i + 1]] })
      i += 2
    } else if (p === 'tall') {
      tiles.push({ type: 'tall', imgs: [images[i]] })
      i += 1
    } else {
      tiles.push({ type: 'single', imgs: [images[i]] })
      i += 1
    }
  }

  while (i < images.length) {
    tiles.push({ type: 'single', imgs: [images[i]] })
    i += 1
  }

  return (
    <section>
      <div className='max-h-[90vh] overflow-auto columns-2 xl:columns-3 gap-6 px-4'>
        {tiles.map((tile, idx) => (
          <div className='break-inside-avoid mb-4' key={idx}>
            {tile.type === 'pair' ? (
              <div className='grid grid-cols-2 gap-2'>
                {tile.imgs.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={`Image ${idx}-${j}`}
                    loading='lazy'
                    className='w-full h-auto max-h-[10vh] md:max-h-[22vh] object-cover rounded-2xl'
                  />
                ))}
              </div>
            ) : tile.type === 'tall' ? (
              <img
                src={tile.imgs[0]}
                alt={`Image ${idx}`}
                loading='lazy'
                className='w-full h-auto max-h-[20vh] md:max-h-[60vh] object-cover rounded-2xl'
              />
            ) : (
              <img
                src={tile.imgs[0]}
                alt={`Image ${idx}`}
                loading='lazy'
                className='w-full h-auto max-h-[20vh] md:max-h-[30vh] object-cover rounded-2xl'
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
