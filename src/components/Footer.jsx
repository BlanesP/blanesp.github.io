import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai"

function Footer() {

const contact = [
    {
        id: 1,
        icon: <AiOutlineGithub size={25} />,
        link: "https://github.com/BlanesP"
    },
    {
        id: 2,
        icon: <AiFillLinkedin size={25} />,
        link: "https://www.linkedin.com/in/pau-blanes-472695180/"
    },
    {
        id: 3,
        icon: <AiTwotoneMail size={25} />,
        link: "mailto:pblanesp@gmail.com"
    },
    ]

  return (
    <footer className='w-full bg-zinc-100 px-8 py-4 md:py-8'>
        <div className='max-w-6xl mx-auto flex flex-col items-center
                        md:flex-row md:items-center md:justify-between'
        >
            {/* Copyright */}
            <p>© 2022 Pau Blanes. All rights reserved.</p>

            {/* Contact */}
            <ul className='flex pt-4 md:pt-0'>
                {
                contact.map(({id, icon, link}) => (
                    <li key={id} className='px-2 cursor-pointer hover:scale-110'>
                        <a href={link} target="_blank" rel="noreferrer">{icon}</a>
                    </li>
                    )
                )
                }
            </ul>
        </div>
    </footer>
  )
}

export default Footer