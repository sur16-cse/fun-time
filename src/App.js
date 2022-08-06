import './App.css';
import Header from './components/header/header.component';
import BottomNav from './components/Navbar/Navbar.component';
import {Routes,Route} from 'react-router-dom'
import Home from './route/Home/home.component';
import Movies from './route/movies/movies.component';
import TvSeries from './route/tvSeries/tv.component';
import Search from './route/search/search.component';
import Favourites from './route/favourites/favourites.component';
function App() {
  return (
    <>
      <Header/>
      <div className='app'>
      <Routes>
        <Route path='/' element={<BottomNav/>}>
          <Route index element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tvSeries' element={<TvSeries/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
