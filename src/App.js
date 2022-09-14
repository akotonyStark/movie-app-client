import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import NavHeader from './components/NavHeader'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavHeader />
        <Routes>
          <Route path='/' exact element={<MovieList />} />
          <Route path='/details' element={<MovieDetails />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
