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
        <h1 className="text-4xl text-coolGray-700 dark:text-coolGray-400 font-normal mb-3">
          {work.title}
        </h1>

        <DateString
          className="block font-semibold text-coolGray-500 text-2xs uppercase mb-4"
          timeStamp={work.publishedAt}
          dateFormat="MMMM dd, yyyy"
        />

        <div className="grid grid-flow-col auto-cols-min gap-2 mb-12">
          {work.categories.map((category) => (
            <span
              className="block px-2 py-1 rounded bg-coolGray-200 dark:bg-coolGray-800 text-coolGray-500 dark:text-coolGray-400 text-2xs font-medium whitespace-nowrap leading-snug"
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
              <dd
                className="flex flex-row justify-start items-stretch w-min"
                key={repository.id}
              >
                <dt className="bg-coolGray-200 dark:bg-coolGray-800 text-coolGray-500 dark:text-coolGray-400 rounded-bl rounded-tl px-3 py-1 text-sm">
                  <FontAwesomeIcon icon={icon(repository.repositoryHost)} />
                </dt>

                <dl className="transition-colors duration-500 bg-coolGray-100 dark:bg-coolGray-1000 text-coolGray-600 dark:text-coolGray-300 hover:text-pink-500 rounded-br rounded-tr px-3 flex flex-col justify-center items-center text-2xs font-medium whitespace-nowrap leading-snug">
                  <a href={repository.url} target="_blank" rel="noreferrer">
                    {repository.title}
                    <FontAwesomeIcon
                      className="align-middle ml-2"
                      icon={faExternalLinkSquare}
                    />
                  </a>
                </dl>
              </dd>
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
