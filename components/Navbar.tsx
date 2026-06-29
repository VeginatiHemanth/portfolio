"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

const SOCIAL_LINKS = {
  email: "mailto:hemanthveginati7@gmail.com",
  linkedin: "https://www.linkedin.com/in/veginati-hemanth",
  github: "https://github.com/VeginatiHemanth",
}

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5">
            <div className="flex items-center space-x-3">
              <Link to="home">
                <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Hemanth Veginati</h2>
                </div>
              </Link>
              <div className="flex items-center space-x-3">
                <a
                  href={SOCIAL_LINKS.email}
                  aria-label="Email Hemanth Veginati"
                  className="flex"
                >
                  <SiGmail
                    className="text-[#EA4335] hover:-translate-y-1 transition-transform cursor-pointer"
                    size={24}
                  />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="LinkedIn profile"
                  className="flex"
                >
                  <SiLinkedin
                    className="text-[#0A66C2] hover:-translate-y-1 transition-transform cursor-pointer"
                    size={24}
                  />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="GitHub profile"
                  className="flex"
                >
                  <SiGithub
                    className="text-[#181717] hover:-translate-y-1 transition-transform cursor-pointer"
                    size={24}
                  />
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
