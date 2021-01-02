import axios from 'axios'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/pro-duotone-svg-icons'

const FotoLogs = ({ fotoLogs }) => {
  return (
    <section>
      {fotoLogs.map((fotoLog) => {
        const hasMultiplePhotos = fotoLog.photos.length >= 2

        return (
          <Link href={`fotolog/${fotoLog.id}`} key={fotoLog.id}>
            <a>
              {hasMultiplePhotos && (
                <span className="text-white text-sm">
                  <FontAwesomeIcon icon={faClone} fixedWidth />
                </span>
              )}
              <div>
                <img src={fotoLog.photos[0].url} alt="" />
              </div>
            </a>
          </Link>
        )
      })}

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0.5rem;
        }

        section > a {
          display: grid;
          position: relative;
          overflow: hidden;
        }

        section > a::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          padding-bottom: 100%;
          grid-area: 1 / 1 / 2 / 2;
        }

        section > a div {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        section > a img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          grid-area: 1 / 1 / 2 / 2;
          transition: 250ms ease-in-out;
          transform: scale(1.075);
        }

        section > a:hover img {
          transition: 250ms ease-in-out;
          transform: scale(1);
        }

        section > a > span {
          z-index: 10;
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
        }
      `}</style>
    </section>
  )
}

export const getStaticProps = async () => {
  const fotoLogs = await axios
    .post(process.env.GRAPH_CMS_API_ENDPOINT, {
      query: `query {
          fotoLogs {
            id
            photos {
              id
              url(transformation: {
                image: {
                  resize: {
                    width: 800,
                    height: 800,
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
          }
        }`,
    })
    .then((res) => {
      return res.data.data.fotoLogs
    })

  return {
    props: {
      fotoLogs,
    },
  }
}

export default FotoLogs
