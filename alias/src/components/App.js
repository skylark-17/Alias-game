import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style.css'
import Navigation from './Navigation';
import Home from './Home';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Rules from './Rules.js';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='rules' element={<Rules />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;