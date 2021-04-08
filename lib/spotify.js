import axios from 'axios'

export const getToken = async () => {
  const response = await axios
    .post(process.env.SPOTIFY_TOKEN_ENDPOINT, null, {
      headers: {
        'Authorization': `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
        ).toString(`base64`)}`,
        'Content-Type': `application/x-www-form-urlencoded`,
      },
      params: {
        grant_type: `refresh_token`,
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        scope: process.env.SPOTIFY_SCOPE,
      },
    })
    .then((res) => res.data)

  return response
}

export const getNowPlaying = async () => {
  const { access_token } = await getToken()

  const response = await axios.get(process.env.SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return response
}

export const getTopTracks = async () => {
  const { access_token } = await getToken()

  const response = await axios.get(process.env.SPOTIFY_TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params: {
      time_range: `long_term`,
      limit: `10`,
    },
  })

  return response
}
