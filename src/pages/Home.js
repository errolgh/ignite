import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  })
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
}