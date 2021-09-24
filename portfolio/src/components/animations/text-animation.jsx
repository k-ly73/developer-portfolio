import React from 'react'
import styled, { keyframes } from 'styled-components';

export default function NameAnimation() {

    const nameArray = `Kevin Ly`.split('');

    return (
        <div>
            <NameWrapper>
                {nameArray.map((item, index)=>(
                <span key={index}>{item}</span>
            ))}
            </NameWrapper>
        </div>

    )
}

const hero_animation = keyframes`
    from {
        width: 0;
    }
    to {
        width: 0.7em; 
    }
`

const NameWrapper = styled.span`
    
    span {
        display: inline-block;
        animation-name: ${hero_animation};
        animation-duration: 3s;
        animation-timing-function: steps(44);
        animation-fill-mode: both;
        animation-direction: normal;
        animation-iteration-count: infinite;
        
    }
    span:nth-child(1) {
        animation-delay: 0.1s;
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.3s;
    }
    span:nth-child(4) {
        animation-delay: 0.4s;
    }
    span:nth-child(5) {
        animation-delay: 0.5s;
    }
    span:nth-child(6) {
        animation-delay: 0.6s;
    }
    span:nth-child(7) {
        animation-delay: 0.7s;
    }
    span:nth-child(8) {
        animation-delay: 0.8s;
    }

`
