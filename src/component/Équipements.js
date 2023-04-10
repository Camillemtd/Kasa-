import React, { useState } from 'react';
import './styleComponent/equipements.scss'

const Équipements = ({equipments}) => {
    
    const [openÉquipements, setOpenÉquipements] = useState(false)
    return openÉquipements ? (
        <div className='equipmentWrapper'>
            <h2 className='equipmentTitle'>Équipements <i className="fa-solid fa-chevron-up" onClick={() =>setOpenÉquipements(false)}/> </h2>
            <ul className='equipmentList'>
                {equipments.map( (e,index) => {
                    return(
                        <li key={index}>{e}</li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className='equipmentWrapper'>
            <h2 className='equipmentTitle'>Équipements <i className="fa-solid fa-chevron-down" onClick={() => setOpenÉquipements(true)}/> </h2>
        </div>
    )
};

export default Équipements;