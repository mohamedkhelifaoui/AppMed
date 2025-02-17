import React from 'react'
import Sidebar from '../../Bienvenue/Sidebar'
import './Historique.css'
import HeaderC from '../HeaderC/HeaderC'
import TumorClassification from '../../Prediction2/TumorClassification'
import pic from '../../../Assets/keyboard_arrow_down.png';


const Historique = () => {
  return (
    <div>
        <Sidebar/>
        <div className='seconderight'>
            <HeaderC/>
            <div className="back-linkK">
                <a href="/consultations">
                    <img src={pic} alt="#" />
                    Revenir
                </a>
            </div>
            <TumorClassification/>


        </div>
    </div>
  )
}

export default Historique