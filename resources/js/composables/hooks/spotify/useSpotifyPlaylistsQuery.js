import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const getPlaylists = async () => {
  const { data } = await axios.get(route('api.spotify.playlists'))

  return data
}

const useSpotifyPlaylistsQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: ['spotify', 'playlists'],
    queryFn: getPlaylists,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    retry: false,

    ...config,
  })

export default useSpotifyPlaylistsQuery
