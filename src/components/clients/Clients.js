import React from 'react'
import './clients.css'

import clientOne from "../../img/Dashclick.png";
import clientTwo from "../../img/Deepsync3.png";
import clientThree from "../../img/NG-greens1.png";
import clientFour from "../../img/Exclv1.png";

export default function Clients() {
  return (
    <>
    <div className='clientsTitle'>Our Clients..</div>
        <div className='clientsSection'>
        <div className='clientsMove'>
        <div className='imagesSection'><img src={clientThree} alt="" className="client-img3" /></div>
            <div className='imagesSection'><img src={clientOne} alt="" className="client-img" /></div>
            <div className='imagesSection'><img src={clientTwo} alt="" className="client-img2" /></div>
            <div className='imagesSection'><h1 className='client4'>Exclv.</h1></div>
            {/* <div className='imagesSection'><h1 className='client5'>Roof Commander</h1></div> */}
            </div>
            {/* <div className='imagesSection'><img src={clientFour} alt="" className="client-img2" /></div> */}
        </div>
    </>
  )
}
