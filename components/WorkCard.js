import Link from 'next/link'
import Image from 'next/image'
import { WORK_BASE_PATH } from '@lib/constants/navigation'
import DateString from '@components/DateString'
import { snakeToTitleCase } from '@utils/stringCaseConversions'

const WorkCard = ({ work }) => {
  return (
    <Link href={`${WORK_BASE_PATH}/${work.slug}`} key={work.id}>
      <a>
        <div className="grid w-full grid-cols-[auto,1fr] h-auto grid-cols-1 grid-rows-2 overflow-hidden transition-all duration-500 scale-100 rounded-md shadow-none group bg-coolGray-100 dark:bg-coolGray-1000 hover:shadow-2xl transform-gpu hover:scale-105">
          <div className="w-full h-auto">
            <Image width={672} height={352} src={work.hero.url} alt="" />
          </div>

          <div className="px-6 py-8">
            <h2 className="mb-1 text-lg font-semibold transition-colors duration-500 text-coolGray-700 dark:text-coolGray-400 group-hover:text-pink-500">
              {work.title}
            </h2>

            <DateString
              className="block mb-4 font-semibold uppercase text-coolGray-500 text-2xs"
              timeStamp={work.publishedAt}
              dateFormat="MMMM dd, yyyy"
            />

            <div className="grid grid-flow-col gap-2 mb-4 auto-cols-min">
              {work.categories.map((category) => (
                <span
                  className="block px-2 py-1 font-medium leading-snug rounded bg-coolGray-200 dark:bg-coolGray-800 text-coolGray-500 dark:text-coolGray-400 text-2xs whitespace-nowrap"
                  key={`${work.id}-${category}`}
                >
                  {snakeToTitleCase(category)}
                </span>
              ))}
            </div>

            <p className="mt-0 text-sm font-normal text-coolGray-700 dark:text-coolGray-500 md:mt-auto">
              {work.summary}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default WorkCard
