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
          color="#6c8bff"
          roughness={0.1}
          metalness={0.6}
          distort={0.45}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

export const Hero3D = () => (
  <div className="relative h-[280px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-soft sm:h-[320px] dark:border-white/10 dark:bg-white/5">
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 2]} intensity={1.1} />
      <CoreMesh />
    </Canvas>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,140,255,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(125,140,255,0.35),transparent_60%)]" />
  </div>
)
