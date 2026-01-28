import { Sparkles } from 'lucide-react';
import useHeader from '../hook/useHeader';

export default function Header(){
    const { isOpen, scrolled, menuRef, toggleMenu } = useHeader();
    return(
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <nav className="header__nav" ref={menuRef}>
                <div className="header__logo">
                    <img src="/img/logo-sin-fondo.png" alt="logo de evolfusion" className="header__logo-img"/>
                </div>

                <ul className={`header__menu ${isOpen ? "show-menu" : ""}`}>
                    <li><a href="#home" className="header__menu-link" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="#about" className="header__menu-link" onClick={toggleMenu}>Nosotros</a></li>
                    <li><a href="#services" className="header__menu-link" onClick={toggleMenu}>Servicios</a></li>
                    <li><a href="#contact" className="header__menu-link" onClick={toggleMenu}>Contacto</a></li>
                    <li>
                        <a href="#budget" className="header__menu-link header__menu-link--budget" onClick={toggleMenu}>
                            Presupuesto Gratis <Sparkles />
                        </a>
                    </li>
                </ul>

                <div className="header__hamburger" onClick={toggleMenu}>
                    <span className="header__hamburger-line"></span>
                    <span className="header__hamburger-line"></span>
                    <span className="header__hamburger-line"></span>
                </div>
            </nav>
        </header>
    );
}
