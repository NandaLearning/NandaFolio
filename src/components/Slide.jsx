export default function Slide(){
    return(
        <div className=" flex justify-center items-center text-black flex-wrap">
            <div className="card w-96 shadow-xl mr-5">
  <figure><img src="devset.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">DevSet</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <a href="https://devset-peach.vercel.app/"><button className="btn btn-black hover:bg-black text-black hover:text-white bg-white">Live Demo</button></a>
    </div>
  </div>
</div>

<div className="card w-96  shadow-xl">
  <figure><img src="films.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Rate Films</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <a href="https://nandafilms.vercel.app/"><button className="btn btn-black hover:bg-black text-black hover:text-white bg-white">Live Demo</button></a>
    </div>
  </div>
</div>



</div>
    )
}