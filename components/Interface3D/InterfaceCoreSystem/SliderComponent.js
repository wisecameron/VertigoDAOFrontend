import { useMemo, useRef } from 'react'
import { fragment, vertex } from './SliderShaders';
import { useThree, useLoader, useFrame } from '@react-three/fiber';
import { ShaderMaterial, PlaneGeometry, Mesh, Vector3, TextureLoader, Vector2, Raycaster, MeshBasicMaterial, SphereGeometry } from 'three';
import { useEffect } from 'react';
import red from '../../../assets/red.png'
import green from '../../../assets/green.png'
import { lerp } from 'three/src/math/MathUtils';
import { useState } from 'react';

import hub from '../../../assets/hubimg.png'
import game from '../../../assets/gameimg.png'
import defi from '../../../assets/defiimg.png'
import home from '../../../assets/homeimg.png'

export default function SliderComponent(props)
{
    const scaleChange = useRef(0)
    const {camera} = useThree()

    const [meshes, setMeshes] = useState(0)
    const [allPoints, setPoints] =  useState(0)
    const [hovered, setHovered] =  useState(false);

    const hubTex = useLoader(TextureLoader, hub);
    const gameTex = useLoader(TextureLoader, game);
    const defiTex = useLoader(TextureLoader, defi);
    const homeTex = useLoader(TextureLoader, home);

    const tex2 = useLoader(TextureLoader, green);
    const tex3 = useLoader(TextureLoader, red)

    const r1 = useRef()
    const r2 = useRef()
    const r3 = useRef()
    const r4 = useRef()

    const grref = useRef(0)
    const mousePointRef = useRef();
    const testMeshRef = useRef();
    const mouse = useRef(new Vector2(0,0));
    const originalPositions = useRef([]);
    const page = useRef(-1)

    const dockState = useRef(false)

    const DISTANCE_BACK = -28;
    const DISTANCE_BETWEEN = 10.085;
    const intensity = 4
    const HEIGHT = 60;
    const STARTX = -9.7 - (DISTANCE_BETWEEN * .5);


    let testV2 = useMemo(() =>
    {
        return new Vector2()
    }, [])

    let testV22 = useMemo(() =>
    {
        return new Vector2()
    }, [])

    const geometryThrowaway = useMemo(() =>
    {
        return new PlaneGeometry(10, 14, 1,1)
    },[]);

    const raycaster = useMemo(() =>
    {
        return new Raycaster();
    },[]);

    const invisibleRaycastWallMaterial = new MeshBasicMaterial({color: "white", transparent: true, opacity: 0});

    const HandleSlideClick = (clickedPage) =>
    {

        if(clickedPage === 0 && dockState.current === false)
        {
            window.location.href = '/'
        }


        Dock();
        props.setInterfacePage(  (dockState.current === false) ? -1 : clickedPage  )
    }

    const Dock = () =>
    {
        props.setDocked(!dockState.current)
        dockState.current = !dockState.current
    }

    const CreatePoints = () => {
        if (meshes === 0) return [];
      
        let points = [];
        let x, y;
        let count = 0;
        let refref;
        originalPositions.current = [];
      
        // Loop for each slider
        for (let i = 0; i < 4; i++) {
          if (i === 0) refref = r1;
          if (i === 1) refref = r2;
          if (i === 2) refref = r3;
          if(i === 3) refref = r4;
      
          let len = refref.current.geometry.attributes.position.array.length;
          let objectPosition = refref.current?.position;
      
          if (len && objectPosition) {
            // Loop for each vertex in the slider
            for (let j = 0; j < len; j += 3) {
              let PointMaterial = new MeshBasicMaterial({ color: "green" });
              let PointGeometry = new SphereGeometry(0);
      
              x = refref.current.geometry.attributes.position.array[j] + objectPosition.x;
              y = refref.current.geometry.attributes.position.array[j + 1] + objectPosition.y;
      
              points.push(
                <mesh
                  position={[x, y, DISTANCE_BACK]}
                  geometry={PointGeometry}
                  material={PointMaterial}
                  key={count}
                />
              );
      
              count += 1;
              originalPositions.current.push(new Vector2(x, y));
            }
          }
        }
      
        return points;
      };


      //1536 718
    const CreateSlides = () =>
    {
        let meshesArray = []
        
        let scaleX = window.innerWidth / 1536;
        let scaleY = window.innerHeight / 718;
        let x = STARTX * scaleX;
        let y = HEIGHT;
        let tex;


        for(let i = 0; i < 4; i++)
        {
            let refref;

            if(i == 0) 
            {
                refref = r1;
                tex = homeTex
            }
            else if(i == 1)
            {
                refref = r2
                tex = defiTex;
            }
            else if(i == 2)
            {
                refref = r3;
                tex = hubTex;
            }
            else
            {
                refref = r4;
                tex = gameTex;
            }


            let mat = new ShaderMaterial({
                extensions: 
                {
                    derivatives: "#extension GL_OES_standard_derivatives : enable"
                },
                uniforms: {
                    tex : { value: tex },
                    hovered: {value : 0},
                    time: {value: 0}
                },
                fragmentShader: fragment,
                vertexShader: vertex,
                wireframe: false,
            });

            meshesArray.push(
                <mesh 
                position = {[x,y,DISTANCE_BACK]} 
                key = {i} 
                ref = {refref} 
                onPointerEnter={() => {HandleHoverEvent(i)}}
                onPointerLeave={() => {HandleHoverLeave(i)}}
                onClick = {() => {HandleSlideClick(i)}}>
                    <primitive object={mat} attach="material" />
                    <planeBufferGeometry args = {[10 * scaleX, 12 * scaleY]}/>
                </mesh>
            )

            x += DISTANCE_BETWEEN * scaleX;

        }

        return meshesArray
    }


    useEffect(() =>
    {

        document.body.style.cursor = (hovered) ? 'pointer' : 'default';

        const handleMove = (e) =>
        {
            mouse.current.x = ((e.clientX / window.innerWidth) * 2) - 1;
            mouse.current.y = ( -(e.clientY / window.innerHeight) * 2) + 1;

            raycaster.setFromCamera(mouse.current, camera);

            const intersects = raycaster.intersectObjects([testMeshRef.current])

            if(intersects.length > 0)
            {
                let point = intersects[0].point;
                //normalize to be equivalent to points distance
                mousePointRef.current.position.x = point.x
                mousePointRef.current.position.y = point.y
            }
        }

        const handleResize = () =>
        {
            scaleChange.current = 2;
        }

        window.addEventListener('mousemove',handleMove, false);
        window.addEventListener('resize', handleResize, false)

        return() =>
        {
            window.removeEventListener('mousemove', handleMove, false);
            window.removeEventListener('resize', handleResize, false);

        }
    }, [hovered])

    function HandleHoverEvent(mesh)
    {
        let refref;
        if(mesh == 0) refref = r1;
        else if(mesh == 1) refref = r2;
        else if(mesh === 2) refref = r3;
        else if(mesh === 3) refref = r4;

        refref.current.material.uniforms.hovered.value = 1;
        refref.current.material.uniforms.hovered.needsUpdate = true;
    }
    
    function HandleHoverLeave(mesh)
    {
        let refref;
        if(mesh == 0) refref = r1;
        else if(mesh == 1) refref = r2;
        else if(mesh === 2) refref = r3;
        else if(mesh === 3) refref = r4;

        refref.current.material.uniforms.hovered.value = 0;
        refref.current.material.uniforms.hovered.needsUpdate = true;
    }

    useFrame((_, delta) =>
    {
        if(meshes === 0 || scaleChange.current === 2)
        {
            scaleChange.current -= 1;
            setMeshes(CreateSlides())
            return;
        } 
        if(allPoints === 0 || scaleChange.current === 1)
        {
            scaleChange.current = 0;
            setPoints(CreatePoints())
            return;
        }
 

        //console.log(allPoints)

        let l = grref.current.children.length;
        let index = 0;

        //Loop until all points touched
        for(let i = 0; i < l; i++)
        {
            //determines which mesh to choose
            const mesh = Math.floor(i / 4)

            //get position for current point
            let originalPosition = originalPositions.current[i];

            //set distance between mouse and original point pos, normalized to real canvas space
            testV2.set( originalPosition.x - mousePointRef.current.position.x, originalPosition.y - mousePointRef.current.position.y );

            let distance = testV2.length() * 4;
            let forceFactor = intensity/Math.max(distance, .2)
            
            //position to go 
            testV22 = originalPosition.clone().sub(testV2.normalize().multiplyScalar(-distance * 3 * forceFactor));

            //compute new position
            let pX = lerp(originalPosition.x, testV22.x, 0.1 )
            let pY = lerp(originalPosition.y, testV22.y, 0.1)

            //bring point to new position
            grref.current.children[i].position.x = pX
            grref.current.children[i].position.y = pY

            //choose mesh to update based on "mesh"
            let refref;
            if(mesh == 0) refref = r1;
            else if(mesh == 1) refref = r2;
            else if(mesh === 2) refref = r3;
            else if(mesh === 3) refref = r4;
            
            const position = refref.current.geometry.attributes.position;
            const pointWorldPosition = new Vector3();
            grref.current.children[i].getWorldPosition(pointWorldPosition);
            const pointLocalPosition = refref.current.worldToLocal(pointWorldPosition.clone());
    
            position.array[index * 3] = pointLocalPosition.x;
            position.array[(index * 3) + 1] = pointLocalPosition.y;
            position.array[(index * 3) + 2] = pointLocalPosition.z;
    
            refref.current.geometry.attributes.position.needsUpdate = true;
            refref.current.geometry.computeVertexNormals();

            if(index == 3) index = 0;
            else index += 1;
        }
    })


    return(
        <>
            <group ref = {grref}>
                {allPoints}
            </group>
            
            <group 
            onPointerOver={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}>
                {meshes}
            </group>

            <mesh ref = {mousePointRef} geometry={geometryThrowaway} scale = {0} position = {[0,0, -25]} >
                <meshBasicMaterial map = {tex2} />
            </mesh> 
            <mesh ref = {testMeshRef} geometry={geometryThrowaway} material = { invisibleRaycastWallMaterial } scale = {100}  position = {[0, 0, -25]}/>
        </>
    )

}

