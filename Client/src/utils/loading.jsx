// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled, {keyframes} from 'styled-components'

// const loading = {
    // bodY {
    //     margin: 0;
    //     padding: 0;
    //     box-sizing: border-box;
    //   }
    const Container = styled.div`
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0230;`
      

      const waveAnimation = keyframes`
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    `;

    const Wave = styled.div`
    width: 5px;
    height: 100px;
    background: linear-gradient(45deg, cyan, #fff);
    margin: 10px;
    animation: ${waveAnimation} 1s linear infinite;
    border-radius: 20px;
  
    &:nth-child(2) {
    animation-delay: 0.1s;
    }
    &:nth-child(3) {
    animation-delay: 0.2s;
    }
    &:nth-child(4) {
    animation-delay: 0.3s;
    }
    &:nth-child(5) {
    animation-delay: 0.4s;
    }
    &:nth-child(6) {
    animation-delay: 0.5s;
    }
    &:nth-child(7) {
    animation-delay: 0.6s;
    }
    &:nth-child(8) {
    animation-delay: 0.7s;
    }
    &:nth-child(9) {
    animation-delay: 0.8s;
    }
    &:nth-child(10) {
    animation-delay: 0.9s;
    }
  `;

  const Loading = () => {
    return (
<Container>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  <Wave></Wave>
  </Container>
  );}


export default Loading
