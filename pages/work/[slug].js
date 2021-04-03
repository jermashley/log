import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitlab,
  faFigma,
  faGithub,
  faBitbucket,
} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquare } from '@fortawesome/pro-regular-svg-icons'
import DateString from '@components/DateString'
import { snakeToTitleCase } from '@utils/stringCaseConversions'
import HeadMeta from '@components/HeadMeta'

const Work = ({ work }) => {
  const icon = (repository) => {
    switch (repository) {
      case `gitlab`:
        return faGitlab
      case `github`:
        return faGithub
      case `bitbucket`:
        return faBitbucket
      case `figma`:
        return faFigma
      default:
        return null
    }
  }

  return (
    <>
      <HeadMeta
        title={work.title}
        description={work.summary}
        imageUrl={work.hero.url}
      />

      <section>
        <h1 className="mb-3 text-4xl font-normal text-coolGray-700 dark:text-coolGray-400">
          {work.title}
        </h1>

        <DateString
          className="block mb-4 font-semibold uppercase text-coolGray-500 text-2xs"
          timeStamp={work.publishedAt}
          dateFormat="MMMM dd, yyyy"
        />

        <div className="grid grid-flow-col gap-2 mb-12 auto-cols-min">
          {work.categories.map((category) => (
            <span
              className="block px-2 py-1 font-medium leading-snug rounded bg-coolGray-200 dark:bg-coolGray-800 text-coolGray-500 dark:text-coolGray-400 text-2xs whitespace-nowrap"
              key={`${work.id}-${category}`}
            >
              {snakeToTitleCase(category)}
            </span>
          ))}
        </div>

        <section
          className={`w-full ${work.repositories.length ? `mb-12` : `mb-4`}`}
        >
          <img src={work.hero.url} alt="" className="w-full h-auto" />
        </section>

        {work.repositories.length && (
          <section className="grid grid-flow-col gap-4 mb-12 w-min">
            {work.repositories.map((repository) => (
              <dl
                className="flex flex-row items-stretch justify-start w-min"
                key={repository.id}
              >
                <dt className="px-3 py-1 text-sm rounded-tl rounded-bl bg-coolGray-200 dark:bg-coolGray-800 text-coolGray-500 dark:text-coolGray-400">
                  <FontAwesomeIcon icon={icon(repository.repositoryHost)} />
                </dt>

                <dd className="flex flex-col items-center justify-center px-3 font-medium leading-snug transition-colors duration-500 rounded-tr rounded-br bg-coolGray-100 dark:bg-coolGray-1000 text-coolGray-600 dark:text-coolGray-300 hover:text-pink-500 text-2xs whitespace-nowrap">
                  <a href={repository.url} target="_blank" rel="noreferrer">
                    {repository.title}
                    <FontAwesomeIcon
                      className="ml-2 align-middle"
                      icon={faExternalLinkSquare}
                    />
                  </a>
                </dd>
              </dl>
            ))}
          </section>
        )}

        <article className="prose dark:prose-dark max-w-none">
          {work.markdown.map((markdownBlock) => (
            <ReactMarkdown
              key={markdownBlock.substr(0, 10)}
              source={markdownBlock}
            />
          ))}
        </article>
      </section>
    </>
  )
}

export const getStaticPaths = async () => {
  const workPaths = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
          works {
            slug
          }
        }`,
    })
    .then((res) => {
      return res.data.data.works
    })

  const paths = workPaths.map((workPath) => ({
    params: { slug: workPath.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const work = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
        work (where: {slug: "${params.slug}"}) {
          id
          title
          slug
          publishedAt
          updatedAt
          categories
          repositories {
            id
            title
            url
            repositoryHost
          }
          hero {
            id
            url(transformation: {
              image: {
                resize: {
                  width: 672,
                  height: 480,
                  fit: clip
                }
              }
              document: {
                output: {
                  format: webp
                }
              }
            })
          }
          summary
          markdown
        }
      }`,
    })
    .then((res) => {
      return res.data.data.work
    })

  return {
    props: {
      work,
    },
  }
}

export default Work
