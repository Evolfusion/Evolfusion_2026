import WavesBackground from "../components/WavesBackground.jsx";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            <WavesBackground />
            <div className="footer__container">
                {/* LOGO + DESCRIPCIÓN */}
                <div className="footer__brand">
                    <img src="/img/logo-sin-fondo.png" alt="logo de evolfusion" className="footer__logo" />
                    <p className="footer__text"> Transformamos tus ideas en soluciones digitales profesionales. Código personalizado, diseño único, resultados garantizados.</p>
                    <div className="footer__social">
                        <a href="https://www.facebook.com/profile.php?id=61577578956771" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
                        <a href="https://www.instagram.com/evolfusion_arg/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                        <a href="https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa obtener información sobre los servicios de Evolfusion" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /></a>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__column">
                        <h3 className="footer__title">Servicios</h3>
                        <ul className="footer__list">
                            <li className="footer__item"> <a href="#services">Diseño Web</a></li>
                            <li className="footer__item"> <a href="#services">Soporte y Mantenimiento</a></li>
                            <li className="footer__item"> <a href="#services">Diseño Gráfico</a></li>
                            <li className="footer__item"> <a href="#services">Reparación de Celulares</a></li>
                             <li className="footer__item"> <a href="#services">Sitios Web Profesionales</a></li>
                              <li className="footer__item"> <a href="#services">Reparación de Computadoras</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title">Contacto</h3>
                        <div className="footer__contact">
                            <Mail size={18} />
                            <span>evolfusion.arg@gmail.com</span>
                        </div>
                        <div className="footer__contact">
                            <Phone size={18} />
                            <span>+ 54 112772-8592</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2026 Evolfusion. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}



