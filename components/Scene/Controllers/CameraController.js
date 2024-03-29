import { useThree, useFrame } from "@react-three/fiber";
import {useState, useMemo, useRef} from 'react'
import { Vector3 } from "three";
import { useScroll } from "@react-three/drei";

export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t);
}

export default function CameraController(props)
{
  const scroll = useScroll()
  const {camera, gl} = useThree();

  const onLoad = useRef(false)
  const currentLookAt = useRef(new Vector3(0,0,0));
  const zeroVector = useRef(new Vector3(0,0,0));
  const currentSegment = useRef(0);
  const startingPosition = useRef(new Vector3());
  const animation = useRef(0);
  const animation2 = useRef(160);
  const labm2 = new Vector3(4900,1500,-8500);
  const bm2 = new Vector3(0, 0, 0);
  const exploded = useRef(false);
  const shouldLerp = useRef(false);
  const animationResetLerp = useRef(0);

  const posBenchMarks = useMemo(() => [
    new Vector3(300,1300,1400), //0
    new Vector3(-2020, 3000, 5200), //1
    new Vector3(0, 20000, 18500), //2
    new Vector3(0, 22200, 22500), //3
    new Vector3(-1500, 2200, 4100), //4
    new Vector3(-240, 560, -300), //6
    new Vector3(0, 0, 0) //6
  ], []);

  const CinematicPaths = [
    [posBenchMarks[4], new Vector3(2000, 2000, 4000)]
  ]


  let offset;
  let ev;

  let pA, pB;

  useFrame((_, delta) =>
  { 
    //console.log(camera.userData)

    //1: get current offset
    offset = scroll.offset;
    if(offset > 1) offset = 0;

    //could reset
    if(currentSegment.current < 3 && (currentLookAt.current.x != 0 || currentLookAt.current.y != 0 || currentLookAt.current.z != 0))
    {
      camera.lookAt(0,0,0)
      currentLookAt.current = new Vector3(0,0,0);

    }


    /***********************************
                  SCENE 1 - CITY INTRO
    ************************************/
    if(offset < 0.16)
    {
      //create initial state
      if(currentSegment.current != 0)
      {
        currentSegment.current = 0;
        animation.current = 0;
        startingPosition.current = camera.position.clone();
      }

      //closing animation
      pA = camera.position.x + camera.position.y  + camera.position.z
      if(animation.current < 160)
      {
        animation.current += delta * 50;
        ev = easeInOutQuad(animation.current / 160);

        camera.position.lerpVectors(startingPosition.current, posBenchMarks[0], ev);
      }

      return;
    }

    /***********************************
                  SCENE 2 - PLANET SPIN
    ************************************/
    else if(offset < 0.34)
    {
      //initial state
      if(currentSegment.current != 1) 
      {
        currentSegment.current = 1;
        animation.current = 0;
        startingPosition.current = camera.position.clone();
      }


      //opening animation
      pA = camera.position.x + camera.position.y  + camera.position.z
      if(animation.current < 160)
      {
        animation.current += delta * 60;
        ev = easeInOutQuad(animation.current / 160);

        camera.position.lerpVectors(startingPosition.current, posBenchMarks[1], ev)
      }


    }

    /***********************************
                  SCENE 3 - ZOOMOUT
    ************************************/
    else if(offset < .52)
    {
      if(currentSegment.current != 2)
      {
        currentSegment.current = 2;
        animation.current = 0;
        startingPosition.current = camera.position.clone();
      }
  
      if(animation.current < 160)
      {
        animation.current += delta * 60;
        ev = easeInOutQuad(animation.current / 160);
  
        camera.position.lerpVectors(startingPosition.current, posBenchMarks[2], ev)
      }

    }

    /***********************************
                  SCENE 4 - EXPLOSION
    ************************************/

    else if(offset < .70)
    {
      if(currentSegment.current != 3)
      {
        currentSegment.current = 3;
        animation.current = 0;
        animation2.current = 0;
        startingPosition.current = camera.position.clone();;
      }
      if(animation.current < 3.5 && !exploded.current)
      {
        animation.current += delta;
      }
      else
      {
        if(!exploded.current) exploded.current = true;
        if(animation.current < 160)
        {
          animation.current += delta * 60;
          ev = easeInOutQuad(animation.current / 160);
          camera.position.lerpVectors(startingPosition.current, posBenchMarks[3], ev);
        }
        if(animation2.current < 160)
        {
          animation2.current += delta * 30;
          ev = easeInOutQuad(animation2.current / 160);
          const lerped = labm2.lerpVectors(labm2, bm2, ev);
          camera.lookAt(lerped);
          currentLookAt.current = lerped;
        }
      }
    }
    /***********************************
                  SCENE 5 - EVENT HORIZON
    ************************************/
    else if(offset < .88) //.44 lim
    {
      //HANDLE INIT
      if(currentSegment.current != 4)
      {
        if(currentSegment.current > 4)
        {
          shouldLerp.current = false;
        }
        else
        {
          shouldLerp.current = true;
        }

        currentSegment.current = 4;
        animation.current = 0;
        animation2.current = 0;
        startingPosition.current = camera.position.clone();
        
      }

      //WARP IN AND OUT
      if(animation.current < 160)
      {
        animation.current += delta * 50;
        ev = easeInOutQuad(animation.current / 160);
        camera.position.lerpVectors(startingPosition.current, posBenchMarks[4], ev);

        if(shouldLerp.current)
        {
          const lerped = labm2.lerpVectors(bm2, labm2, ev);
          camera.lookAt(lerped);
          currentLookAt.current = lerped;
        }

      }
    }

    else
    {
      //HANDLE INIT
      if(currentSegment.current != 5)
      {
        currentSegment.current = 5;
        animation.current = 0;
        animation2.current = 0;
        startingPosition.current = camera.position.clone();
      }

      //WARP IN AND OUT
      if(animation.current < 160)
      {
        animation.current += delta * 50;
        ev = easeInOutQuad(animation.current / 160);
        camera.position.lerpVectors(startingPosition.current, posBenchMarks[5], ev);

      }
      camera.position.z -= delta * 300;
    }

  })

  if(!onLoad.current)
  {
    onLoad.current = true;
    camera.position.set(300,1300,1400);
    camera.far = 100000;
    camera.lookAt(0,0,0);
    gl.toneMappingExposure = 1.75;
  }


  camera.updateProjectionMatrix();



  return null;
}
