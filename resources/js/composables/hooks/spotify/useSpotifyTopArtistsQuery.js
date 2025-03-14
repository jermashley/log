import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const getTopArtists = async () => {
  const { data } = await axios.get(route('api.spotify.top-artists'))

  return data
}

const useSpotifyTopArtistsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: ['spotify', 'top-artists'],
    queryFn: getTopArtists,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    retry: false,

    ...config,
  })

export default useSpotifyTopArtistsQuery
