import React from 'react'
import HeaderP from './HeaderP'
import './ContainerP.css'
import Dropzone from './Dropzone'
const ContainerP = () => {
  return (
<div className="ContainerP">
      <HeaderP />
      <div className='spp'>
        <span >Envoyez vos images IRM pour les analyser, permettant une identification détaillée et une classification des tumeurs mammaires.</span>

      </div>
      <div className='dropz'>
        <Dropzone data1='Obtenez un résultat instantané maintenant' data2="Commencez l'analyse pour une détection et classification détaillée."/>
      </div>
      
    </div>  )
}

export default ContainerP