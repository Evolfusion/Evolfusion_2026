import { useMemo, useState } from "react";
/* Codigo de  la libreria de motion */

export function HomeParticle() {

    const [isHover, setIsHover] = useState(false);

    const particles = useMemo(
        () =>
            Array.from({ length: 45 }, () => ({
                left: Math.random() * 100,
                top: Math.random() * 100,

                // desplazamientos grandes reales
                x1: Math.random() * 1200 - 600,
                y1: Math.random() * 1200 - 600,
                x2: Math.random() * 1200 - 600,
                y2: Math.random() * 1200 - 600,
            })),
        []
    );
    /* Retornamos las variables de promps que creamos y las funciones */
    return{
        particles,
        isHover,
        setIsHover
    }

}