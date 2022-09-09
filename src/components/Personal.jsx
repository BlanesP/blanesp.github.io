import React from 'react'

function Personal() {
    const projects = [
        {
          image: "marvel_api.png",
          title: "Marvel API App",
          links: [{
            label: "Code",
            url: "https://github.com/BlanesP/MarvelApp"
          }]
        },
        {
          image: "simple_investment_tracker.png",
          title: "Investment Tracker",
          links: [{
            label: "Code",
            url: "https://github.com/BlanesP/simple_investment_tracker"
          },
          {
            label: "Demo",
            url: "https://apps.apple.com/app/simple-investment-tracker/id1635153223"
          }]
        },
        {
          image: "tile_feed.png",
          title: "Tile Feed",
          links: [{
            label: "Code",
            url: "https://github.com/BlanesP/tile_feed"
          }]
        },
        {
            image: "travelnet.png",
            title: "TravelNet",
            links: [{
              label: "Demo",
              url: "https://play.google.com/store/apps/details?id=paublanes.travelnet&hl=en&gl=US"
            }]
          }
      ]
    
      return (
        <section name="personal" className='w-full bg-white px-8'>
            <div className='max-w-6xl mx-auto flex flex-col items-start justify-start h-full pt-8 pb-16'>
                {/* Title */}
                <h3 className='text-3xl md:text-4xl font-medium'>
                    Personal projects
                </h3>
                <p className='pt-4 text-gray-700 text-xl'>
                    What I'm up to on my free time.
                </p>
    
                {/* Apps */}
                <div className='mt-6 flex gap-6 flex-wrap justify-center items-start w-full'>
                  {
                    projects.map(project => (
                      <div className='w-4/5 md:w-2/5 lg:w-1/5 h-96 rounded-xl shadow-lg overflow-hidden'>
                        <img src={require("../assets/personal_apps/" + project.image)} alt={project.title} className='h-64 w-full object-cover object-top' />
                        <div className='p-4 mb-4'>
                          <h1 className='text-lg font-semibold line-clamp-1 text-center'>{project.title}</h1>
                          <div className='flex justify-evenly gap-6 items-center w-full py-4 px-4'>
                            {
                              project.links.map(item => (
                                <button 
                                  className='bg-zinc-300 hover:bg-zinc-400 text-sm py-2 px-4 rounded-lg cursor-pointer' onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                                >
                                  {item.label}
                                </button>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </section>
      )
}

export default Personal