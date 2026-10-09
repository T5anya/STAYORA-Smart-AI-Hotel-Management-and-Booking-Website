import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './pages/landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;