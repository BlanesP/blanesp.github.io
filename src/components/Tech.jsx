import React from 'react'

function Tech() {

    const skills = [
        {
            image: "swift.png",
            name: "Swift"
        },
        {
            image: "swiftui.png",
            name: "SwiftUI"
        },
        {
            image: "combine.png",
            name: "Combine"
        },
        {
            image: "uikit.png",
            name: "UIKit"
        },
        {
            image: "coredata.png",
            name: "Core Data"
        },
        {
            image: "git.png",
            name: "Git"
        },
        {
            image: "xctest.jpeg",
            name: "XCTest"
        },
        {
            image: "snapshot_testing.png",
            name: "Snapshot Testing"
        },
        {
            image: "objc.png",
            name: "Objective-C"
        },
        {
            image: "graphql.png",
            name: "GraphQL"
        },
        {
            image: "api_rest.png",
            name: "Api Rest"
        },
        {
            image: "mvc_mvvm.jpeg",
            name: "MVC vs MVVM"
        },
        {
            image: "cocoapods_spm.png",
            name: "CocoaPods & Swift Package Manager"
        },
        {
            image: "ci.png",
            name: "CI"
        },
    ]

  return (
    <section name="tech" className='w-full bg-zinc-100 px-8'>
        <div className='max-w-6xl mx-auto flex flex-col items-center justify-start h-full pt-8 pb-16'>
            {/* Title */}
            <h3 className='text-3xl md:text-4xl font-medium'>
                Tech
            </h3>
            <p className='pt-4 text-gray-700 text-xl'>
                Some of the frameworks and tools I use to build great apps.
            </p>

            {/* Skills */}
            <div className='mt-6 flex flex-wrap gap-6 justify-center items-center w-full'>
                {
                    skills.map(skill => (
                        <img 
                            src={require("../assets/tech/" + skill.image)} 
                            alt={skill.name}
                            className='w-36 h-36 rounded-full object-cover object-center bg-white p-1 shadow-lg' 
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Tech