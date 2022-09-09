import React from 'react'

function About() {
  return (
    <section name="about" className='w-full bg-zinc-100 px-8 mt-14'>
        <div className='max-w-6xl mx-auto flex flex-col items-start justify-start h-full pt-8 pb-16'>
            <h1 className='text-4xl md:text-5xl font-semibold text-gray-600'>
                Hello, I'm Pau Blanes 👋
            </h1>
            <h2 className='text-2xl md:text-3xl font-semibold pt-6'>
                iOS Developer
            </h2>
            <p className='pt-12 md:text-xl text-gray-700'>
                I'm an iOS Developer from Barcelona with a passion for coding and the possibilities it offers to innovate. I started my career as a game developer before switching to iOS. Since then, I've worked at startups and consulting firms in a variety of industries, including fintech and retail. <br /> <br /> Strongly focused on quality and simplicity while adapting to the needed architectures, languages or frameworks. I am well-organized and a problem solver with high attention to detail. Always seeking new challenges and learning opportunities!
            </p>
        </div>
    </section>
  )
}

export default About