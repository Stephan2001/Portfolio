import React from "react";

export default function AnimatedImageCards() {
  const images = [

  ];

  const rotations = ["rotate-6", "-rotate-12", "rotate-6", "-rotate-12"];

  return (
    
    <section className="bg-zinc-50 overflow-hidden p-20">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        
        {/* Animated Image Cards */}
        <div className="flex flex-col sm:flex-row mx-auto">
          {images.map((src, idx) => (
            <a href="#_" key={idx}>
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className={`rounded-xl ${rotations[idx]} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>    

  );
}
