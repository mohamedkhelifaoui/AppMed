import React from 'react'
import HeaderC from '../HeaderC/HeaderC'
import './ContainerC.css'
import PredictionsTable from '../Table/PredictionsTable'

const ContainerC = () => {


  
  return (
<div className="ContainerC">
      <HeaderC />
      <div className='sppp'>
        <span >Suivez l'évolution de vos prédictions précédentes pour mieux comprendre vos résultats.</span>

      </div>
      <div>
        <PredictionsTable/>
      </div>
      
      
    </div>  )
}

export default ContainerC