import { useFrame, extend, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


extend({ OrbitControls })

export default function App() {
  const { camera, gl } = useThree()
  const cubeRef = useRef()
  const groupRef = useRef()

  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotChange = async (event) => {
    const robotName = event.target.value
    if (robotName === 'Select Robot') {
      setSelectedRobot(null)
    } else if (robotName === 'Iontec KR50 R 2500') {
      const robotData = await import('./robots/kr50r2500.jsx')
      setSelectedRobot(robotData.default)
    }
  }


  // useFrame((state, delta) => {


  //   // groupRef.current.rotation.y += delta
  // })

  return <>

    {/* Orbit Controls */}
    <orbitControls args={[camera, gl.domElement]} />
    <gridHelper args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} />
    <axesHelper args={[1, 2]} />

    {/* General Lighting */}
    <directionalLight position={[1, 2, 3]} />
    <ambientLight intensity={0.3} />

    {/* Floor */}
    {/* <mesh position-z={0} scale={10}>
      <planeGeometry/>
      <meshStandardMaterial color='whitesmoke'/>
    </mesh> */}


    {/* Robot */}



  </>
}
