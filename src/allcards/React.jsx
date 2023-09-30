export default function ReactCards(){
    return(
        <div onClick={()=>document.getElementById('my_modal_5').showModal()} className=" w-80 h-52 bg-white rounded-xl hover:drop-shadow-2xl duration-200 border  hover:bg-blue-200">
            <div className="flex justify-center items-center mt-7">
            <img src="react.png" className=" w-32" />
            </div>




            <dialog id="my_modal_5" className="modal text-black">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">React Js</h3>
    <div className="mockup-code mt-5">
  <pre data-prefix="$"><code>npm create vite@latest my-project -- --template react</code></pre>
  <pre data-prefix="$"><code>cd my-project</code></pre>
  <pre data-prefix="$"><code>npm run dev</code></pre>
</div>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-black text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    )
}