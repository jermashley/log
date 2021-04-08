import { useState } from 'react'
import { usePopper } from 'react-popper'
import axios from 'axios'
import { useQuery } from 'react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt as lightHeadphones } from '@fortawesome/pro-light-svg-icons'
import { faHeadphonesAlt as duotoneHeadphones } from '@fortawesome/pro-duotone-svg-icons'
import SpotifyNowPlaying from './SpotifyNowPlaying'

const NowPlaying = () => {
  const { isLoading, error, data, refetch } = useQuery(
    `getNowPlaying`,
    () => axios.get(`/api/nowPlaying`).then((res) => res.data),
    { refetchInterval: 30000 },
  )

  const [musicDropdownActive, setMusicDropdownActive] = useState(false)

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: `offset`, options: { offset: [0, 10] } }],
  })

  const setIconAccent = () => {
    return musicDropdownActive
      ? `text-pink-500`
      : `text-coolGray-600 dark:text-coolGray-200`
  }

  const handleClick = () => {
    refetch()
    setMusicDropdownActive(!musicDropdownActive)
  }

  return (
    <div className="relative">
      <button
        ref={setReferenceElement}
        onClick={() => handleClick()}
        aria-label="Now Playing (Spotify)"
        className="relative flex flex-row items-center justify-center p-2 text-lg transition-colors duration-300 bg-transparent border border-transparent rounded outline-none focus:outline-none hover:bg-coolGray-100 dark:hover:bg-coolGray-800 hover:border-coolGray-100 dark:hover:border-coolGray-800"
      >
        {!error && !isLoading && data.isPlaying && (
          <>
            <span
              className="absolute z-20 block w-2 h-2 transform bg-pink-400 rounded-full top-1 right-1 animate-ping"
              style={{ animationDuration: `2s` }}
            />

            <span className="absolute z-10 block w-2 h-2 bg-pink-500 border-transparent rounded-full opacity-75 border-1 top-1 right-1" />
          </>
        )}

        <FontAwesomeIcon
          icon={musicDropdownActive ? duotoneHeadphones : lightHeadphones}
          className={`z-0 ${setIconAccent()}`}
          fixedWidth
        />
      </button>

      {musicDropdownActive && (
        <div
          className="relative px-6 py-4 rounded-md shadow-2xl bg-coolGray-50 dark:bg-coolGray-1000"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <SpotifyNowPlaying spotifyData={{ isLoading, error, data }} />
        </div>
      )}
    </div>
  )
}

export default NowPlaying
