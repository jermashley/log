import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseDay,
  faHouseNight,
  faHouse,
} from '@fortawesome/pro-light-svg-icons'
import NavbarIcons from './NavbarIcons'
import { toCapitalCase } from '@utils/stringCaseConversions'

export default function Navbar({ heading = `Jeremiah Ashley` }) {
  const { asPath } = useRouter()
  const isHomePage = asPath === `/`

  const [path, setPath] = useState(``)
  const [breadcrumb, setBreadcrumb] = useState(``)
  const [homeIcon, setHomeIcon] = useState(faHouse)

  useEffect(() => {
    setPath(`/${asPath.split(`/`)[1]}`)

    setBreadcrumb(path.length > 1 ? toCapitalCase(path.split(`/`)[1]) : ``)
  }, [path, asPath])

  useEffect(() => {
    if (window && window.matchMedia) {
      const prefersColorScheme = window.matchMedia(
        `(prefers-color-scheme: light)`,
      )

      setHomeIcon(prefersColorScheme.matches ? faHouseDay : faHouseNight)

      prefersColorScheme.addEventListener(`change`, (e) => {
        setHomeIcon(e.matches ? faHouseDay : faHouseNight)
      })
    }
  }, null)

  return (
    <header
      style={{
        backdropFilter: `blur(10px)`,
        WebkitBackdropFilter: `blur(10px)`,
      }}
      className="bg-white dark:bg-coolGray-900 bg-opacity-75 fixed w-full z-50 px-4 md:px-0"
    >
      <nav className="flex flex-row justify-between items-center py-4 max-w-2xl mx-auto">
        <div className="text-coolGray-700 dark:text-coolGray-400">
          <Link href="/">
            <a
              className={`transition-color duration-500 font-medium mr-2 ${
                isHomePage
                  ? `text-pink-500`
                  : `text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400`
              }`}
            >
              {isHomePage ? (
                heading
              ) : (
                <FontAwesomeIcon icon={homeIcon} fixedWidth />
              )}
            </a>
          </Link>

          {!isHomePage && (
            <>
              /
              {asPath !== path ? (
                <Link href={path}>
                  <a
                    className={`transition-color duration-500 font-medium ml-2 text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400`}
                  >
                    {breadcrumb}
                  </a>
                </Link>
              ) : (
                <>
                  <span className="font-medium ml-2 text-coolGray-700 dark:text-coolGray-400">
                    {breadcrumb}
                  </span>
                </>
              )}
            </>
          )}
        </div>

        <NavbarIcons />
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  heading: PropTypes.string,
}
