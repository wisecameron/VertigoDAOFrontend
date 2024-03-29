
export const fragment = `

uniform float resH;
uniform float resW;
varying vec2 vUv;

void main()
{
    gl_FragColor = vec4(1.0);
}


`

export const vertex = `

varying vec2 vUv;
void main()
{
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`