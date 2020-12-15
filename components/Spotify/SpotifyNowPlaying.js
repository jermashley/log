import { useState, useEffect } from 'react'
import axios from 'axios'
import RadioIcon from '../Icons/RadioIcon'

const SpotifyNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null)

  useEffect(() => {
    axios
      .get(`/api/spotifyGetToken`)
      .then(
        (res) => console.log(res),
        // axios
        //   .get(`https://api.spotify.com/v1/me/player`, {
        //     headers: {
        //       Authorization: `${res.token_type} ${res.access_token}`,
        //     },
        //   })
        //   .then((response) => {
        //     console.log(response)
        //     setNowPlaying(response)
        //   })
        //   .catch((e) => {
        //     console.log(e)
        //     setNowPlaying(e)
        //   }),
      )
      .catch((e) => console.log(e))
  }, [])

  return (
    <>
      {nowPlaying?.status === 200 ? (
        <>
          <div className="grid grid-flow-col auto-cols-min gap-2 items-center">
            <RadioIcon />
            <h3 className="font-semibold text-xxs text-coolGray-600 dark:text-coolGray-400 whitespace-nowrap uppercase">
              Now Playing
            </h3>
          </div>

          <h1 className="font-medium text-2xl text-coolGray-700 dark:text-coolGray-200 leading-relaxed">
            Playing {nowPlaying.data.item.name} by{` `}
            {nowPlaying.data.item.artists[0].name}
          </h1>
        </>
      ) : (
        <h1 className="font-medium text-2xl text-coolGray-700 dark:text-coolGray-200 leading-relaxed">
          Nothing Playing
        </h1>
      )}
    </>
  )
}

export default SpotifyNowPlaying
