import React, {useState} from 'react';
import vector from '../assets/vectordown.png'
import './styleComponent/aboutCollapse.scss'
const AboutCollapse = ({title, description}) => {
    const [openDescription, setOpenDescription] = useState(false)
    //<i class="fa-regular fa-chevron-up"></i>
    return openDescription ? (
        <div className='aboutCard'>
            <h2 className='aboutBar'>{title}<i className="fa-solid fa-chevron-up" onClick={() =>setOpenDescription(false)}></i></h2> 
            <p>{description}</p>
        </div>
    ) : (
        <div className='aboutCard'>
            <h2 className='aboutBar'>{title}<i className="fa-solid fa-chevron-down" onClick={() => setOpenDescription(true)}></i></h2> 
        </div> 
    )
};

export default AboutCollapse;