import React from 'react';
import './styleComponent/tagLogement.scss'
const TagLogement = ({tag}) => {
    return (
        <div className='tagWrapper'>
            {tag.map((e,index) => {
                return(
                    <p key={index}>{e}</p>
                )
            })}
        </div>
    );
};

export default TagLogement;