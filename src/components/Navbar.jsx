import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { AiOutlineGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai"
import { Link } from "react-scroll"

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const changeColor = () => {
    if(window.scrollY >= 56) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  const links = [
    {
      id: 1,
      pageId: "about",
      link: "About"
    },
    {
      id: 2,
      pageId: "work",
      link: "Work"
    },
    {
      id: 3,
      pageId: "tech",
      link: "Tech"
    },
    {
      id: 4,
      pageId: "personal",
      link: "Personal"
    },
  ]

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
    <nav className={`${shadow && ("shadow-xl")} bg-zinc-100 fixed w-full h-14 top-0 px-8 z-10`}>
      <div className='sm:max-w-6xl flex justify-between items-center mx-auto h-full'>
        {/* Name */}
        <h1 className='text-3xl font-bold'>Pau Blanes</h1>

        {/* Sections */}
        <ul className='hidden md:flex'>
          {links.map(({ id, link, pageId }) => (
            <li key={id} className='px-2 mx-4 cursor-pointer hover:border-b-gray-800 border-b-transparent border-b-2'>
              <Link to={pageId} offset={-56} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <ul className='hidden md:flex'>
          {contact.map(({ id, icon, link }) => (
            <li key={id} className='px-2 cursor-pointer hover:scale-110'>
              <a href={link} target="_blank" rel="noreferrer">{icon}</a>
            </li>
          ))}
        </ul>

        {/* Hamburguer icon */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 md:hidden'>
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile */}
        <ul className={`
          flex flex-col justify-center items-center 
          fixed top-0 w-full h-screen
          ${nav ? "right-0" : "-right-full"} transition-all duration-500
          bg-zinc-100 
        `}>
          {links.map(({ id, link, pageId }) => (
            <li key={id} className='px-4 py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={pageId} offset={-56} smooth duration={500}>{link}</Link>
            </li>
          ))}
          <li>
            <ul className='flex pt-8'>
              {contact.map(({ id, icon, link }) => (
                <li key={id} className='px-2'>
                  <a href={link} target="_blank" rel="noreferrer">{icon}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar