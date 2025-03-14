import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const getTopTracks = async () => {
  const { data } = await axios.get(route('api.spotify.top-tracks'))

  return data
}

const useSpotifyTopTracksQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: ['spotify', 'top-tracks'],
    queryFn: getTopTracks,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    retry: false,

    ...config,
  })

export default useSpotifyTopTracksQuery
