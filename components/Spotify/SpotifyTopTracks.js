import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlbumCollection } from '@fortawesome/pro-regular-svg-icons'
import SpotifyTrackGrid from '@components/Spotify/SpotifyTrackGrid'

const SpotifyNowPlaying = ({ tracks }) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-2 items-center mb-4">
        <FontAwesomeIcon
          icon={faAlbumCollection}
          className="text-2xl text-coolGray-600"
        />

        <h3 className="font-semibold text-xxs text-coolGray-600 dark:text-coolGray-400 whitespace-nowrap uppercase">
          Top Tracks
        </h3>
      </div>

      <section className="grid grid-cols-1 gap-4">
        {tracks.map((track) => (
          <SpotifyTrackGrid track={track} key={track.id} />
        ))}
      </section>
    </>
  )
}

export default SpotifyNowPlaying
