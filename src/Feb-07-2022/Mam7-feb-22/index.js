import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AppRoute from "./Approute";
import ChangeColor from "./ChangeColorFromProps";
import Conditional from "./conditional";
import Increment from "./incrClassComp";
import MathComponent from "./MathComponent";
import Poet from "./poet";
import TableComponentC from "./TableComponentC";
const routs = (
    < BrowserRouter >
       <div>
         <AppRoute></AppRoute>
          <Routes>          
          <Route path="/math/tablec/:v" element={<TableComponentC></TableComponentC>} />
          <Route path="/math" element={<MathComponent></MathComponent>} />
          <Route path="/color" element={ <ChangeColor ></ChangeColor> } />
          <Route path="/incr" element={<Increment/> } />
          <Route path="/poet"  element={<Poet></Poet>} />
          <Route path="/conditional"  element={<Conditional></Conditional>} />
          </Routes>
       </div>
    </ BrowserRouter >
 );
 ReactDOM.render(routs, document.getElementById('root'))