import {BrowserRouter as Router, Routes , Route} from "react-router-dom"

import Home from "./pages/Home";
import Index from'./pages/AllPlants';
import Edit from "./pages/Edit";
import New from "./pages/NewPlant";
import Show from './pages/ShowPlant'
import Navbar from './components/Navbar'


function App(){
  return(
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/plants' element={<Index/>}/>
          <Route path ='/plants/new' element={<New/>}/>
          <Route path ='/plants:index' element ={<Show/>}/>
          <Route path ='/plants/:index/edit' element={<Edit/>}/>
        </Routes>
      </main>
    </Router>
  )
}
 export default App;