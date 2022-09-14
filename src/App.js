import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
