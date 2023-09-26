import { useNavigate } from "react-router-dom"
import Navigasi from "../components/Navigasi"
import Footer from "../components/Footer"
export default function Home(){
    const menujuAbout = useNavigate()

    function keAbout (){
        menujuAbout("/about")
    }
    return(
        <div className=" bg-white min-h-screen">
            <Navigasi/>
           <div className=" justify-center items-start grid h-full mt-8">

            {/*List link to page*/}
            <div className=" text-8xl text-black font-bold font-sans">
                <h1>Wellcome To My</h1>
                <h1 className=" text-center">Portofolio bruh!</h1>
            </div>





            {/*List link to page*/}
            
            <div className="mockup-phone border-primary">
  <div className="camera"></div> 
  <div className="display">
  <div className=" text-black font-bold text-5xl grid text-center mt-20">
                <a href="" className=" text-6xl text-red-500 hover:underline duration-150">About Me</a>
                <a href="" className=" mt-4 hover:bg-red-500 duration-200">MyTech</a>
                <a href="" className=" mt-4 hover:bg-red-500 duration-200">Workship</a>
                <a href="" className=" mt-4 hover:bg-red-500 duration-200">Contact</a>

                

            </div>
  </div>
</div>

<div className=" text-8xl text-black font-bold font-sans">
                <h1 className=" text-center">Get Strated!</h1>
                <h1 className=" text-center">Choice Page</h1>
            </div>



           </div>

           <Footer/>
        </div>
    )
}