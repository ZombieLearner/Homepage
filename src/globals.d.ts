import { JSX } from 'react'
import { Object3DNode } from '@react-three/fiber'
import { AmbientLight } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: Object3DNode<AmbientLight, typeof AmbientLight>
    }
  }
}
