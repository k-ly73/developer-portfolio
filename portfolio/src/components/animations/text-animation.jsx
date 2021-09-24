import React from 'react'
import styled, { keyframes } from 'styled-components';

export default function TextAnimation() {

    const firstNameArray = `Kevin`.split('');
    const lastNameArray = 'Ly'.split('');
    return (
        <div>
            <FirstNameWrapper>
                {firstNameArray.map((item, index)=>(
                <span key={index}>{item}</span>
            ))}
            </FirstNameWrapper>
            &nbsp;
            <LastNameWrapper>
                {lastNameArray.map((item, index)=>(
                    <span key={index}>{item}</span>
                ))}
            </LastNameWrapper>
        </div>

    )
}

const hero_animation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`

const FirstNameWrapper = styled.span`
    display: inline-block;
    span {
        display: inline-block;
        animation-name: ${hero_animation};
        animation-duration: 5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }

    span:nth-child(1) {
        animation-delay: .1s;
    }
    span:nth-child(2) {
        animation-delay: .2s;
    }
    span:nth-child(3) {
        animation-delay: .3s;
    }
    span:nth-child(4) {
        animation-delay: .4s;
    }
    span:nth-child(5) {
        animation-delay: .5s;
    }
    span:nth-child(6){
        animation-delay: .6s;
    }
`
const LastNameWrapper = styled.span`
    display: inline-block;
    span {
        display: inline-block;
        animation-name: ${hero_animation};
        animation-duration: 5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
    }

    span:nth-child(1) {
        animation-delay: .6s;
    }
    span:nth-child(2) {
        animation-delay: .7s;


`