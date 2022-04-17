import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import ShowBookC from './Feb-05-2022/components/Book/ShowBookC';
// // import NavBarF from './Feb-07-2022/components/NavBarF';
// // import ChangeColor from './Feb-07-2022/Mam7-feb-22/ChangeColorFromProps';
// // import Conditional from './Feb-07-2022/Mam7-feb-22/conditional';
// // import Increment from './Feb-07-2022/Mam7-feb-22/incrClassComp';
// // import Poet from './Feb-07-2022/Mam7-feb-22/poet';
// // import TableComponentC from './Feb-07-2022/Mam7-feb-22/TableComponentC';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './Feb-08-2022/cp/ReduxStoreExample'
// import store from './Feb-08-2022/store/ReduxStoreExampleF';
// import ShowBookF from './Feb-07-2022/components/Booknew/ShowBookF';
// import BookRouteF from './Feb-07-2022/components/Booknew/BookRouteF';
// import BookDetailsF from './Feb-07-2022/components/Booknew/BookDetailsF';

/* 
const App7Feb = (
  <BrowserRouter>
    <div>
      <NavBarF></NavBarF>
      <Routes>
        <Route path="/math/tablec/:v" element={<TableComponentC />} />
        <Route path="/showBook" element={<ShowBookC /> } />
        <Route path="/color" element={<ChangeColor /> } />
        <Route path="/incr" element={<Increment />} />
        <Route path="/poet" element={<Poet />} />
        <Route path="/conditional" element={<Conditional />} />
      </Routes>
    </div>
  </BrowserRouter>
);
 

ReactDOM.render(
  App7Feb,
  document.getElementById('root')
);
 */

/* 
const App8Feb = (
  <BrowserRouter>
    <div>
      <BookRouteF/>
      <Routes>
        <Route path="/showBook" element={<ShowBookF /> } />
        <Route path="/showBook/showById/:id" element={<BookDetailsF />} />
      </Routes>
    </div>
  </BrowserRouter>
);
 

ReactDOM.render(
  App8Feb,
  document.getElementById('root')
);

 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
