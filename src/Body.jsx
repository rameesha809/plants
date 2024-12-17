import React from 'react'

export default function Body() {
  return (
    <div className='flex flex-wrap justify-center max-h-screen'>
      <div className="card card-side bg-base-100 shadow-xl m-4 max-w-md">
      <div className='h-48 w-48'>
    <img
    className="h-full w-full object-cover"
      src="/tree.jpg"
      alt="tree" />
  </div>
  <div className="card-body">
    <h2 className="card-title">Seasonal / Evergreen Plants</h2>
    <p>Add greenery to your indoors and outoors</p>
    <div className="card-actions justify-end">
    <button className="btn bg-gradient-to-r from-indigo-500 from-3% via-sky-500 via-10% to-emerald-500 to-90%" style={{ backgroundColor: 'green', color: 'white' }}><a href='/Products' className='decoration-none text-white'>Explore</a></button>
    </div>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl m-4 max-w-md">
<div className='h-48 w-48'>
    <img
    className="h-48 w-48 object-fill"
      src="/sap.jpg"
      alt="Sap" />
  </div>
  <div className="card-body">
    <h2 className="card-title">Seasonal / Evergreen Trees</h2>
    <p>Create shelter for humans and birds</p>
    <div className="card-actions justify-end">
    <button className="btn bg-gradient-to-r from-indigo-500 from-3% via-sky-500 via-10% to-emerald-500 to-90%" style={{ backgroundColor: 'green', color: 'white' }}><a href='/Products' className='decoration-none text-white'>Explore</a></button>
    </div>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl m-4 max-w-md">
<div className='h-48 w-48'>
    <img
    className="h-full w-full object-cover"
      src="/sunf.jpg"
      alt="tree" />
  </div>
  <div className="card-body">
    <h2 className="card-title">Flowery Palnts and Trees</h2>
    <p>Enhance the beuty of your surroundings</p>
    <div className="card-actions justify-end">
      <button  className="btn bg-gradient-to-r from-indigo-500 from-3% via-sky-500 via-10% to-emerald-500 to-90%" style={{ backgroundColor: 'green', color: 'white' }}><a href='/Products' className='decoration-none text-white'>Explore</a></button>
    </div>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl m-4 max-w-md">
<div className='h-48 w-48'>
    <img
    className="h-full w-full object-cover"
      src="/fr.jpg"
      alt="fr" />
  </div>
  <div className="card-body">
    <h2 className="card-title">Fruity plants and trees</h2>
    <p>Savour the fruits plucked from your home</p>
    <div className="card-actions justify-end">
      <button className="btn bg-gradient-to-r from-indigo-500 from-3% via-sky-500 via-10% to-emerald-500 to-90%" style={{ backgroundColor: 'green', color: 'white' }}><a href='/Products' className='decoration-none text-white'>Explore</a></button>
    </div>
  </div>
</div>
    </div>
  )
}
