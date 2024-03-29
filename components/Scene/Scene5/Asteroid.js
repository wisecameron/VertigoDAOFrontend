import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

export default function Asteroid(props)
{   

  const geometry = new THREE.DodecahedronGeometry(size, 1);
  geometry.vertices.forEach((v) => {
    v.x += 0 - Math.random() * (size / 4);
    v.y += 0 - Math.random() * (size / 4);
    v.z += 0 - Math.random() * (size / 4);
  });
  let color = '#111111';
  color = ColorLuminance(color, 2 + Math.random() * 10);
  const texture = new THREE.MeshStandardMaterial({
    color: color,
    shading: THREE.FlatShading,
    roughness: 0.8,
    metalness: 1,
  });

    
}

function ColorLuminance(hex, lum) 
{
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    let rgb = '#';
    let c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ('00' + c).substr(c.length);
    }
    return rgb;
  }