import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10)+1;
}

const getRandomArray = () => {
  let arr = [];
  for (let i = 0; i<=10; i++) {
    arr.push(generateRandomNumber())
  }
  return arr
}

function App() {

  const [arrIndex, setArrIndex] = useState(0)
  const [drawnNumbers, setDrawnNumbers] = useState(getRandomArray())


  const guess = (higherOrLower) => {
    
    let successful = false;
  
    if (higherOrLower === 'lower') {
  
      successful = drawnNumbers[arrIndex + 1] <=  drawnNumbers[arrIndex];
    } else {
  
    successful = drawnNumbers[arrIndex + 1] >=  drawnNumbers[arrIndex];
    }
  
    console.log(drawnNumbers)
    console.log(successful, arrIndex, drawnNumbers[arrIndex],drawnNumbers[arrIndex+1])
  
    if (successful) {
      alert(`bravo - number was ${drawnNumbers[arrIndex +1]}`)
      setArrIndex(arrIndex+1)
  
    } else {
      alert(` alas - number was ${drawnNumbers[arrIndex +1]}`)
      setDrawnNumbers(getRandomArray())
    }
  }
  

  useEffect(() => {
      console.log('EFFECT', arrIndex)

      if (arrIndex === 8) {
        alert('YOU WON!!!');
        setDrawnNumbers(getRandomArray());
        setArrIndex(0) 
      }


  }, [arrIndex]);

  const buttonStyle = {margin:'10px', 
                       width : '70px'}

  const secondaryButtonStyle = {
                        ...buttonStyle,
                        width : '430px',
                        height : '75px'
  }


  return (
    <>
     
      <div style = {{marginBottom: '20px'}}>
          {Array.from({ length: 10 }, (_, index) => (
            <Button key={index} variant={index+1 === drawnNumbers[arrIndex] ? 'info'  :  'primary' } style={buttonStyle}>{index+1}</Button>

          ))}
      </div>  

      <Button variant = 'success' onClick={() => guess('higher')} style={secondaryButtonStyle}>
         higher
      </Button>
      <Button variant = 'danger' onClick={() => guess('lower')} style={secondaryButtonStyle}>
         lower
      </Button>
  
    </>
  )
}

export default App
