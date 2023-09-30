export default function Laravel(){
    return(
        <div onClick={()=>document.getElementById('my_modal_1').showModal()} className=" w-80 h-52 bg-white rounded-xl hover:drop-shadow-2xl duration-200 border  hover:bg-red-200 mr-1">
            <div className="flex justify-center items-center mt-7">
            <img src="laravel.png" className=" w-32" />
            </div>

<dialog id="my_modal_1" className="modal text-black">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Laravel</h3>
    <div className="mockup-code mt-5">
  <pre data-prefix="$"><code>composer create-project laravel/laravel example-app</code></pre>
  <pre data-prefix="$"><code>cd example-app</code></pre>
  <pre data-prefix="$"><code>php artisan serve</code></pre>
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