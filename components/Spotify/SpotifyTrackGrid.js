import Image from 'next/image'

const SpotifyTrackGrid = ({ track }) => {
  return (
    <div className="grid grid-rows-2 gap-x-3 gap-y-1 grid-cols-[4rem,1fr]">
      <div className="col-start-1 row-span-2 row-start-1">
        <Image
          src={track.album.images[1].url}
          width={64}
          height={64}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="grid self-end grid-flow-col col-start-2 row-start-1 gap-3">
        <a
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="text-lg font-bold leading-none duration-500 transition-color text-coolGray-700 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400"
        >
          {track.name}
        </a>
      </div>

      <div className="self-start col-start-2 row-start-2">
        {track.artists.map((artist, index) => {
          const artistsLength = track.artists.length
          const trailComma = artistsLength > index + 1 && artistsLength >= 2

          return (
            <div
              className="inline text-coolGray-700 dark:text-coolGray-400"
              key={artist.id}
            >
              <a
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-normal leading-none duration-500 transition-color text-coolGray-600 dark:text-coolGray-400 hover:text-pink-500 dark:hover:text-pink-400"
              >
                {artist.name}
              </a>
              {trailComma && `, `}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpotifyTrackGrid
