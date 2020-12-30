import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignalStream } from '@fortawesome/pro-regular-svg-icons'
import { useQuery } from 'react-query'
import SpotifyTrackGrid from '@components/Spotify/SpotifyTrackGrid'

const SpotifyNowPlaying = () => {
  const { isLoading, error, data, isFetching } = useQuery(`getNowPlaying`, () =>
    axios.get(`/api/nowPlaying`).then((res) => res.data),
  )

  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-2 items-center mb-4">
        <FontAwesomeIcon
          icon={faSignalStream}
          className="text-2xl text-coolGray-600"
        />

        <h3 className="font-semibold text-xxs text-coolGray-600 dark:text-coolGray-400 whitespace-nowrap uppercase">
          Now Playing
        </h3>
      </div>

      {!error && !isLoading && !isFetching && data.isPlaying ? (
        <SpotifyTrackGrid track={data.item} />
      ) : (
        <h1 className="font-medium text-xl text-coolGray-400 dark:text-coolGray-400 leading-relaxed">
          Nothing playing yet!
        </h1>
      )}
    </>
  )
}

export default SpotifyNowPlaying
