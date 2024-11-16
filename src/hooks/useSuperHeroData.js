import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// Fetch function for the superhero data
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1] // This extracts heroId from the queryKey
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient()

  return useQuery(
    { 
      queryKey: ['super-hero', heroId], // query key in an object
      queryFn: fetchSuperHero, // the query function in the object
      initialData: () => {
        // Get existing superhero data from queryClient if available
        const hero = queryClient
          .getQueryData(['super-heroes'])?.data
          ?.find((hero) => hero.id === parseInt(heroId)) // Ensure heroId is parsed as an integer
        if (hero) {
          return { data: hero }
        }
        return undefined // Return undefined if hero not found
      }
    }
  )
}
