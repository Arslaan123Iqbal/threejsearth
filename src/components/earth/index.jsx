import * as THREE from 'three';
import { OrbitControls, Stars } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import EarthClouds from '../../assets/textures/8k_earth_clouds.jpg'
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthNight from '../../assets/textures/8k_earth_nightmap.jpg'
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg'
import { useRef } from 'react';
const Earth = () => {
    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader,
        [
            EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds
        ]);

    const earthRef = useRef();
    const cloudRef = useRef();

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapsedTime / 6;
        cloudRef.current.rotation.y = elapsedTime / 6; 
    })
  return (
    <>
   
    <pointLight color="#f6f3ea" position={[2,0,5]} intensity={1.2}/>
    <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true}/>
    <mesh ref={cloudRef} >
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial 
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}/>
    </mesh>
    <mesh ref={earthRef}>
        
        <sphereGeometry args={[1, 32, 32 ]}/>
        <meshPhongMaterial specularMap={specularMap}/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls enableZoom={true} 
                       enablePan={true} 
                       enableRotate={true}  
                       zoomSpeed={0.6}
                       panSpeed={0.5}
                       rotateSpeed={0.5}/>
    </mesh>
    </>
  )
}

export default Earth