import { getNowPlaying } from '@lib/spotify'

export default async (req, res) => {
  // Got some help here from Lee Robinson @ https://github.com/leerob/leerob.io/blob/3f0388d9a9656b88bbcaf2383e3709bad36dafb6/pages/api/now-playing.js

  const { data } = await getNowPlaying()

  if (data.status === 204 || data.status > 400) {
    return res.status(204).json({ isPlaying: false })
  }

  const { item, is_playing } = await data

  res.setHeader(
    `Cache-Control`,
    `public, s-maxage=60, stale-while-revalidate=30`,
  )

  return res.status(200).json({ item, isPlaying: is_playing })
}
