// import React from 'react';
// import { useState } from 'react';
// import './App.css';
// import NavBar from './components/NavBar';
// import Listings from './components/Listings';


// const App = () => {

  // const [loggedIn, setLoggedIn] = useState(false)

  // if (loggedIn) {
  // return (
  //   <div className="App">
  //     AdminView goes here
  //      {/* <AdminView/> */}
  //   </div>
  // )}

  // else {
  //   return (
  //     <div className="App">
  //       <h1>Listings go here</h1>
  //       {/* <Listings/> */}
  //     </div>
  //   )
  // };
// };

// function WrappedApp() {
  
//   return (
//     <NavBar>
//       <App />
//     </NavBar>
//   );
// }

// export default WrappedApp;


import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Router from "./Router";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;