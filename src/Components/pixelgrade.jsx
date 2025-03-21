import React from 'react'
import img01 from '../assets/img/img-01.png'

function Pixelgrade() {
  return (
    <div className='py-10'>
      <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
         <div>
            <img className='' src={img01} alt="" />
         </div>
         <div>
            <h3 className='mt-5 md:mt-0 text-[2.25rem] font-semibold text-[#4D4D4D]'>The unseen of spending three years at Pixelgrade</h3>
            <p className='text-[#717171] m-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <a className='inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md' href="#">Learn More</a>
         </div>
      </div>
    </div>
  )
}

export default Pixelgrade
