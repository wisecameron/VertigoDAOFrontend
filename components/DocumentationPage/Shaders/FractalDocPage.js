export const VX = `

    varying vec2 vUv;
    uniform float u_time;
    void main() 
    {
        vUv = uv;

        vec4 mvPos = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPos;
      }

`

export const FS = `

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec3 u_bg;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec2 u_mouse;

    uniform float u_tp;

    varying vec2 vUv;

    void main()
    {
        float angle = u_time * .075;
        vec2 normalizedCoord = vUv * 2. - 1.;
        float shearFactor = .5 + sin(u_time) * .1;

        float i = 0.;
        
        for(;i < 12.;)
        {
            normalizedCoord = abs(normalizedCoord);
            normalizedCoord -= .25 + ((u_mouse.x * .00005) + u_mouse.y * .00005);
            normalizedCoord -= .25 + (sin(u_time) * .0001);
            normalizedCoord *= 1.1;
            normalizedCoord.x += shearFactor * normalizedCoord.y;

            normalizedCoord *= mat2(
                cos(angle), -sin(angle),
                sin(angle), cos(angle)
            );

            i++;
        }
        gl_FragColor = vec4(vec3(length(normalizedCoord * vec2(0.15))), 1.);
    }

`