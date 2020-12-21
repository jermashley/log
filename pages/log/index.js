import axios from 'axios'
import LogCard from '@components/LogCard'
import HeadMeta from '@components/HeadMeta'

const Logs = ({ logs }) => {
  return (
    <>
      <HeadMeta
        title="Log"
        description="Howdy! I'm Jeremiah and I design and develop websites and webapps. Here are some of my favorite projects — from web work to photo and video to print design."
      />

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
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
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
    })
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
