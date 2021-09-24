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
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`

const NameWrapper = styled.span`
    display: inline-block;
    span {
        display: inline-block;
        animation-name: ${hero_animation};
        animation-duration: 4s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        white-space:pre;
    }
    span:nth-child(1) {
        animation-delay: 0.2;
    }
    span:nth-child(2) {
        
    }
    span:nth-child(3) {
        
    }
    span:nth-child(4) {
        
    }
    span:nth-child(5) {
        
    }
    span:nth-child(6) {
        
    }
    span:nth-child(7) {
        
    }
    span:nth-child(8) {
        
    }

`
