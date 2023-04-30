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

  const [ area1, setArea1 ] = useState(true)
  const [ area2, setArea2 ] = useState(true)
  const [ area3, setArea3 ] = useState(true)
  const [ area4, setArea4 ] = useState(true)
  const [ area5, setArea5 ] = useState(true)
  const [ area6, setArea6 ] = useState(true)
  const [ area7, setArea7 ] = useState(true)
  const [ area8, setArea8 ] = useState(true)
  const [ area9, setArea9 ] = useState(true)
  
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
        <div className='areas area1'>
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
          <div className='texto'></div>
        </div>
        <div className='areas area5'>
          <div className='texto'></div>
        </div>
        <div className='areas area6'>
          <div className='texto'></div>
        </div>
        <div className='areas area7'>
          <div className='texto'></div>
        </div>
        <div className='areas area8'>
          <div className='texto'></div>
        </div>
        <div className='areas area9'>
          <div className='texto'></div>
        </div>
      </section>
    </div>
  )
}

export default App
