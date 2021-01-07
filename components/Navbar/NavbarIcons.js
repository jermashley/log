import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFeather as lightFeather,
  faPencilRuler as lightPencilRuler,
  faCameraAlt as lightCameraAlt,
  faUser as lightUser,
} from '@fortawesome/pro-light-svg-icons'
import {
  faFeather as duotoneFeather,
  faPencilRuler as duotonePencilRuler,
  faCameraAlt as duotoneCameraAlt,
  faUser as duotoneUser,
} from '@fortawesome/pro-duotone-svg-icons'
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

  const isActivePath = (string) => {
    return path.includes(string)
  }

  const setIconAccent = (string) => {
    return isActivePath(string)
      ? `text-pink-500`
      : `text-coolGray-600 dark:text-coolGray-200`
  }

  return (
    <div className="grid grid-flow-col gap-2">
      <Link href={BLOG_BASE_PATH}>
        <a
          aria-label="Blog"
          className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800"
        >
          <FontAwesomeIcon
            icon={isActivePath(BLOG_BASE_PATH) ? duotoneFeather : lightFeather}
            className={setIconAccent(BLOG_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>

      <Link href={WORK_BASE_PATH}>
        <a
          aria-label="Portfolio"
          className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800"
        >
          <FontAwesomeIcon
            icon={
              isActivePath(WORK_BASE_PATH)
                ? duotonePencilRuler
                : lightPencilRuler
            }
            className={setIconAccent(WORK_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>

      <Link href={PHOTOGRAPHY_BASE_PATH}>
        <a
          aria-label="Photography"
          className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800"
        >
          <FontAwesomeIcon
            icon={
              isActivePath(PHOTOGRAPHY_BASE_PATH)
                ? duotoneCameraAlt
                : lightCameraAlt
            }
            className={setIconAccent(PHOTOGRAPHY_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>

      <Link href={ABOUT_BASE_PATH}>
        <a
          aria-label="About me"
          className="text-lg transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800"
        >
          <FontAwesomeIcon
            icon={isActivePath(ABOUT_BASE_PATH) ? duotoneUser : lightUser}
            className={setIconAccent(ABOUT_BASE_PATH)}
            fixedWidth
          />
        </a>
      </Link>
    </div>
  )
}

export default NavbarIcons
