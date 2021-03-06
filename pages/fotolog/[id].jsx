import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import HeadMeta from '@components/HeadMeta'
import { parseISO, format } from 'date-fns'

const FotoLog = ({ fotoLog }) => {
  let createdAtDate = parseISO(fotoLog.createdAt)
  createdAtDate = format(createdAtDate, `MMMM dd, yyyy`)

  const pluralMetaString =
    fotoLog.photos.length >= 2 ? `these photos` : `this photo`

  return (
    <>
      <HeadMeta
        title={`Photo on ${createdAtDate}`}
        description={`Howdy! Check out ${pluralMetaString} I took on ${createdAtDate}`}
        imageUrl={fotoLog.photos[0].url}
      />

      <article className="prose dark:prose-dark max-w-none">
        {fotoLog.photos.map((photo) => (
          <img src={photo.url} alt="" key={photo.id} />
        ))}

        {fotoLog.markdown.length >= 1 && (
          <section>
            {fotoLog.markdown.map((markdownBlock) => (
              <ReactMarkdown
                key={markdownBlock.substr(0, 10)}
                children={markdownBlock}
              />
            ))}
          </section>
        )}
      </article>
    </>
  )
}

export const getStaticPaths = async () => {
  const fotoLogPaths = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
        fotoLogs {
          id
        }
      }`,
    })
    .then((res) => {
      return res.data.data.fotoLogs
    })

  const paths = fotoLogPaths.map((fotoLogPath) => ({
    params: { id: fotoLogPath.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const fotoLog = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
          fotoLog (where: {id: "${params.id}"}) {
            id
            markdown
            createdAt
            photos {
              id
              url(transformation: {
                image: {
                  resize: {
                    width: 672
                  }
                }
                document: {
                  output: {
                    format: webp
                  }
                }
              })
            }
          }
        }`,
    })
    .then((res) => {
      return res.data.data.fotoLog
    })

  return {
    props: {
      fotoLog,
    },
  }
}

export default FotoLog
