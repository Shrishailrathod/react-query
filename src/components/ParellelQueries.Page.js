import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}

export const ParellelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends } = useQuery('friends', fetchFriends)
  console.log(superHeroes, friends)
  return <div>Parallel Queries</div>
}