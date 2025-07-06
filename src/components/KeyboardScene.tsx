'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'


export function KeyboardModel() {
  const { scene } = useGLTF('/models/keyboard-fixed.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const originalMaterial = mesh.material

        if (Array.isArray(originalMaterial)) {
          mesh.material = originalMaterial.map((mat) => {
            const cloned = mat.clone() as THREE.MeshStandardMaterial
            cloned.emissive = new THREE.Color('#00ff95') // undead green
            cloned.emissiveIntensity = 0.5
            cloned.transparent = true
            cloned.opacity = 0.012
            return cloned
          })
        } else {
          const mat = originalMaterial.clone() as THREE.MeshStandardMaterial
          mat.emissive = new THREE.Color('#00ff95')
          mat.emissiveIntensity = 0.5
          mat.transparent = true
          mat.opacity = 0.012
          mesh.material = mat
        }
      }
    })
  }, [scene])

 // 💡 Add flicker
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const material = mesh.material as THREE.MeshStandardMaterial
        if (material.emissiveIntensity !== undefined) {
          material.emissiveIntensity = 0.4 + 0.1 * Math.sin(t * 2)
        }
      }
    })
  })


  return (
    <primitive
      object={scene}
      scale={18}
      position={[0, -9.2, -1.2]}
      rotation={[-Math.PI / 3.5, Math.PI, 0]}
    />
  )
}

export default function KeyboardScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas
  camera={{ position: [0, 7.5, 5.5], fov: 45 }}
  gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
  >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 2, 2]} intensity={0.7} />
        <pointLight position={[0, 3, 3]} intensity={2} color="#00ff95" />
        <Suspense fallback={null}>
          <KeyboardModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
