import { useRef, useMemo, useState } from "react";
import {useFrame} from '@react-three/fiber'
import { getPoint2 } from "../Fireworks/Fireworks2";
import { Matrix4, Vector3, TextureLoader, Color } from "three";
import { CloudMaterial2 } from "../../Roadmap2/Scene/Materials/CloudMaterial";
import { useEffect } from "react";



export default function Atmosphere(props) 
{
  const ref = useRef();
  const timer = useRef();

  const sphereCenter = useMemo(() => new Vector3(0,0,0));
  const tempVec = useMemo(() => new Vector3(0,0,0));
  const tempMatrix = useMemo(() => new Matrix4());

  const Loader = new TextureLoader();
  const material = CloudMaterial2(Loader);

  const sphereRadius = 250;

  const positions = useMemo(() => {
    let map = [];
    let x, y, z;
    let radius, theta, phi;

    let t = props.total;

    if(props.graphics === 1)
    {
      t = 0
    }
    if(props.graphics === 2)
    {
      t *= .5;
    }

    for (let i = 0; i < props.total; i++) {
      [x, y, z] = getPoint2();

      radius = sphereRadius + Math.random() * 1;
      theta = Math.random() * Math.PI * 2;
      phi = Math.acos(2 * Math.random() - 1);

      map.push(
        new Vector3(
          x + radius * Math.sin(phi) * Math.cos(theta),
          y + radius * Math.sin(phi) * Math.sin(theta),
          z + radius * Math.cos(phi)
        )
      );
    }

    return map;
  }, [props.total, sphereRadius, props.graphics]);

  useFrame((_, delta) =>
  {
    if(props.vis && props.graphics > 1)
    {
      if(!ref.current.visible)
      {
        ref.current.visible = true;
        timer.current = 0;
      }

      if(timer.current < 2.8)
      {
        timer.current += delta;
      }
      else if(ref.current.material.opacity < .4)
      {
        ref.current.material.opacity += delta * .4;
      }
    }
    else
    {
      if(ref.current.material.opacity > 0)
      {
        ref.current.material.opacity -= delta * 1;
      }
      else if(ref.current.visible)
      {
        ref.current.visible = false;
      }
    }


    ref.current.rotation.x += delta * .06;
    ref.current.rotation.z += delta * .04;
  })

  useEffect(() => {
    positions.forEach((position, i) => {
      tempMatrix.lookAt(position, sphereCenter, tempVec.set(0, 1, 0));
      tempMatrix.setPosition(position);
      ref.current.setMatrixAt(i, tempMatrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [positions, sphereCenter]);

  return (
    <>

    <instancedMesh scale={5.85} ref={ref} args={[null, null, props.total]} position={[3500,1500,-7500]} material = {material} visible = {false}>
      <planeGeometry args={[100, 100]} />
    </instancedMesh>
    </>
  );
}
