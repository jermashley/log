import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignalStream } from '@fortawesome/pro-regular-svg-icons'

const SpotifyNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null)

  useEffect(() => {
    axios.get(`/api/nowPlaying`).then((res) => {
      setNowPlaying(res)
    })
  }, [])

  return (
    <>
      {nowPlaying?.status === 200 ? (
        <>
          <div className="grid grid-flow-col auto-cols-min gap-2 items-center mb-3">
            <FontAwesomeIcon
              icon={faSignalStream}
              className="text-2xl text-coolGray-600"
            />

            <h3 className="font-semibold text-xxs text-coolGray-600 dark:text-coolGray-400 whitespace-nowrap uppercase">
              Now Playing
            </h3>
          </div>

          <div
            className="grid grid-rows-2 gap-x-3 gap-y-1"
            style={{
              gridTemplateColumns: `4rem 1fr`,
            }}
          >
            <div className="row-start-1 row-span-2 col-start-1 rounded overflow-hidden">
              <Image
                src={nowPlaying.data.item.album.images[1].url}
                width={64}
                height={64}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="col-start-2 row-start-1 self-end grid grid-flow-col gap-3">
              <a
                href={nowPlaying.data.item.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="transition-color duration-500 font-bold text-lg text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400 leading-none"
              >
                {nowPlaying.data.item.name}
              </a>

              {nowPlaying.data.item.explicit && (
                <svg
                  width="57"
                  height="16"
                  viewBox="0 0 57 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center"
                >
                  <path
                    d="M9.896 8.6V9.88H12.32V11H9.896H9.488H8.592V5.4H9.488H9.896H12.32V6.52H9.896V7.512H12.16V8.6H9.896ZM17.2843 5.4H18.9643L17.2043 8.128L19.0763 11H17.4043L16.3803 9.144L15.3243 11H13.6523L15.5723 8.128L13.8443 5.4H15.5243L16.3883 7.016L17.2843 5.4ZM21.8487 9.064V11H20.4967V5.4H21.3447H21.8487H22.4407C23.1527 5.4 23.6967 5.568 24.0647 5.888C24.4327 6.216 24.6167 6.664 24.6167 7.232C24.6167 7.8 24.4327 8.248 24.0647 8.576C23.6967 8.904 23.1527 9.064 22.4407 9.064H21.8487ZM21.8487 7.944H22.4407C22.7127 7.944 22.9207 7.888 23.0807 7.76C23.2327 7.64 23.3127 7.464 23.3127 7.232C23.3127 7 23.2327 6.824 23.0807 6.704C22.9207 6.584 22.7127 6.52 22.4407 6.52H21.8487V7.944ZM26.2811 5.4H27.6331V9.832H29.8811V11H26.2811V5.4ZM31.3076 5.4H32.6836V11H31.3076V5.4ZM35.8301 8.2C35.8301 8.544 35.9021 8.84 36.0541 9.08C36.2061 9.328 36.4141 9.52 36.6701 9.648C36.9261 9.776 37.1981 9.84 37.5021 9.84C37.8941 9.84 38.2221 9.768 38.4941 9.616C38.7661 9.472 38.9901 9.296 39.1741 9.096V10.568C38.9501 10.744 38.7021 10.88 38.4381 10.976C38.1661 11.08 37.8301 11.128 37.4221 11.128C36.8221 11.128 36.2941 11.008 35.8301 10.76C35.3661 10.52 34.9981 10.176 34.7421 9.736C34.4781 9.296 34.3501 8.784 34.3501 8.2C34.3501 7.624 34.4781 7.112 34.7421 6.672C34.9981 6.232 35.3661 5.888 35.8301 5.64C36.2941 5.4 36.8221 5.272 37.4221 5.272C37.8301 5.272 38.1661 5.328 38.4381 5.424C38.7021 5.528 38.9501 5.664 39.1741 5.832V7.304C38.9901 7.104 38.7661 6.928 38.4941 6.784C38.2221 6.64 37.8941 6.56 37.5021 6.56C37.1981 6.56 36.9261 6.632 36.6701 6.76C36.4141 6.888 36.2061 7.08 36.0541 7.32C35.9021 7.568 35.8301 7.864 35.8301 8.2ZM41.0717 5.4H42.4477V11H41.0717V5.4ZM43.8742 6.616V5.4H48.3062V6.616H46.7702V11H45.4102V6.616H43.8742Z"
                    fill="#A0AEC0"
                  />
                  <rect
                    x="0.75"
                    y="0.75"
                    width="55.5"
                    height="14.5"
                    rx="3.25"
                    stroke="#A0AEC0"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>

            <div className="col-start-2 row-start-2 self-start">
              <p className="font-normal text-sm text-coolGray-600 dark:text-coolGray-500 leading-none">
                {nowPlaying.data.item.artists.map((artist, index) => {
                  const artistsLength = nowPlaying.data.item.artists.length

                  let string

                  if (artistsLength <= 1) {
                    string = artist.name
                  } else {
                    string =
                      artistsLength === index + 1 && artistsLength !== 1
                        ? `${artist.name}`
                        : `${artist.name}, `
                  }

                  return string
                })}
              </p>
            </div>
          </div>
        </>
      ) : (
        <h1 className="font-medium text-2xl text-coolGray-500 dark:text-coolGray-400 leading-relaxed">
          Nothing Playing
        </h1>
      )}
    </>
  )
}

export default SpotifyNowPlaying
