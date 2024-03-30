<div align="center">
  <a href="#">
  	<img src="https://giphy.com/gifs/jhuU2BQsGsbtmM1Mda" alt="project logo" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>VertigoDAO Frontend [vertigodao.com]</b>
  </p>
  <p>
    <i>Resource-packed Website Built With React/@react-three/fiber/Web3.js!</i>
    <br/> <br/>

    This website hosts VertigoDAO, a Web3 project that aimed to 
    make DeFi more accessible by allowing users to earn tokens by completing 
    company and community-supplied tasks.  It leverages scroll-based 
    text and scene animations (@react-three/drei ScrollControls), and is essentially composed of numerous distinct 
    three.js scenes, which makes it a great resource for learning a variety of different techniques.

  <br/><br/>

  Feel free to connect with me on linkedin! https://www.linkedin.com/in/cameron-warnick-64a25222a/
     
  </p>
  <p>

[![Build Status](https://travis-ci.com/wisecameron/VertigoDAOFrontend.svg?branch=master)](https://travis-ci.com/wisecameron/VertigoDAOFrontend)
[![NPM version](https://img.shields.io/npm/v/VertigoDAOFrontend?style=flat-square)](https://img.shields.io/npm/v/VertigoDAOFrontend?style=flat-square)
[![Package size](https://img.shields.io/bundlephobia/min/VertigoDAOFrontend)](https://img.shields.io/bundlephobia/min/VertigoDAOFrontend)
[![Dependencies](https://img.shields.io/david/wisecameron/VertigoDAOFrontend.svg?style=popout-square)](https://david-dm.org/wisecameron/VertigoDAOFrontend)
[![devDependencies Status](https://david-dm.org/wisecameron/VertigoDAOFrontend/dev-status.svg?style=flat-square)](https://david-dm.org/wisecameron/VertigoDAOFrontend?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/twitter/follow/luctstt.svg?label=Follow&style=social)](https://twitter.com/luctstt)

  </p>
</div>

---

**Content**

* [Highlights](##features)
* [Install](##install)
* [Usage](##usage)
* [Examples](##examples)
* [Documentation](##documentation)
* [Shoutouts](##shoutouts)

## Highlights ✨
* Integrated Web3 dashboard and shop system
* Countless interesting three.js effects and systems
* Significant coverage of the React toolset
* Interesting mini-projects including "Roadmap," an infinite highway with flying vehicles.
* Custom scroll-based animation handling that manages three.js scenes and html content.
* Great reference for space-themed projects.

## Install 🐙
Feel free to download and use the code as you wish, you don't need to credit me 
if you use any of the systems, although I would certainly not mind.  

## Usage 💡
Obviously, this repository will not produce a working website.  Unfortunately, I am not able to 
post the entire project.  However, this is also a good thing.  You can visit vertigodao.com to find 
specific effects or scenes that catch your eye, reference the code to learn how it works, then 
implement it yourself to grasp it concretely.  

## Examples 🖍
```
import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect } from 'react';
import { useScroll } from '@react-three/drei';

export default function CarOptimized(props)
{
    const ref = useRef();
    const meshRef = useRef();
    const lightRef = useRef();

    const scroll = useScroll();
    let offset;

    const cop = useRef((Math.random() < 0.2));
    const speed = useRef(400);
    const direction = useRef((Math.random() > 0.5)); //pos is true
    const iterations = useRef(0);

    const ResetPositions = () =>
    {
        if(ref.current === undefined) return;

        ref.current.position.x = (direction.current) ? -400: 1000;
        ref.current.position.y = 100 + Math.random() * 1000;
        ref.current.position.z = Math.random() * 750;
    }

    const ResetScale = () =>
    {
        meshRef.current.scale.x = 2 + Math.random() * 45;
        meshRef.current.scale.y = 2 + Math.random() * 5;
        meshRef.current.scale.z = 2 + Math.random() * 15;
    }

    useEffect(() =>
    {
        ResetScale();
    }, [])

    useFrame((_, delta) =>
    {
        let offset = scroll.offset;
        if(offset > 1) offset = 0;

        //Case: visible
        if(offset >= props.minVis && offset < props.maxVis)
        {
            //upkeep
            if(ref.current.visible == false) ref.current.visible = true;

            if(lightRef.current.intensity < 30)
            {
                lightRef.current.intensity += delta * 30;
            }

            if(meshRef.current.material.opacity < 1)
            {
                meshRef.current.material.opacity += delta * .5;
            }

            //console.log(ref.current.visible, lightRef.current.intensity, meshRef.current.material.opacity)

            // Check/handle reset
            if(ref.current.position.x > 1500 || ref.current.position.x < -2000)
            {
                //handle cop
                if(Math.random() < .2) cop.current = true;
                else cop.current = false;
    
                //init values
                if(cop.current)
                {
                    lightRef.current.color.set("red")
                    meshRef.current.material.color.set("red")
                    iterations.current = 0;
                }
                else
                {
                    lightRef.current.color.set(props.lightColor);
                    meshRef.current.material.color.set(props.materialColor);
                }
    
                ResetPositions();
                ResetScale();
    
                return;
            }
            /*
                MOVEMENT
            */
            else
            {
                if(direction.current)
                {
                    ref.current.position.x += delta * speed.current;
                }
                else
                {
                    ref.current.position.x -= delta * speed.current;
                }
            }
    
            /*
                HANDLE COP
            */
            if(cop.current)
            {
                if(iterations.current > .2)
                {
                    lightRef.current.color.getHexString() === "fe0000" ? lightRef.current.color.set("blue") : lightRef.current.color.set("red");
                    iterations.current = 0;
                }
                iterations.current += delta;
            }

            return;
        }
        //Case: invisible
        //upkeep

        if(lightRef.current.intensity > 0 || meshRef.current.material.opacity > 0)
        {
            if(lightRef.current.intensity > 0)
            {
                lightRef.current.intensity -= delta * 30;
            }
            if(meshRef.current.material.opacity > 0)
            {
                meshRef.current.material.opacity -= delta * .5;
            }

            if(direction.current)
            {
                ref.current.position.x += delta * speed.current;
            }
            else
            {
                ref.current.position.x -= delta * speed.current;
            }
        }
        else if(ref.current.visible === true) ref.current.visible = false;

        

    })

    return(
        <group ref = {ref} position = {[-400 + Math.random() * 1400, 100 + Math.random() * 1000,  Math.random() * 750]}>

            <pointLight ref = {lightRef} intensity = {30} decay = {2} distance = {600} color = {props.lightColor}/>

            <mesh ref = {meshRef} scale = {[1,1,1]} >
                <boxGeometry args = {[1,1,1]} />
                <meshBasicMaterial color = {cop.current ? "red" : props.materialColor} transparent/>
            </mesh>

        </group>
    );
}

```

## Documentation 📄
If you want to read the vertigodao whitepaper for whatever reason, you can find it here https://vertigodao.com/documentation


## Shoutouts 👷
Credit to Kim Hoang https://www.linkedin.com/in/kim-hoang-466134172/ for creating most of the art assets you can see on the site!

## License ⚖️
Unlicensed!  Do whatever you want, credit me if you want.

---
<div align="center">
	<b>
		<a href="https://www.npmjs.com/package/get-good-readme">File generated with get-good-readme module</a>
	</b>
</div>
