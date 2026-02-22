import WavesBackground from "../components/WavesBackground.jsx";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="footer">
            {/* FONDO ANIMADO */}
            <WavesBackground />

            <div className="footer__container">

                {/* LOGO + DESCRIPCIÓN */}
                <div className="footer__brand">
                    <img src="/img/logo-sin-fondo.png" alt="logo de evolfusion" className="footer__logo" />
                    <p className="footer__text">
                        Transformamos tus ideas en soluciones digitales profesionales.
                        Código personalizado, diseño único, resultados garantizados.
                    </p>

                    <div className="footer__social">
                        <FaFacebookF size={20} />
                        <FaInstagram size={20} />
                        <FaTwitter size={20} />
                        <FaLinkedinIn size={20} />

                    </div>
                </div>
                <div className="footer__block">

                    {/* SERVICIOS */}
                    <div className="footer__column">
                        <h3 className="footer__title">Servicios</h3>
                        <ul className="footer__list">
                            <li className="footer__item">Diseño Web</li>
                            <li className="footer__item">Marketing</li>
                            <li className="footer__item">Branding</li>
                            <li className="footer__item">Soporte</li>
                        </ul>
                    </div>

                    {/* CONTACTO */}
                    <div className="footer__column">
                        <h3 className="footer__title">Contacto</h3>

                        <div className="footer__contact">
                            <Mail size={18} />
                            <span>info@evolfusion.com</span>
                        </div>

                        <div className="footer__contact">
                            <Phone size={18} />
                            <span>+54 9 11 1234-5678</span>
                        </div>
                    </div>

                </div>
            </div>
             {/* COPYRIGHT */}
                <div className="footer__bottom">
                    <p>© 2026 Evolfusion. Todos los derechos reservados.</p>
                </div>
        </div>
    );
}



