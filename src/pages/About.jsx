import Footer from "../components/Footer";
import Navigasi from "../components/Navigasi";
import { useNavigate } from "react-router-dom";

export default function About(){

    function hi(){
        const username = prompt("Whats your name?")

        if(username){
          alert("Whatsup " + username);
        }
    }

    const tech = useNavigate();
    function menujuTech(){
      tech("/tech")
      
    }

    const gasToWork = useNavigate()
    function keWork(){
      gasToWork("/workship")
    }

    const gasContact = useNavigate()
    function keKontak(){
      gasContact("contact")
    }


    return(
        <div className="bg-white min-h-screen">
            <Navigasi/>
            <div className="alert alert-info w-full rounded-none">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>Klik Photo Profile.</span>
</div>
                <div className=" font-bold font-sans text-5xl text-black mt-12 ml-5">
                    <a href="" className=" hover:text-red-600 duration-200 hover:under">ABOUT ME</a>

                    
                </div>



                <div className=" justify-end items-end flex">
                    <img src="skull.png" alt="" className=" w-28 mr-32"/>

                </div>
                <div className=" justify-center grid items-center mt-5">
                    <img onClick={()=>document.getElementById('my_modal_4').showModal()} src="profile.jpg" className=" w-80 rounded-lg hover:scale-105 duration-200 border border-black mt-7" />

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl bg-black text-white">
  <div className="mockup-browser border border-white">
  <div className="mockup-browser-toolbar">
    <div className="input border border-base-600"><a href="">https://nandafolio.vercel.app</a></div>
  </div>
  <div className="grid justify-center px-4 py-16 border-t border-white">Hello Guys!&#x1F44B;
  <p className="py-4">"Hello, let me introduce myself. My name is Ananda Lukman Ramadhan, and I am a web developer. I am a student at a vocational high school in Jakarta, and thank you for visiting my bio profile."</p>
  
  
  </div>
  
</div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                </div>

                <div className=" justify-start items-start flex ">
                    <img src="stiker.png" onClick={hi} className=" w-80 ml-5 mt-5"/>
                </div>


                <div className=" flex justify-center items-center text-black mt-10">
                <div className="text-xl breadcrumbs">
                <ul>
    <li><a onClick={menujuTech}>Tech</a></li> 
    <li><a onClick={gasToWork}>Workship</a></li> 
    <li><a onClick={gasContact}>Contact</a></li>
  </ul>
</div>
 
                </div>

                
                <Footer/>
        </div>
    )
}