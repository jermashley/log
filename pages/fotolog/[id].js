import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const FotoLog = ({ fotoLog }) => {
  return (
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
  )
}

export const getStaticPaths = async () => {
  const fotoLogPaths = await axios
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
        query: `query {
        fotoLogs {
          id
        }
      }`,
      },
    )
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
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
        query: `query {
          fotoLog (where: {id: "${params.id}"}) {
            id
            markdown
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
      },
    )
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
