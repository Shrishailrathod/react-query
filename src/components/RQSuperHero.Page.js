import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export const RQSuperHeroPage = () => {
  const { heroId } = useParams() // Make sure this matches the route setup
  const { data, error, isLoading } = useSuperHeroData(heroId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching superhero data!</div>

  return <div>{data?.name}</div>
}