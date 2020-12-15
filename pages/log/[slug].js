import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import DateString from '../../components/DateString'

const Log = ({ log }) => {
  return (
    <section>
      <div className="w-full h-64 mb-3">
        <img
          src={log.hero.url}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <DateString
        className="block font-semibold text-coolGray-500 text-xxs uppercase mb-12"
        timeStamp={log.publishedAt}
        dateFormat="MMMM dd, yyyy"
      />

      <h1 className="text-4xl text-coolGray-700 dark:text-coolGray-400 font-normal mb-4">
        {log.title}
      </h1>

      <article className="prose dark:prose-dark max-w-none">
        {log.markdown.map((markdownBlock) => (
          <ReactMarkdown
            key={markdownBlock.substr(0, 10)}
            children={markdownBlock}
          />
        ))}
      </article>
    </section>
  )
}

export const getStaticPaths = async () => {
  const logPaths = await axios
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
        query: `query {
          logs {
            slug
          }
        }`,
      },
    )
    .then((res) => {
      return res.data.data.logs
    })

  console.log(`logPaths`, logPaths)

  const paths = logPaths.map((logPath) => ({
    params: { slug: logPath.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  console.log(params)
  const log = await axios
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
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
        }
      }`,
      },
    )
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
