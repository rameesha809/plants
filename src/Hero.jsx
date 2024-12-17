import React from 'react'

export default function Hero() {
  return (
    <div
    className="hero min-h-screen w-full"
    style={{
      backgroundImage: "url(/plants.jpg)",
      backgroundAttachment: 'fixed',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn bg-green-900 text-white border-none">Get Started</button>
      </div>
    </div>
  </div>
  )
}
