import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/project/:names' element={<Project/>}>Project</Route>
          <Route path='/contact' element={<Contact/>}>Contact</Route>
          <Route path='/login' element={<Login />}>Login</Route>
          <Route path='*'element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
