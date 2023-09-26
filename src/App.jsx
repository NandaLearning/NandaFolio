//ini untuk route 
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
export default function App(){
  return(
    //ini alur router nya
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />



    {/*Not found*/}
    <Route path="*" element={<NotFound/>} />
  </Routes>
</Router>



  )
}