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

      return () =>
        prefersColorScheme.removeEventListener(`change`, (e) =>
          console.log(e.matches),
        )
    }
  }, null)

  return (
    <header
      className="fixed z-50 w-full px-4 bg-white bg-opacity-75 dark:bg-opacity-75 dark:bg-coolGray-900 md:px-0"
      style={{
        WebkitBackdropFilter: `blur(16px)`,
        backdropFilter: `blur(16px)`,
      }}
    >
      <nav className="flex flex-row items-center justify-between max-w-2xl py-4 mx-auto">
        <div className="text-coolGray-700 dark:text-coolGray-400">
          <Link href="/">
            <a
              className={`transition-color duration-500 font-medium mr-2 ${
                isHomePage
                  ? `text-pink-500`
                  : `text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400`
              }`}
              aria-label="Home"
            >
              {isHomePage ? `` : <FontAwesomeIcon icon={homeIcon} fixedWidth />}
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
                  <span className="ml-2 font-medium text-coolGray-700 dark:text-coolGray-400">
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
