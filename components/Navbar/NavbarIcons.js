import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import FeatherIcon from '../Icons/FeatherIcon'
import PenToolIcon from '../Icons/PenToolIcon'
import CameraIcon from '../Icons/CameraIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import {
  BLOG_BASE_PATH,
  WORK_BASE_PATH,
  PHOTOGRAPHY_BASE_PATH,
  ABOUT_BASE_PATH,
} from '../../lib/constants/navigation'

const NavbarIcons = () => {
  const { pathname } = useRouter()
  const [path, setPath] = useState(``)

  useEffect(() => {
    setPath(`/${pathname.split(`/`)[1]}`)
  }, [pathname])

  return (
    <div className="grid grid-cols-4 gap-2">
      <Link href={BLOG_BASE_PATH}>
        <a className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <FeatherIcon isActive={path.includes(BLOG_BASE_PATH)} />
        </a>
      </Link>

      <Link href={WORK_BASE_PATH}>
        <a className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <PenToolIcon isActive={path.includes(WORK_BASE_PATH)} />
        </a>
      </Link>

      <Link href={PHOTOGRAPHY_BASE_PATH}>
        <a className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <CameraIcon isActive={path.includes(PHOTOGRAPHY_BASE_PATH)} />
        </a>
      </Link>

      <Link href={ABOUT_BASE_PATH}>
        <a className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 dark:hover:bg-coolGray-800 border border-transparent hover:border-coolGray-100 dark:hover:border-coolGray-800">
          <ProfileIcon isActive={path.includes(ABOUT_BASE_PATH)} />
        </a>
      </Link>
    </div>
  )
}

export default NavbarIcons
