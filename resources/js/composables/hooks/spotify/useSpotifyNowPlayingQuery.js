import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const getNowPlaying = async () => {
  const { data } = await axios.get(route('api.spotify.now-playing'))

  return data
}

const useSpotifyNowPlayingQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: ['spotify', 'now-playing'],
    queryFn: getNowPlaying,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    retry: false,

    ...config,
  })

export default useSpotifyNowPlayingQuery
