import Image from 'next/image'

const SpotifyTrackGrid = ({ track }) => {
  return (
    <div
      className="grid grid-rows-2 gap-x-3 gap-y-1"
      style={{
        gridTemplateColumns: `4rem 1fr`,
      }}
    >
      <div className="row-start-1 row-span-2 col-start-1">
        <Image
          src={track.album.images[1].url}
          width={64}
          height={64}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="col-start-2 row-start-1 self-end grid grid-flow-col gap-3">
        <a
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="transition-color duration-500 font-bold text-lg text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400 leading-none"
        >
          {track.name}
        </a>
      </div>

      <div className="col-start-2 row-start-2 self-start font-normal text-sm text-coolGray-600 dark:text-coolGray-500 leading-none">
        {track.artists.map((artist, index) => {
          const artistsLength = track.artists.length
          const trailComma = artistsLength > index + 1 && artistsLength >= 2

          return (
            <>
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="transition-color duration-500 hover:text-pink-500 dark:hover:text-pink-400"
                key={artist.id}
              >
                {artist.name}
              </a>
              {trailComma && `, `}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default SpotifyTrackGrid
