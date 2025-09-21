import ProductCard from "./ProductCard"
import NavBar from"./NavBar.jsx"
import SignUp from "./SignUp.jsx"
import SignIn from"./SignIn.jsx"
import HomePage from"./HomePage.jsx"
import {Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <Routes>
       {/* <NavBar/> */}
       {/* <SignUp/> */}
       {/* <SignIn/> */}
       {/*<HomePage/>*/}
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/" element={<HomePage/>}/>


      
    </Routes>
  )
}

export default App
