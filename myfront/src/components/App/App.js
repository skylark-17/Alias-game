import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from '../Navigation/Navigation';
import NotFound from '../NotFound';
import { AuthProvider } from '../../context/AuthContext';
import {all_pages} from '../Navigation/Navigation'

function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Router>
        <Routes>
          {all_pages.map(elem => 
            <Route path={elem.href} element={elem.element} key={elem.id}/>
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </AuthProvider>
  );
}

export default App;