import Footer from "../components/Footer";
import Navigasi from "../components/Navigasi";
import Slide from "../components/Slide";
import { useNavigate } from "react-router-dom";
export default function Work(){

   const gasToHome = useNavigate()
   const gasToTech = useNavigate()
   const gasToContact = useNavigate()

    function keHome(){
        gasToHome("/")
    }

    function keTech(){
        gasToTech("/tech")
    }

    function keContact(){
        gasToContact("/contact")
    }




    return(
        <div className=" bg-white min-h-screen text-black">
            <Navigasi/>

            <div className=" grid justify-center items-center">
                <div className="text-5xl font-bold mt-10">
                <h1>This All my Project</h1>

                <div className=" text-xl mt-10">
                <Slide/>
                </div>
                </div>
            </div>


            <div className=" flex justify-center items-center text-black mt-10">
                <div className="text-xl breadcrumbs">
                <ul>
    <li><a onClick={keHome}>Home</a></li> 
    <li><a onClick={keTech}>Tech</a></li> 
    <li><a onClick={keContact}>Contact</a></li>
  </ul>
</div>
 
                </div>


            <Footer/>
        </div>
    )
}