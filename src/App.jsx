import './styles/App.css'
import { useState } from 'react'

// function jogoDaVelha() {
  
//   var mat = new Array(3)

//   mat[0] = new Array(3)
//   mat[1] = new Array(3)
//   mat[2] = new Array(3)

//  if(mat[0][0] == mat[0][1] == mat[0][2]){

//  }else if(mat[1][0] == mat[1][1] == mat[1][2]){

//  }else if(mat[2][0] == mat[2][1] == mat[2][2]){

//  }else if(mat[0][0] == mat[1][0] == mat[2][0]){

//  }else if(mat[0][1] == mat[1][1] == mat[2][1]){

//  }else if(mat[0][2] == mat[1][2] == mat[2][2]){
  
//  }else if(mat[0][0] == mat[0][1] == mat[0][2]){

//  }else if(mat[0][0] == mat[1][1] == mat[2][2]){

//  }else if(mat[0][2] == mat[1][1] == mat[2][0]){

//  }
// }

function App() { 

  const [ game, setGame ] = useState( {
    positionOne: null,      positionTwo: null,      positionThree: null,
    positionFour: null,     positionFive: null,     positionSix: null, 
    positionSeven: null,    positionEight: null,    positionNine: null,
  })
  
  
  const jogadorX = () => {
    return 'X'
  }

  const jogadorO = () => {
    return 'O'
  }

  return (
    <div className="App">
      <h1>Jogo da Velha</h1>
      <section className='jogo'>
        <div className='areas area1' id='area1'>
          <button onClick={() => setArea1(!area1)}>
            <div className='texto'>
              {area1?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area2'>
          <button onClick={() => setArea2(!area2)}>
              <div className='texto'>
                {area2?jogadorX():jogadorO()}
              </div>
          </button>
        </div>
        <div className='areas area3'>
          <button onClick={() => setArea3(!area3)}>
            <div className='texto'>
              {area3?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area4'>
          <button onClick={() => setArea4(!area4)}>
            <div className='texto'>
              {area4?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area5'>
          <button onClick={() => setArea5(!area5)}>
            <div className='texto'>
              {area5?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area6'>
          <button onClick={() => setArea6(!area6)}>
              <div className='texto'>
              {area6?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area7'>
          <button onClick={() => setArea7(!area7)}>
            <div className='texto'>
              {area7?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area8'>
          <button onClick={() => setArea8(!area8)}>
            <div className='texto'>
              {area8?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
        <div className='areas area9'>
          <button onClick={() => setArea9(!area9)}>
            <div className='texto'>
              {area9?jogadorX():jogadorO()}
            </div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
