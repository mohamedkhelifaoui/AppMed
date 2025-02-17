import React from 'react'
import HeaderP from '../Prediction/HeaderP'
import SuccessMessage from './SuccessMessage'
import Sidebar from '../Bienvenue/Sidebar'
import TumorClassification from './TumorClassification'


const Prediction2 = () => {
  return (
    <div>
        <div className='sed'>
            <Sidebar/>
        </div>
      <div className="ContainerP">
        <HeaderP />
      <div className='spp'>
        <span >Envoyez vos images IRM pour les analyser, permettant une identification détaillée et une classification des tumeurs mammaires.</span>
      </div>
      <div className='dropz'>
        <SuccessMessage/>
      </div>
      <div>
        <TumorClassification/>
      </div>
      
      </div> 
    </div>
  )
}

export default Prediction2