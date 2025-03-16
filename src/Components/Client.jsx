import React from 'react'
import ClientImgLogo01 from '../assets/img/clients/client-01.png'
import ClientImgLogo02 from '../assets/img/clients/client-02.png'
import ClientImgLogo03 from '../assets/img/clients/client-03.png'
import ClientImgLogo04 from '../assets/img/clients/client-04.png'
import ClientImgLogo05 from '../assets/img/clients/client-05.png'
import ClientImgLogo06 from '../assets/img/clients/client-06.png'
import ClientImgLogo07 from '../assets/img/clients/client-07.png'
const ClientImgLogo =[ClientImgLogo01,ClientImgLogo02,ClientImgLogo03,ClientImgLogo04,ClientImgLogo05,ClientImgLogo06,ClientImgLogo07]
function Client() {
  return (
    <div className='container mx-auto max-w-[1320px] py-10 text-center'>
       <h2 className='text-[2.25rem] font-semibold text-[#D4D4D4]'>Our Clients</h2>
       <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>    
       <ul className='flex flex-col items-center py-10 md:flex-row md:justify-between'>
          {ClientImgLogo.map((Client,Index)=>(
            <li key={Index}>
                <img src={Client} alt="" />
            </li>
          ))}
       </ul>
    </div>
  )
}

export default Client
