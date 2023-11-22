import { BrowserRouter, useRoutes } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import Comprar from './pages/Comprar'
import Postventas from './pages/Postventas'
import Vehiculos from './pages/Vehiculos'
import { Prueba } from "./pages/prueba";
import { Formx } from "./pages/Formx";
import { Home } from "./pages/Home";






function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      
      { path: "/Comprar", element: <Comprar/> },
      { path: "/Formx", element: <Formx/> },
      { path: "/", element: <Home/> },
      { path: "/Postventas", element: <Postventas/> },
      { path: "/Vehiculos", element: <Vehiculos/> },
    ]);
    return routes;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;


/////////////////////////////////////////////
// function App() {
// const AppRoutes =()=>{
//   let routes = useRoutes([


//   ]);
// }

//   return (
//     <div>
//       <Routes>
//           <Route path="/" element={<Navbar/>}>
//           {/* <Route path="Home" element={<Home/>}> */}
//           <Route path="Comprar" element={<Comprar/>}/>
//           <Route path="Formx" element={<Formx/>}/>
//           <Route path="Prueba" element={<Prueba/>}/>
//           <Route path="Postventas" element={<Postventas/>}/>
//           <Route path="Vehiculos" element={<Vehiculos/>}/>
//         </Route>
//       </Routes>
//       <div>
        
//       </div>
      
//     </div>
//   );
// }

// export default App;
