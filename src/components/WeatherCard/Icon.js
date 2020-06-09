import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const Icon = styled.img`
        max-width: 40%;
        margin: 0 auto;
    `

    return ( 
        <Icon src="//icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png" alt="Weather Icon"/>
     );
}
 
export default Icon;