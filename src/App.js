import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home/> 
      </Route>
    </div>
  );
}

// Chapter 6 - Ignite

// 9. Global Styles (0:42)