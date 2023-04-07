// CustomCamera.jsx
import * as THREE from "three"
import { useEffect } from "react"
import { useThree } from "@react-three/fiber"

const CustomCamera = () => {
  const { set, size } = useThree()

  useEffect(() => {
    const aspect = size.width / size.height
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
    camera.position.set(3, -3, 1.5)
    camera.up.set(0, 0, 1)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()

    set({ camera })
  }, [set, size])

  return null
};

export default CustomCamera;