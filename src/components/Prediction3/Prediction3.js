import React from 'react'
import HeaderP from '../Prediction/HeaderP'
import ErreurMessage from './ErreurMessage'
import Sidebar from '../Bienvenue/Sidebar'
import Dropzone from '../Prediction/Dropzone'
import './Prediction3.css'


const Prediction3 = () => {
  return (
    <div>
        <div className='sed'>
            <Sidebar/>
        </div>
      <div className="ContainerPP">
        <HeaderP />
      <div className='sppp'>
        <span >Envoyez vos images IRM pour les analyser, permettant une identification détaillée et une classification des tumeurs mammaires.</span>
      </div>
      <div className='dropzp'>
        <ErreurMessage/>
      </div>
      <div>
        <Dropzone data1="Essayez de nouveau,merci beacoups" data2="Commencez l'analyse pour une détection et classification détaillée."/>
      </div>
      
      </div>
    </div>
  )
}

export default Prediction3