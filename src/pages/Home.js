import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
import Game from '../components/Game'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import GameDetail from '../components/GameDetail'
import { useLocation } from 'react-router-dom'



export default function Home() {
  const location = useLocation()
  const pathId = location.pathname.split("/")[2]
  // putting 'dispatch' in the depenency array will get rid of a console.warn().
  // and useEffect will only run when dispatch changes.
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch]) 

  // below, we are extracting something specific (3 things) from state.games:
  // state.games.popular, state.games.newGames, and state.games.upcoming
  // '.games' is coming from whatever you named the reducer when you combined them in /reducers/index.js.
  const { popular, newGames, upcoming } = useSelector(state => state.games)


  return (
      <GameList>
        {pathId && <GameDetail />}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => 
            <Game
              name={game.name} 
              released={game.released} 
              id={game.id} 
              image={game.background_image}
              key={game.id}
            />
          )}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => 
            <Game
              name={game.name} 
              released={game.released} 
              id={game.id} 
              image={game.background_image}
              key={game.id}
            />
          )}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => 
            <Game
              name={game.name} 
              released={game.released} 
              id={game.id} 
              image={game.background_image}
              key={game.id}
            />
          )}
        </Games>
      </GameList>
  );
}

//container for literally this whole page
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`


//container for each game
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`