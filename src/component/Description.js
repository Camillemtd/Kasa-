import React, {useState} from 'react';
import './styleComponent/description.scss'

const Description = ({description}) => {
    const [openDescription, setOpenDescription] = useState(true)
    return openDescription ? (
        <div className='descriptionWrapper'>
            <h2 className='descriptionTitle'>Description <i className="fa-solid fa-chevron-up" onClick={() =>setOpenDescription(false)}/></h2>
            <p className='description'>{description}</p>
        </div>
    ) : (
        <div className='descriptionWrapper'>
            <h2 className='descriptionTitle'>Description <i className="fa-solid fa-chevron-down" onClick={() =>setOpenDescription(true)}/></h2>
        </div>
    )
};

export default Description;