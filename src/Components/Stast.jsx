import React from 'react'
import img04 from '../assets/img/icon-04.png'
import img05 from '../assets/img/icon-05.png'
import img06 from '../assets/img/icon-06.png'
import img07 from '../assets/img/icon-07.png'
function Stast() {
  return (
    <div className='bg-[#f5f7fa] py-10 px-5 md:px-0'>
        <div className='container mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h3 className='text-[2.25rem] font-semibold '>Helping a local <br /> <span className='text-[#4CAF4F]'> business reinvent itself</span> </h3>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col md:flex-row item-center'>
                      <img className='m-5' src={img04} alt="" />
                        <div>
                        <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold'>2,245,341</h4>
                        <p className='flex'>Members</p>
                        </div>
                    </div>
                    <div className='flex  flex-col md:flex-row item-center'>
                      <img  className='m-5' src={img05} alt="" />
                        <div>
                        <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold'>46,328</h4>
                        <p className='flex'>Clubs</p>
                        </div>
                    </div>
                    <div className='flex  flex-col md:flex-row item-center '>
                      <img  className='m-5' src={img06} alt="" />
                        <div>
                        <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold'>828,867</h4>
                        <p className='flex'>Event Bookings</p>
                        </div>
                    </div>
                    <div className='flex  flex-col md:flex-row item-center'>
                      <img  className='m-5' src={img07} alt="" />
                        <div>
                        <h4 className='text-[1.75rem] text-[#4D4D4D] font-bold'>1,926,436</h4>
                        <p className='flex'>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Stast
