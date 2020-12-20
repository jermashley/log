import PropTypes from 'prop-types'
import Link from 'next/link'
import NavbarIcons from './NavbarIcons'
import { useRouter } from 'next/router'

export default function Navbar({ heading = `Jeremiah Ashley` }) {
  const router = useRouter()
  const isHomePage = router.pathname === `/`

  return (
    <header
      style={{
        backdropFilter: `blur(10px)`,
        WebkitBackdropFilter: `blur(10px)`,
      }}
      className="bg-white dark:bg-coolGray-900 bg-opacity-75 fixed w-full z-50 px-4 md:px-0"
    >
      <nav className="flex flex-row justify-between items-center py-4 max-w-2xl mx-auto">
        <div
          className={`transition-color duration-500 font-medium ${
            isHomePage
              ? `text-pink-500`
              : `text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-300`
          }`}
        >
          <Link href="/">
            <a>{heading}</a>
          </Link>
        </div>

        <NavbarIcons />
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  heading: PropTypes.string,
}
