import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import { BLOG_BASE_PATH } from '../../lib/constants/navigation'
import DateString from '../DateString'

const LogCard = ({ log }) => {
  return (
    <Link href={`${BLOG_BASE_PATH}/${log.slug}`} key={log.id}>
      <a>
        <div className="group transition-shadow duration-500 grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-12 md:grid-rows-1 md:gap-8 w-full h-auto md:h-40 bg-coolGray-100 dark:bg-coolGray-1000 shadow-none hover:shadow-2xl rounded-md overflow-hidden">
          <div className="transition-opacity duration-500 col-span-1 md:col-span-4 opacity-50 group-hover:opacity-100 w-full h-40 md:h-auto">
            <img
              src={log.hero.url}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="col-span-1 md:col-span-8 pb-6 px-6 py-0 md:px-0 md:py-6 flex flex-col items-start justify-start">
            <h2 className="transition-colors duration-500 font-semibold text-lg text-coolGray-700 dark:text-coolGray-400 group-hover:text-pink-500 mb-1">
              Title
            </h2>

            <DateString
              className="font-semibold text-coolGray-500 text-xxs uppercase mb-2"
              timeStamp={log.publishedAt}
              dateFormat="MMMM dd, yyyy"
            />

            <p className="font-normal text-coolGray-700 dark:text-coolGray-500 text-sm mt-0 md:mt-auto">
              Summary
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default LogCard
