import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlbumCollection } from '@fortawesome/pro-duotone-svg-icons'
import SpotifyTrackGrid from '@components/Spotify/SpotifyTrackGrid'

const SpotifyTop = ({ tracks }) => {
  return (
    <>
      <div className="grid grid-flow-col auto-cols-min gap-4 items-center mb-8">
        <FontAwesomeIcon
          icon={faAlbumCollection}
          className="text-3xl text-coolGray-500 dark:text-coolGray-400"
        />

        <h3 className="font-normal text-xl text-coolGray-600 dark:text-coolGray-400 whitespace-nowrap uppercase">
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

export default SpotifyTop
