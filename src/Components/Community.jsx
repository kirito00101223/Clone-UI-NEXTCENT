import React from 'react'
import icon01 from '../assets/img/icon-01.png'
import icon02 from '../assets/img/icon-02.png'
import icon03 from '../assets/img/icon-03.png'
function Community() {
  return (
    <div className='Container mx-auto max-w-[1320px] text-center'>
     <h2 className='text-[2.25rem] font-semibold text-[#D4D4D4]'>Manage your entire community in a single system</h2>
     <p className='text-[#717171] mb-5'>Who is Nextcent suitable for? </p>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-[100px] m-10 md:m-0'>
        <div className='shadow-lg p-10 rounded-lg'>
            <img className='mx-auto' src={icon01} alt="" />
            <h3 className='text-[1.75rem] font-bold text-[#4D4D4D] my-3'>Membership <br />Organisations</h3>
        </div>
        <div className='shadow-lg p-10 rounded-lg'>
            <img  className='mx-auto' src={icon02} alt="" />
            <h3 className='text-[1.75rem] font-bold text-[#4D4D4D] my-3'>National <br />Associations</h3>
        </div>
        <div className='shadow-lg p-10 rounded-lg'>
            <img className='mx-auto' src={icon03} alt="" />
            <h3 className='text-[1.75rem] font-bold text-[#4D4D4D] my-3'>Clubs And  <br />Groups</h3>
        </div>
     </div>



    </div>
  )
}

export default Community
