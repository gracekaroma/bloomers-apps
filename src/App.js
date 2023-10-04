import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Service from './Component/Service';
import NoPage from './Component/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Service' element={<Service />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
