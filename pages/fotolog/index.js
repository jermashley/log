import axios from 'axios'
import Link from 'next/link'
import CopyIcon from '@components/Icons/CopyIcon'

const FotoLogs = ({ fotoLogs }) => {
  return (
    <section>
      {fotoLogs.map((fotoLog) => {
        const hasMultiplePhotos = fotoLog.photos.length >= 2

        return (
          <Link href={`fotolog/${fotoLog.id}`} key={fotoLog.id}>
            <a>
              {hasMultiplePhotos && (
                <span>
                  <CopyIcon />
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
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 0.75rem;
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
          width: 2rem;
          height: 2rem;
          top: 0.5rem;
          right: 0.5rem;
        }
      `}</style>
    </section>
  )
}

export const getStaticProps = async () => {
  const fotoLogs = await axios
    .post(
      `https://api-us-east-1.graphcms.com/v2/ck88yjl9x01o801z91nyy7j2u/master`,
      {
        query: `query {
          fotoLogs {
            id
            photos {
              id
              url(transformation: {
                image: {
                  resize: {
                    width: 400,
                    height: 400,
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
      },
    )
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
