import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

const CoreMesh = () => {
  const mesh = useRef()

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.25
    mesh.current.rotation.y += delta * 0.35
  })

  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.8}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#34f7a1"
          emissiveIntensity={0.35}
          roughness={0.12}
          metalness={0.7}
          distort={0.45}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

export const Hero3D = () => (
  <div className="relative h-[280px] w-full overflow-hidden rounded-3xl border border-ink-200/60 bg-white/80 shadow-soft sm:h-[320px] dark:border-white/10 dark:bg-white/5">
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 4, 2]} intensity={1.2} />
      <pointLight position={[-3, -2, 2]} intensity={1.4} color="#34f7a1" />
      <CoreMesh />
    </Canvas>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(52,247,161,0.35),transparent_60%)]" />
  </div>
)
