import React from 'react'

function Work() {

  const projects = [
    {
      image: "fintonic.png",
      title: "Fintonic",
      description: "Reach all your financial goals with Fintonic, the leading platform in loans, cards, insurance and open banking.",
      link: "https://apps.apple.com/es/app/fintonic-ahorra-y-fin%C3%A1nciate/id672220319"
    },
    {
      image: "wabi2b.png",
      title: "Wabi2b",
      description: "Now stores can compare the prices of different products and wholesalers in one place and make their purchases in a second!",
      link: "https://apps.apple.com/us/app/wabi2b/id1491039190"
    },
    {
      image: "imagin.png",
      title: "Imagin",
      description: "Much more than a bank. Split expenses with your friends or view exclusive content on music, sustainability or technology.",
      link: "https://apps.apple.com/es/app/imagin-m%C3%A1s-que-un-banco-m%C3%B3vil/id1069665204"
    },
    {
      image: "imagin_teens.png",
      title: "Imagin Teens",
      description: "Receive your pocket money, ask for money to your father or mother and have your own credit card to buy when and where you want.",
      link: "https://apps.apple.com/es/app/imaginteens-tarjeta-prepago/id1453383055"
    }
  ]

  return (
    <section name="work" className='w-full bg-white px-8'>
      <div className='max-w-6xl mx-auto flex flex-col items-start justify-start h-full pt-8 pb-16'>
        {/* Title */}
        <h3 className='text-3xl md:text-4xl font-medium'>
          Professional projects
        </h3>
        <p className='pt-4 text-gray-700 text-xl'>
          I have been a part of these awesome projects.
        </p>

        {/* Apps */}
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8'>
          {
            projects.map(project => (
              <div className='rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-200 cursor-pointer'>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={require("../assets/pro_apps/" + project.image)} alt={project.title} className='h-36 w-full object-cover object-center' />
                  <div className='p-4'>
                    <h1 className='text-2xl font-semibold mb-3'>{project.title}</h1>
                    <p className='text-sm'>{project.description}</p>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work