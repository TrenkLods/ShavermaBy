import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import AppRoutes from './Routs/Routers'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import { useDispatch } from 'react-redux';
import { fetchOrderData } from './Store/slice/menuSlice';

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)
  useEffect(() => {
    dispatch(fetchOrderData());
}, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {AppRoutes()}
        <Footer />
      </div>
    </Router>

  )
}

export default App
