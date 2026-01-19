import { Sparkles, ArrowRight } from "lucide-react"; /* Importamos libreria  icons*/
import { motion } from "framer-motion"; /* Importamos libreria  animación*/
import { HomeParticle } from "../hook/HomeParticle"; /* imprtamos el hook (logica) */

/* PASAR A CARPETA DE HOOKS */
export default function ContacSection() {

    //*Destructuring de objetos
    //Esto permite acceder a las propiedades de un objeto que retorna el hook HomeParticle
    const { particles, isHover, setIsHover } = HomeParticle();

    return (
        <div
            className="contact"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {/* PARTÍCULAS */}
            <div className="contact__particles">
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
            <div className="contact__content ">
                <h1 className="contact__title">¿Listo para llevar tu <span className="contact__title-span">negocio </span> al siguiente nivel?</h1>
                <div className="contact__container">
                    <div className="contact__text">
                        <p className="contact__description">Contáctanos hoy y empecemos a trabajar en tu proyecto. Te brindamos una <span className="contact__span"> consulta  gratuita</span> para entender tus necesidades y proponerte la mejor solución.</p>
                    </div>
                    <div className="contact__buttons">
                        <a className="contact__budget">Contactános Ahora <ArrowRight className="contact__icon" /></a>
                        <a className="contact__services">Empezar Mi Proyecto <Sparkles className="contact__icon contact__icon--rotate" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
