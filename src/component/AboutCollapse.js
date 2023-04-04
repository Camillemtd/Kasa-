import React, {useState} from 'react';
import './styleComponent/aboutCollapse.scss'
const AboutCollapse = ({title, description}) => {
    const [openDescription, setOpenDescription] = useState(false)
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