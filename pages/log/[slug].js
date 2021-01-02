import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import DateString from '@components/DateString'
import HeadMeta from '@components/HeadMeta'

const Log = ({ log }) => {
  return (
    <>
      <HeadMeta
        title={log.title}
        description={log.summary}
        imageUrl={log.hero.url}
      />

      <section>
        <h1 className="text-4xl text-coolGray-700 dark:text-coolGray-400 font-normal mb-3">
          {log.title}
        </h1>

        <DateString
          className="block font-semibold text-coolGray-500 text-2xs uppercase mb-12"
          timeStamp={log.publishedAt}
          dateFormat="MMMM dd, yyyy"
        />

        <div className="w-full h-64 mb-12">
          <img
            src={log.hero.url}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        <article className="prose dark:prose-dark max-w-none">
          {log.markdown.map((markdownBlock) => (
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
  const logPaths = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
          logs {
            slug
          }
        }`,
    })
    .then((res) => {
      return res.data.data.logs
    })

  const paths = logPaths.map((logPath) => ({
    params: { slug: logPath.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const log = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
        log (where: {slug: "${params.slug}"}) {
          id
          title
          slug
          publishedAt
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
          markdown
          summary
        }
      }`,
    })
    .then((res) => {
      return res.data.data.log
    })

  return {
    props: {
      log,
    },
  }
}

export default Log
