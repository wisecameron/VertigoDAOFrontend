export const vertexShader = `        
varying vec2 vUv;
uniform float time;
attribute vec3 updatedPosition;
attribute vec3 oldPosition;
attribute float random;
uniform float mouseX;
uniform float mouseY;
attribute vec3 menuPos;
varying float done;
varying float mouseDist;
attribute float fallTime;


void main()
{
    vUv = uv;
    done = 0.;

    //pre-anim (just display planet)
    if(time == 0.)
    {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        return;
    }

    //Purge
    if(time > 14.5)
    {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(-100, -100, -100, 1.);
        done = 1.;
        return;
    }

    vec3 pos;

    //displace outward, ambient movement
    if(time < fallTime)
    {
        pos = mix(oldPosition, updatedPosition, min(time * 0.2, 1.0));
        pos += (sin(time * random) * cos(time * random)) * 0.05;
    }
    
    //Falling
    else 
    {
        pos = updatedPosition + (sin(time * random) * cos(time * random)) * 0.05;
        pos = mix(pos, vec3(updatedPosition.x * 3., updatedPosition.y - (20. * (random + vUv.y * 1.3)), updatedPosition.z), (time - fallTime) * .1 * (random * 3.) );
    }

    //Add mouse displacement
    vec4 clipSpacePosition = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    vec2 ndc = clipSpacePosition.xy / clipSpacePosition.w;
    mouseDist = length(vec2(mouseX, mouseY) - ndc.xy);

    if(mouseDist < .05)
    {
        pos.y -= .1 * ( 1. + mouseDist * 5.);
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}`

export const fragmentShader = `        
varying vec2 vUv;
varying float mouseDist;
uniform float time;
uniform sampler2D textureMap;
uniform float timeCapped;
varying float done;
uniform float spreadcap;

float random(float st)
{
    return fract(sin(st * 12.9898) * 43758.5453123);
}

void main()
{
    if(done == 1.) discard;

    float t = min(timeCapped, spreadcap);

    float lightStartPos = 0.9 - (t * 1.6);
    float lightEndPos = 1.;

    float darkness = smoothstep(lightStartPos, lightEndPos, vUv.y);
    //if(darkness > .99) discard;

    vec4 texColor = texture2D(textureMap, vUv);

    darkness += min(time * .05, .6);

    texColor.rgb *= (darkness * 2.);

    gl_FragColor = texColor;
}`
