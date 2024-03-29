import { useFrame } from "@react-three/fiber";
import React, {useMemo, useRef} from "react";
import { ShaderMaterial } from "three";

export default function Background(props) 
{
    const ref = useRef();
    const time = useRef(0)
    const loop = useRef(false)
    const ifPageRef = useRef(props.interfacePage)

    const GenerateAttributes = useMemo(() =>
    {
        if(ref.current === undefined) return;
        let randoms = new Float32Array(ref.current.geometry.attributes.position.array.length);
        console.log(randoms.length)
    }, [ref])

  const mat = new ShaderMaterial({
    extensions: {
      derivatives: "#extension GL_OES_standard_derivatives : enable",
    },
    uniforms: {
      time: { value: 0 },
      interfacePage : {value: props.interfacePage},
      
    },
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float time;
      uniform float interfacePage;

      void main() {


        float col = 1.;
        float t2 = 0.;


        float t = (time - 2.5) * .5;
        t = min(t, 1.5);

        col *= 0.4 + sin(t * vUv.x) * cos(t * .2 * vUv.x * sin((vUv.y / vUv.x) / t));
        //col *= sin(t * vUv.x) * cos(t * .2 * vUv.x * 2. * cos(vUv.y * t - 1. * .2)) / acos(vUv.x * .2);
        if(length(col) < .05) discard;
        
        //reduce brightness
        col *= .35;


        gl_FragColor = vec4(vec3(col), 1.);
      }
    `,
    wireframe: false,
  });

  useFrame((_, delta) =>
  {

    if(props.page === 0) return;

    let uniforms = ref.current.material.uniforms;

    if(uniforms.interfacePage.value != ifPageRef.current)
    {
      uniforms.interfacePage.value = ifPageRef.current;
      uniforms.interfacePage.needsUpdate = true;
    }

    if(loop.current === true)
    {
        
        time.current += delta;
        uniforms.time.value = time.current;
        uniforms.time.needsUpdate = true;
    }
    else
    {
        time.current -= delta;
        uniforms.time.value = time.current;
        uniforms.time.needsUpdate = true;
    }

    if(uniforms.time.value > 8.5)
    {
        time.current = 8.5;
        loop.current = false;
    }
    if(uniforms.time.value < 1)
    {
        time.current = 1;
        loop.current = true
    }
    
  })

  return (
    <mesh {...props} material={mat} ref = {ref}>
      <planeBufferGeometry args={[1, 1, 100, 100]} />
    </mesh>
  );
}