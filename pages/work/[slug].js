import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import DateString from '@components/DateString'
import { snakeToTitleCase } from '@utils/stringCaseConversions'
import HeadMeta from '@components/HeadMeta'

const Work = ({ work }) => {
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

        <div className="w-full mb-12">
          <img src={work.hero.url} alt="" className="w-full h-auto" />
        </div>

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
