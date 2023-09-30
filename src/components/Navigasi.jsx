import { useNavigate } from "react-router-dom"
export default function Navigasi () {
  const goToHome = useNavigate()
  const goToAbout = useNavigate()
  const goToTech = useNavigate()
  const goToWork = useNavigate()
  const goToContact = useNavigate()

  function gasToHome(){
    goToHome ("/")
  }
  function gasToAbout(){
    goToAbout ("/about")
  }
  function gasToTech(){
    goToTech ("/tech")
  }
  function gasToWork(){
    goToWork ("/workship")
  }
  function gasToContact(){
    goToContact ("/contact")
  }
    return(
      <div className="navbar bg-white drop-shadow-xl text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li onClick={gasToHome}><a>Homepage</a></li>
            <li onClick={gasToAbout}><a>About Me</a></li>
            <li onClick={gasToTech}><a>Tech</a></li>
            <li onClick={gasToWork}><a>Workship</a></li>
            <li onClick={gasToContact}><a>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Ananda Lukman Ramadhan</a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
    )
}