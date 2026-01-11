import WavesBackground from "../components/WavesBackground.jsx";
import { motion } from "framer-motion";
import { aboutData, aboutWarranty, aboutAchievements } from "../data/data.js";
import { HomeParticle } from "../hook/HomeParticle"; /* imprtamos el hook (logica) */
import { CodeXml, Palette, TrendingUp, ShieldCheck, Rocket, Award } from "lucide-react";
/* Este objeto relaciona un STRING (que viene desde la base de datos)
 con el componente real de Lucide React.
Nos permite renderizar iconos dinámicamente a partir de la dat */
const iconMap = { CodeXml, Palette, TrendingUp, ShieldCheck, Rocket, Award };

/* Función que permite resaltar contenido  */
function highlightText(text, word) {
  if (!word || !text.includes(word)) return text;

  const parts = text.split(word);

  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="about__span">{word}</span>
      )}
    </span>
  ));
}


export default function AboutSection() {

  //*Destructuring de objetos
  //Esto permite acceder a las propiedades de un objeto que retorna el hook HomeParticle
  const { particles, isHover, setIsHover } = HomeParticle();

  return (
    <div id="nosotros" >
      {/* FONDO */}
      <WavesBackground />

      {/* CONTENIDO */}
      <div className="about__content">

        {/* motion.div es un super div que permite animar el contenido */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__evolfusion">
            <div className="about__header">
              <h2 className="about__title">Sobre Evolfusion</h2>
              <p className="about__description">Transformamos el mundo digital con soluciones tecnológicas de vanguardia</p>
            </div>
            {/* map , recorre |   restructuración */}
            <div className=" about__cards">
              {aboutData.map(({ id, title, description, highlight }) => (
                <article className="about__card" key={id}>
                  <h3 className="about__title-card">{title}</h3>
                  <p className="about__description-card">{highlightText(description, highlight)}</p>
                </article>
              ))}
            </div>
            <div className="about__profile">
              {/* PARTÍCULAS SOLO EN EL PROFILE */}
              <div
                className="profile__particles"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                {particles.map((p, i) => (
                  <motion.span
                    key={i}
                    className="profile__particle"
                    initial={{ x: 0, y: 0 }}
                    animate={
                      isHover
                        ? {
                          x: [0, p.x1 * 2, p.x2 * 6],
                          y: [0, p.y1 * 2, p.y2 * 6],
                        }
                        : {
                          x: [0, p.x1 * 1.2, 0],
                          y: [0, p.y1 * 1.2, 0],
                        }
                    }
                    transition={{
                      duration: isHover ? 0.3 : 6,
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
              <img src="/img/profile.png" alt="Perfil de Sainas Erik" title="Salinas Erik" className="about__img" />
              <h3 className="about__name">Salinas Erik</h3>
              <p className="about__role">Fundador</p>
            </div>
            <div className="about__warranty">
              {aboutWarranty.map(({ id, icon, title, description }) => {
                const Icon = iconMap[icon];

                return (
                  <article className="about__features" key={id}>
                    <div className="about__feature">
                      <figure className="about__icons">
                        <Icon size={48} strokeWidth={1.8} className="about__icon" />
                      </figure>
                      <div className="about__icon-info">
                        <h3 className="about__icon-title">{title}</h3>
                        <p className="about__icon-description">{description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="about__achievements">
              {aboutAchievements.map(({ id, icon, title, description }) => {
                const Icon = iconMap[icon];

                return (
                  <article className="about__achievement-card" key={id}>
                    <div className="about__achievement">
                      <figure className="about__achievement-icon">
                        <Icon size={48} strokeWidth={1.8} className="about__achievement-icon-svg"
                        />
                      </figure>
                      <div className="about__achievement-content">
                        <h3 className="about__achievement-title">{title}</h3>
                        <p className="about__achievement-description">{description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
