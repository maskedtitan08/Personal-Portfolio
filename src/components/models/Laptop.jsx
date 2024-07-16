"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.416, 0.183]} rotation={[-0.175, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_1.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_2.geometry}
            material={materials['Hell.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_3.geometry}
            material={materials['Black_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_4.geometry}
            material={materials['Cam.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_5.geometry}
            material={materials['Light_8_Logo_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_6.geometry}
            material={materials['Material.027']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_7.geometry}
            material={materials['Light_7_Logo_1.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_8.geometry}
            material={materials['Material.049']}
          />
        </group>
        <group position={[0, -2.018, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_1.geometry}
            material={materials['light_9_Frame.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_2.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_3.geometry}
            material={materials['Material.044']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_4.geometry}
            material={materials['Material.058']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_5.geometry}
            material={materials['Material.058']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_6.geometry}
            material={materials['Material.050']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_7.geometry}
            material={materials['Hell.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_8.geometry}
            material={materials['Black_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_9.geometry}
            material={materials['Material.052']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_10.geometry}
            material={materials['Material.051']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_11.geometry}
            material={materials['Silder.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_12.geometry}
            material={materials['Silder_2.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_13.geometry}
            material={materials['Material.064']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_14.geometry}
            material={materials['Silber_3.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_15.geometry}
            material={materials['symbole.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_16.geometry}
            material={materials['Material.057']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_17.geometry}
            material={materials['Material.056']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_18.geometry}
            material={materials['light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_19.geometry}
            material={materials['light_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_20.geometry}
            material={materials['light_3.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_21.geometry}
            material={materials['light_4.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_22.geometry}
            material={materials['light_5.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_23.geometry}
            material={materials['light_6.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_24.geometry}
            material={materials['Material.055']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane086_25.geometry}
            material={materials['Material.046']}
          />
        </group>
        <group position={[0, 1.953, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_1.geometry}
            material={materials['light_9_Frame.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_2.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_3.geometry}
            material={materials['Material.044']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_4.geometry}
            material={materials['Material.058']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_5.geometry}
            material={materials['Material.058']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_6.geometry}
            material={materials['Material.050']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_7.geometry}
            material={materials['Hell.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_8.geometry}
            material={materials['Black_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_9.geometry}
            material={materials['Material.052']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_10.geometry}
            material={materials['Material.051']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_11.geometry}
            material={materials['Silder.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_12.geometry}
            material={materials['Silder_2.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_13.geometry}
            material={materials['Material.064']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_14.geometry}
            material={materials['Silber_3.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_15.geometry}
            material={materials['symbole.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_16.geometry}
            material={materials['Material.057']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_17.geometry}
            material={materials['Material.056']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_18.geometry}
            material={materials['light.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_19.geometry}
            material={materials['light_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_20.geometry}
            material={materials['light_3.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_21.geometry}
            material={materials['light_4.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_22.geometry}
            material={materials['light_5.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_23.geometry}
            material={materials['light_6.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_24.geometry}
            material={materials['Material.055']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane056_25.geometry}
            material={materials['Material.046']}
          />
        </group>
        <group position={[0, 3.555, 0.183]} rotation={[1.571, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_1.geometry}
            material={materials['black.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_2.geometry}
            material={materials['Hell.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_3.geometry}
            material={materials['Black_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_4.geometry}
            material={materials['Cam.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_5.geometry}
            material={materials['Light_8_Logo_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_6.geometry}
            material={materials['Material.027']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_7.geometry}
            material={materials['Light_7_Logo_1.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_8.geometry}
            material={materials['Material.049']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1111111111111_1'].geometry}
          material={materials['Material.067']}
          position={[0, 0, -0.249]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058_1.geometry}
          material={materials['light_9_Frame.003']}
          position={[0, -2.018, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')