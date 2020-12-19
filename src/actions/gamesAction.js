import axios from 'axios'
import { popularGamesURL } from '../api'


export const loadGames = () => (dispatch) =>{
    const popularData = axios.get(popularGamesURL())
}