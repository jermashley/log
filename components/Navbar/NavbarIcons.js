import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFeather,
  faPencilRuler,
  faCameraAlt,
  faUser,
} from '@fortawesome/pro-light-svg-icons'
import {
  BLOG_BASE_PATH,
  WORK_BASE_PATH,
  PHOTOGRAPHY_BASE_PATH,
  ABOUT_BASE_PATH,
} from '@lib/constants/navigation'

const NavbarIcons = () => {
  const { pathname } = useRouter()
  const [path, setPath] = useState(``)

  useEffect(() => {
    setPath(`/${pathname.split(`/`)[1]}`)
  }, [pathname])

  const setIconAccent = (string) => {
    return path.includes(string)
      ? `text-pink-500`
      : `text-coolGray-600 dark:text-coolGray-200`
  }

  return (
    <div className="grid grid-flow-col gap-2">
      <Link href={BLOG_BASE_PATH}>
        <a className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <FontAwesomeIcon
            icon={faFeather}
            className={setIconAccent(BLOG_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>

      <Link href={WORK_BASE_PATH}>
        <a className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <FontAwesomeIcon
            icon={faPencilRuler}
            className={setIconAccent(WORK_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>

      <Link href={PHOTOGRAPHY_BASE_PATH}>
        <a className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <FontAwesomeIcon
            icon={faCameraAlt}
            className={setIconAccent(PHOTOGRAPHY_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>

      <Link href={ABOUT_BASE_PATH}>
        <a className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <FontAwesomeIcon
            icon={faUser}
            className={setIconAccent(ABOUT_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>
    </div>
  )
}

export default NavbarIcons
