import Homepage from './components/homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
