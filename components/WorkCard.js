import Link from 'next/link'
import { WORK_BASE_PATH } from '@lib/constants/navigation'
import DateString from '@components/DateString'
import { snakeToTitleCase } from '@utils/stringCaseConversions'

const WorkCard = ({ work }) => {
  return (
    <Link href={`${WORK_BASE_PATH}/${work.slug}`} key={work.id}>
      <a>
        <div
          className="group transition-all duration-500 grid grid-cols-1 grid-rows-2 w-full h-auto bg-coolGray-100 dark:bg-coolGray-1000 shadow-none hover:shadow-2xl rounded-md overflow-hidden transform-gpu scale-100 hover:scale-105"
          style={{
            gridTemplateRows: `auto 1fr`,
          }}
        >
          <div className="w-full h-auto">
            <img src={work.hero.url} alt="" />
          </div>

          <div className="px-6 py-8">
            <h2 className="transition-colors duration-500 font-semibold text-lg text-coolGray-700 dark:text-coolGray-400 group-hover:text-pink-500 mb-1">
              {work.title}
            </h2>

            <DateString
              className="block font-semibold text-coolGray-500 text-xxs uppercase mb-4"
              timeStamp={work.publishedAt}
              dateFormat="MMMM dd, yyyy"
            />

            <div className="grid grid-flow-col auto-cols-min gap-2 mb-4">
              {work.categories.map((category) => (
                <span
                  className="block px-2 py-1 rounded bg-coolGray-200 dark:bg-coolGray-800 text-coolGray-500 dark:text-coolGray-400 text-xxs font-medium whitespace-nowrap leading-snug"
                  key={`${work.id}-${category}`}
                >
                  {snakeToTitleCase(category)}
                </span>
              ))}
            </div>

            <p className="font-normal text-coolGray-700 dark:text-coolGray-500 text-sm mt-0 md:mt-auto">
              {work.summary}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default WorkCard
