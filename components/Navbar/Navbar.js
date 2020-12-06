import PropTypes from 'prop-types'
import Link from 'next/link'
import FeatherIcon from '../icons/FeatherIcon'

export default function Navbar({
  heading = `Jeremiah Ashley`,
  activePage = null,
}) {
  return (
    <nav className="flex flex-row justify-between items-center py-4">
      <div className="font-medium text-pink-500 dark:text-pink-400">
        {heading}
      </div>

      <div>
        <Link href="/blog">
          <a className="transition-colors duration-300 flex flex-row justify-center items-center p-2 rounded bg-transparent hover:bg-coolGray-100 border border-transparent hover:border-coolGray-200">
            <FeatherIcon stroke="" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  heading: PropTypes.string,
  activePage: PropTypes.string,
}
