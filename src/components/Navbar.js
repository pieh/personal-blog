import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <header className="mb-2 md:mb-4 lg:mb-8">
    <div className="text-center my-10">
      <a
        className="no-underline font-bold font-handwritten text-5xl text-grey-darkest hover:text-grey-dark mb-6"
        href="/"
      >
        Liduše píše
      </a>
    </div>
    <nav className="relative mx-auto h-16 flex flex-col items-center justify-center text-center z-10 bg-blue-light">
      <ul className="list-reset flex flex-col md:flex-row justify-center items-center py-4">
        <li className="mx-2 mb-2 md:mb-0">
          <Link
            className="no-underline text-white text-sm font-normal font-bold antialiased hover:text-blue-lightest uppercase transition-linear"
            to="/blog"
          >
            blog
          </Link>
        </li>
        <li className="mx-2 mb-2 md:mb-0">
          <Link
            className="no-underline text-white text-sm font-normal font-bold antialiased hover:text-blue-lightest uppercase transition-linear"
            to="/kdopak-to-pise"
          >
            kdopak to píše
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
