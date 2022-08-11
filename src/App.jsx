
import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './components/earth';
const CanvasContainer = styled.div`
width  :  100%;
height : 100%;
background: #03030b;
`;

function App() {
  return (
    <div style={{background:"#03030b", width: "fit-content"}}>
   <h1 style={{color:"white"}}>Hwll</h1>
    <Canvas>
      <Suspense fallback={null}>
          <Earth/>
      </Suspense>
    </Canvas>
<h1>Hllo</h1>
  
  </div>);
}

export default App;
