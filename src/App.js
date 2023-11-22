import { Navbar } from "./componentes/Navbar";
import { Routes,Route } from "react-router-dom";
import Comprar from './pages/Comprar'
import Postventas from './pages/Postventas'
import Vehiculos from './pages/Vehiculos'
import Formulario from './pages/Formulario'
import { Prueba } from "./pages/prueba";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="Comprar" element={<Comprar/>}/>
          <Route path="Formulario" element={<Formulario/>}/>
          <Route path="Prueba" element={<Prueba/>}/>
          <Route path="Postventas" element={<Postventas/>}/>
          <Route path="Vehiculos" element={<Vehiculos/>}/>
        </Route>
      </Routes>
      <div>
        
      </div>
      
    </div>
  );
}

export default App;
