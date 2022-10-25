import React, {useContext} from 'react'
import './clients.css'

import clientOne from "../../img/Dashclick.png";
import clientTwo from "../../img/Deepsync3.png";
import clientThree from "../../img/NG-greens1.png";
import clientFour from "../../img/Exclv1.png";

import { ThemeContext } from '../../context';


export default function Clients() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <div className='clientsTitle'>Our Clients..</div>
        <div className='clientsSection'>
        <div className='clientsMove'>
        {/* <div className='clientBoxOne'> */}
        <div className='imagesSection'><img src={clientThree} alt="" className="client-img3" /></div>
        <div className='imagesSection'><h1 className='client6' style={darkMode ? {} : {color: 'black'}}>Austin D.</h1></div>
            <div className='imagesSection'><img src={clientOne} alt="" className="client-img" /></div>
            {/* <div className='clientBoxTwo'> */}
            <div className='imagesSection'><img src={clientTwo} alt="" className="client-img2" /></div>
            <div className='imagesSection'><h1 className='client4'>Exclv.</h1></div>
            <div className='imagesSection'><h1 className='client5' style={darkMode ? {} : {color: 'black'}}>Fox Marin</h1></div>
            {/* </div> */}
            </div>
            {/* <div className='imagesSection'><img src={clientFour} alt="" className="client-img2" /></div> */}
        </div>
    </>
  )
}
