// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Dinner from './dinner'
import './App.css' ;

function SohApp() {
  return (
    <div class='div-class'>
      <Dinner sname='Adil' age='20' math='45' urdu='35' eng='45' />
      <Dinner sname='Imran ' sage='22' math='65' urdu='45' eng='55' />
      <Dinner sname='Sohail' sage='25' math='35' urdu='75' eng='255' />

      
    </div>
  )
}

export default SohApp