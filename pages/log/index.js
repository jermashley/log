import axios from 'axios'
import LogCard from '../../components/Log/LogCard'

const Logs = ({ logs }) => {
  return (
    <>
      <section className="w-full grid grid-cols-1 grid-flow-row gap-6">
        {logs.map((log) => (
          <LogCard log={log} key={log.slug} />
        ))}
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const logs = await axios
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
        query: `query {
          logs {
            id
            title
            slug
            publishedAt
            hero {
              id
              url(transformation: {
                image: {
                  resize: {
                    width: 200,
                    height: 160,
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
          }
        }`,
      },
    )
    .then((res) => {
      return res.data.data.logs
    })

  return {
    props: {
      logs,
    },
  }
}

export default Logs
