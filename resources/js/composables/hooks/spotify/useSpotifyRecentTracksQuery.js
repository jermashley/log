import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const getRecentTracks = async () => {
  const { data } = await axios.get(route('api.spotify.recent-tracks'))

  return data
}

const useSpotifyRecentTracksQuery = ({ config = {} } = {}) =>
  useQuery({
    queryKey: ['spotify', 'recent-tracks'],
    queryFn: getRecentTracks,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    retry: false,

    select: (data) => {
      const newData = data.items.reduce((accumulator, current) => {
        if (
          accumulator.length === 0 ||
          accumulator[accumulator.length - 1].track.id !== current.track.id
        ) {
          accumulator.push(current)
        }

        return accumulator
      }, [])

      return {
        ...data,
        items: newData,
      }
    },

    ...config,
  })

export default useSpotifyRecentTracksQuery
