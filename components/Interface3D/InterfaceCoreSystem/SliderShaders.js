export const fragment = `
varying vec2 vUv;
uniform sampler2D tex;
uniform float time;
uniform float hovered;

void main()
{
    vec4 color = texture2D(tex, vUv);

    if(hovered > 0.)
    {
        color.xyz += .3;
    }

    gl_FragColor = color;
}
`

export const vertex = `
varying vec2 vUv;

void main()
{
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}
`