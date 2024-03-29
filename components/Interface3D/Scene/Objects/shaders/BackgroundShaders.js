export const fragment = `
varying vec2 vUv;
uniform sampler2D tex;
uniform vec2 resolution;
uniform float aspect;
uniform float offset;

void main()
{
    vec2 normalizedUv = gl_FragCoord.xy / resolution.xy;
    vec2 scale;

    if(aspect < 1.)
    {
        scale = vec2(1., 1. / aspect);
    }
    else
    {
        scale = vec2(aspect, 1.);
    }

    normalizedUv = (normalizedUv - vec2(0.5)) * scale * 2. + vec2(0.5);
    normalizedUv.x -= offset;
    normalizedUv.y -= .9;
    normalizedUv.x -= -.2;

    vec4 color = texture2D(tex, normalizedUv);

    gl_FragColor = color;
}
`

export const fragment2 = `
varying vec2 vUv;
uniform sampler2D tex;
uniform vec2 resolution;
uniform float aspect;
uniform float offset;

void main()
{
    vec2 normalizedUv = gl_FragCoord.xy / resolution.xy;
    vec2 scale;

    if(aspect < 1.)
    {
        scale = vec2(1., 1. / aspect);
    }
    else
    {
        scale = vec2(aspect, 1.);
    }

    normalizedUv = (normalizedUv - vec2(0.5)) * scale * 2. + vec2(0.5);
    normalizedUv.x -= offset;

    vec4 color = texture2D(tex, normalizedUv);

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