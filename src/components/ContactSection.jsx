import { Sparkles, ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react"; /* Importamos libreria  icons*/
const iconMap = { Mail, Phone, MapPin };
import { motion } from "framer-motion"; /* Importamos libreria  animación*/
import { HomeParticle } from "../hook/HomeParticle.js"; /* imprtamos el hook (logica) */
import { contactData } from "../data/data"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/* PASAR A CARPETA DE HOOKS */
export default function ContactSection() {

    //*Destructuring de objetos
    //Esto permite acceder a las propiedades de un objeto que retorna el hook HomeParticle
    const { particles, isHover, setIsHover } = HomeParticle();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const selectElement = document.getElementById("reason");

        const updateSelectColor = () => {
            if (selectElement.value) {
                selectElement.classList.add("form__select--selected");
            } else {
                selectElement.classList.remove("form__select--selected");
            }
        };

        selectElement.addEventListener("change", updateSelectColor);
        return () => selectElement.removeEventListener("change", updateSelectColor);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/evolfusion.arg@gmail.com",
                {
                    method: "POST",
                    body: data,
                }
            );

            if (!response.ok) throw new Error("Error al enviar");

            setSuccess(true);
            form.reset();
        } catch (error) {
            alert("Hubo un error al enviar el mensaje.");
        }

        setLoading(false);
    };
    useEffect(() => {
        if (success) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [success]);

    return (
        <div className="contact__particle">
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
                <div className="contact__content" id="contact">
                    <h2 className="contact__title" data-aos="fade-right">¿Listo para llevar tu <span className="contact__title-span">negocio </span> al siguiente nivel?</h2>
                    <div className="contact__container" data-aos="fade-up">
                        <div className="contact__text">
                            <p className="contact__description">Contáctanos hoy y empecemos a trabajar en tu proyecto. Te brindamos una <span className="contact__span"> consulta  gratuita</span> para entender tus necesidades y proponerte la mejor solución.</p>
                        </div>
                        <div className="contact__buttons">
                            <a className="contact__budget" href="https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa obtener información sobres los servicios" target="_blank">Contactános Ahora <ArrowRight className="contact__icon" /></a>
                            <a className="contact__services" href="https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa obtener información sobre el servicio de Empezar Mi Proyecto" target="_blank">Empezar Mi Proyecto <Sparkles className="contact__icon contact__icon--rotate" /></a>
                        </div>
                    </div>
                    <div className="contact__features">
                        <div className="contact__feature" data-aos="fade-right">
                            <p className="contact__feature-text">✓ Consulta Gratuita</p>
                        </div>
                        <div className="contact__feature" data-aos="fade-left">
                            <p className="contact__feature-text">✓ Código Personalizado</p>
                        </div>
                        <div className="contact__feature" data-aos="fade-right">
                            <p className="contact__feature-text" >✓ Soporte 24/7</p>
                        </div>
                        <div className="contact__feature" data-aos="fade-left">
                            <p className="contact__feature-text">✓ Entrega Garantizada</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__info">
                <h2 className="contact__info-title">Contactanos</h2>
                <div className="contact__info-text">
                    <p className="contact__info-description">Estamos listos para escuchar tu proyecto y ayudarte a hacerlo realidad</p>
                </div>
                <div className="contact__items">
                    {contactData.map(({ id, icon, title, info }) => {
                        const Icon = iconMap[icon];

                        return (
                            <div className="contact__item" key={id} data-aos="zoom-in">
                                <figure className="contact__item-figure">
                                    <Icon size={48} strokeWidth={1.8} className="contact__item-icon" />
                                </figure>
                                <h2 className="contact__item-title">{title}</h2>
                                <p className="contact__item-info">{info}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="contact__form-wrapper">
                <div className="contact__map" data-aos="fade-right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52557.21022084043!2d-58.447768154687076!3d-34.58327817786774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x26321e0be3722665%3A0x82331122352af2dd!2sEvolfusion%20-%20tecnolog%C3%ADas%20digitales!5e0!3m2!1ses!2sar!4v1772239269147!5m2!1ses!2sar"
                        
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact__form">
                    <form onSubmit={handleSubmit}   data-aos="fade-left">
                        <div className="form__config">
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_subject" value="Nuevo mensaje desde Evolfusion" />
                            <input type="hidden" name="_captcha" value="false" />
                        </div>
                        <div className="form">
                
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">Nombre completo</label>
                                <input type="text" id="name" placeholder="Tu nombre" name="name" aria-label="Tu nombre" className="form__input" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="email" className="form__label">Email</label>
                                <input type="email" id="email" placeholder="Tu email" name="email" className="form__input" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="tel" className="form__label">Teléfono</label>
                                <input type="tel" id="tel" placeholder="+54 9 11 6340-8605" name="tel" className="form__input" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$" required />
                            </div>
                            <div className="form__group">
                                <label htmlFor="services" className="form__label">Servicio de interés</label>
                                <select name="reason" id="reason" defaultValue="" className="form__select form__option" >
                                    <option value="" disabled >Seleccionar un servicio</option>
                                    <option value="Diseño Web">Diseño Web</option>
                                    <option value="Soporte y Mantenimiento">Soporte y Mantenimiento</option>
                                    <option value="Diseño Gráfico">Diseño Gráfico</option>
                                    <option value="Reparación de Celulares">Reparación de Celulares</option>
                                    <option value="Sitios Web Profesionales">Sitios Web Profesionales</option>
                                    <option value="Reparaciones de Computadoras">Reparaciones de Computadoras</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label htmlFor="messenger" className="form__label">Mensaje</label>
                                <textarea name="messenger" id="messenger" placeholder="Cunéntanos sobre tu proyecto..." className="form__textarea"></textarea>
                            </div>
                            <div className="form__group">
                                <button type="submit" className="form__button" disabled={loading}>
                                    {loading ? "Enviando..." : "Enviar Mensaje"}
                                    {!loading && <Send className="form__icon-send" />}
                                </button>
                            </div>
                        </div>
                    </form>
                    {success &&
                        createPortal(
                            <div className="modal">
                                <div className="modal__content">
                                    <h3 className="modal__title">Mensaje enviado correctamente</h3>
                                    <p className="modal__description">
                                        Nos contactaremos contigo en menos de 24 horas.
                                    </p>
                                    <button onClick={() => setSuccess(false)}>Cerrar</button>
                                </div>
                            </div>,
                            document.body
                        )
                    }
                    <p className="form__support"><Sparkles className="form__icon-sparkle" /> Respondemos en menos de 24 horas</p>
                </div>
            </div>
        </div>

    );
}
