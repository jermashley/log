import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignalStream } from '@fortawesome/pro-light-svg-icons'
import SpotifyTrackGrid from '@components/Spotify/SpotifyTrackGrid'

const SpotifyNowPlaying = ({ spotifyData }) => {
  const { isLoading, error, data } = spotifyData

  return (
    <section>
      <div className="grid items-center grid-flow-col gap-2 mb-4 auto-cols-min min-w-[24rem]">
        <FontAwesomeIcon
          className="text-xl text-coolGray-500 dark:text-coolGray-400"
          icon={faSignalStream}
          fixedWidth
        />

        <p className="text-sm font-semibold uppercase text-coolGray-600 dark:text-coolGray-400 whitespace-nowrap">
          Now Playing
        </p>
      </div>

      {!error && !isLoading && data.isPlaying ? (
        <SpotifyTrackGrid track={data.item} />
      ) : (
        <p className="text-base font-normal leading-relaxed opacity-75 text-coolGray-400 dark:text-coolGray-400">
          Nothing playing at the moment...
        </p>
      )}
    </section>
  )
}

export default SpotifyNowPlaying
