import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { Conocenos } from '../pages/Conocenos/Conocenos';
import { Productos } from '../pages/Productos/Productos';

import Formulario from '../pages/formulario/formulario';
import Checkout from './../pages/checkOut/CheckOut';
import Home from './../pages/Home/Home';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home/>} />
      <Route path="/Conocenos" element={<Conocenos />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/checkOut" element={<Checkout />} />
    </ReactDomRoutes>
  );
}

export default Routes;
