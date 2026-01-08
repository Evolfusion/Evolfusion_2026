import WavesBackground from "../components/WavesBackground.jsx";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" >
      {/* FONDO */}
      <WavesBackground />

      {/* CONTENIDO */}
      <div className="about__content">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1627599936744-51d288f89af4"
              alt="Equipo de desarrollo"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Sobre Nosotros</h2>
            <p>
              En <strong>Evolfusion</strong> creamos soluciones digitales
              personalizadas, sin plantillas.
            </p>

            <ul>
              <li>Código 100% a medida</li>
              <li>Diseño premium</li>
              <li>Enfoque en resultados</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
