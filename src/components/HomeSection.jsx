import { Sparkles, ArrowRight } from "lucide-react"; /* Importamos libreria  icons*/
import { motion } from "framer-motion"; /* Importamos libreria  animación*/
import { HomeParticle } from "../hook/HomeParticle"; /* imprtamos el hook (logica) */

/* PASAR A CARPETA DE HOOKS */
export default function HomeSection() {

  //*Destructuring de objetos
  //Esto permite acceder a las propiedades de un objeto que retorna el hook HomeParticle
  const { particles, isHover, setIsHover } = HomeParticle();

  return (
    <div
      className="home"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* PARTÍCULAS */}
      <div className="home__particles">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="particle"
            initial={{ x: 0, y: 0 }}
            animate={
              isHover
                ? {
                  x: [0, p.x1, p.x2],
                  y: [0, p.y1, p.y2],
                }
                : {
                  x: [0, p.x1 * 0.05, 0],
                  y: [0, p.y1 * 0.05, 0],
                }
            }
            transition={{
              duration: isHover ? 0.3 : 4,
              ease: isHover ? "easeInOut" : "linear",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENIDO */}
      <div className="home__content">
        <h1 className="home__title">Transformamos Ideas en Realidad Digital</h1>
        <div className="home__container">
          <div className="home__text">
            <p className="home__description">Desarrollo web profesional, diseño gráfico único y marketing digital estratégico.</p>
            <p className="home__span">Código personalizado, sin plantillas. Calidad garantizada.</p>
          </div>
          <div className="home__buttons">
            <a className="home__budget">Solicitar Presupuesto <ArrowRight className="home__icon"/></a>
            <a className="home__services">Ver Servicios <Sparkles className="home__icon home__icon--rotate"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
