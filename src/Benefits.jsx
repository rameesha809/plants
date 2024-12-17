import React from 'react'

export default function Benefits() {
  return (
    <div className='flex flex-wrap min-h-screen p-10 min-w-full place-items-center justify-center '>
  <div className="card bg-white border-s-4 rounded-none border-l-green-500 flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
    <img className='max-h-24' src="/plant-a-tree.png" alt = "img"/>
    <p className='p-5'> Plant a tree to leave a green legacy  </p>
  </div>
  <div className="card bg-white border-s-4 rounded-none border-l-green1 flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
    <img className='max-h-24' src="/go-green.png" alt = "img"/>
    <p className='p-5'> Make the world around you greener that you found it </p>
  </div>
  <div className="card bg-white border-s-4 rounded-none border-l-brownish flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
    <img className='max-h-24' src="/plants.png" alt = "img"/>
    <p className='p-5'> Encourage planting trees and plants aroud your neighborhood </p>
  </div>
  <div className="card bg-white border-s-4 rounded-none border-l-darker flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
    <img className='max-h-24' src="/save-plants.png" alt = "img"/>
    <p className='p-5'> Be a saviour and helper to birds and other wild life</p>
  </div>
    </div>
  )
}
