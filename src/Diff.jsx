import React from 'react'

export default function Diff() {
  return (
    <div className='min-h-screen p-10'>
    <div className="diff min-h-3.5 aspect-[12/6]">
  <div className="diff-item-1">
    <div className="bg-diff  grid place-content-center font-black">
    <h1 className='pb-5'>Benefits of Plants</h1>
      <ul>
        <li className='flex flex-row my-3' ><img className='max-h-10  pb-2' src="/check-mark.png" alt="check" /><p className='pt-1'> Plants absorb carbon dioxide and release oxygen, improving air quality.           </p></li>
        <li className='flex flex-row my-3' ><img className='max-h-10  pb-2' src="/check-mark.png" alt="check" /><p className='pt-1'> Plants help in cooling the environment through the process of transpiration.      </p></li>
        <li className='flex flex-row my-3' ><img className='max-h-10  pb-2' src="/check-mark.png" alt="check" /><p className='pt-1'> Plant roots hold soil together, preventing erosion and maintaining soil structure.</p></li>
        <li className='flex flex-row my-3' ><img className='max-h-10  pb-2' src="/check-mark.png" alt="check" /><p className='pt-1'> Plants provide habitat and food for a wide range of animals and insects.          </p></li>
        <li className='flex flex-row my-3' ><img className='max-h-10  pb-2' src="/check-mark.png" alt="check" /><p className='pt-1'> Plants release water vapor into the atmosphere, supporting the water cycle.       </p></li>
        <li className='flex flex-row my-3' ><img className='max-h-10  pb-2' src="/check-mark.png" alt="check" /><p className='pt-1'> The presence of plants is known to reduce stress and improve mental health.       </p></li>
      </ul>
    </div>
  </div>
  <div className="diff-item-2">
  <div className="bg-base-200 grid place-content-center font-black">
    <h1  className='pb-5'>Hazards of No Plants</h1>
      <ul>
        <li className='flex flex-row my-3'> <img className='max-h-10 pb-2' src="/remove.png" alt="cross" /><p className='pt-1 pl-2' > Without plants, there would be less oxygen and more carbon dioxide, leading to poor air quality. </p></li>
        <li className='flex flex-row my-3'> <img className='max-h-10 pb-2' src="/remove.png" alt="cross" /><p className='pt-1 pl-2' > The absence of plants would lead to hotter temperatures as there would be no transpiration to cool the surroundings.</p></li>
        <li className='flex flex-row my-3'> <img className='max-h-10 pb-2' src="/remove.png" alt="cross" /><p className='pt-1 pl-2' > Without plant roots, soil would be prone to erosion, reducing soil fertility.</p></li>
        <li className='flex flex-row my-3'> <img className='max-h-10 pb-2' src="/remove.png" alt="cross" /><p className='pt-1 pl-2' > Many species would lose their habitat and food source, leading to extinction and ecosystem collapse.</p></li>
        <li className='flex flex-row my-3'> <img className='max-h-10 pb-2' src="/remove.png" alt="cross" /><p className='pt-1 pl-2' > A lack of plants would mean less water vapor released into the atmosphere, impacting rainfall patterns.</p></li>
        <li className='flex flex-row my-3'> <img className='max-h-10 pb-2' src="/remove.png" alt="cross" /><p className='pt-1 pl-2' > Urban areas without greenery would likely experience higher levels of stress and reduced well-being.</p></li>
      </ul>
    </div>
  </div>
  <div class="diff-resizer"></div>
</div>
    </div>
  )
}
