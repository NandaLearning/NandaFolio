import Laravel from "../allcards/Laravel";
import ReactCards from "../allcards/React";
import Footer from "../components/Footer";
import Navigasi from "../components/Navigasi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Tech (){

    const [first ,second] = useState(0)

    const menujuProject = useNavigate();
    const balikHome = useNavigate();
    const menujuContact = useNavigate()

    function gasProject() {
        menujuProject("/workship")
    }

    function backHome(){
        balikHome("/")
    }

    function gasContact(){
        menujuContact("/contact")
    }



    return(
        <div className=" bg-white min-h-screen text-black">
            <Navigasi/>

            <div className=" justify-center items-center flex mt-10">
                <h1 className=" font-bold text-4xl">Tech</h1>

            </div>

            {/* card nya */}

            <div className=" justify-center items-center flex mt-10 flex-wrap">
            <Laravel/>
            <ReactCards/>
            </div>


           {/* perhitungan */}
            <div className=" justify-center items-center grid mt-10">
                <h1 className=" text-center font-bold">{first}</h1>
                <button onClick={() => second((hitung) => hitung + 1)} className=" border border-black rounded-lg font-bold mt-3 w-20 h-8 hover:bg-purple-600">Count</button>


            </div>
            
            <div className=" flex justify-center items-center text-black mt-16">
                <div className="text-xl breadcrumbs">
                <ul>
    <li><a onClick={backHome}>Home</a></li> 
    <li><a onClick={gasProject}>Workship</a></li> 
    <li><a onClick={gasContact}>Contact</a></li>
  </ul>
</div>
 
                </div>

            
<Footer/>
        </div>
    )
}