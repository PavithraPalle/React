//! component composition example

// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";


// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Main></Main>
//       <div className="sidebar">
//         <Sidebar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>

//   )
// }
// export default App;



//! props
// import React, { Component } from 'react';
// import CBCPropsex1 from './propsexample/CBCPropsex1';

// class App extends Component {
//   render() {
//     return (
//       <div>App
//         <hr/>

//         <CBCPropsex1 username="sam"
//           age={25}
//           value={true}
//           desig={['developer', 'tester']}
//           userDetails={{ city: "Hyderabad", area: "Maisammaguda" }}
//           sendFun={function () { alert("Hi, I am from parent component") }}
//         />

//       </div>
//     )
//   }
// }

// export default App;


//! Function Based Component(props)

// import React from 'react'
// import FBCPropex1 from './propsexample/FBCPropex1'

// const App = () => {
//   return (
//     <div>App
//       <FBCPropex1
//         username="Pavithra"
//         isLoggedIn={true}
//         hobbies={['Playing', 'travel']}
//       />
//     </div>
//   )
// }

// export default App


//! Props children example
import React from 'react'
import ChildProps from './propsexample/ChildProps'
import PropsChildren from './propsexample/PropsChildren'

const App = () => {
  return (
    <div>
      <PropsChildren username="Pavithra" company="TCS">
        <h1>This data is passed as props children</h1>
        <ChildProps name="Pavithra"/>
      </PropsChildren>
    </div>
  )
}

export default App

