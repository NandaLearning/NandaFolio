//ini untuk route 
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Tech from "./pages/Tech";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
export default function App(){
  return(
    //ini alur router nya
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/tech" element={<Tech/>} />
    <Route path="/workship" element={<Work/>} />
    <Route path="/contact" element={<Contact/>} />




    {/*Not found*/}
    <Route path="*" element={<NotFound/>} />
  </Routes>
</Router>



  )
}