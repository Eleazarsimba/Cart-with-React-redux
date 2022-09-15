import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Pagenotfound from './components/Pagenotfound';

// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route path="*" component={<Pagenotfound />} />
      </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </>
  );
}

export default App;
