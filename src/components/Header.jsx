//*Exportamos el componente Header para que pueda ser utilizado en otros archivos
import {Menu , X , Sparkles } from 'lucide-react'; /* Libreria de icons */

export default function Header(){
    return(
        <header className="header">
            <nav className="header__nav" id="#">
                <div className="header__logo">
                    <img src="/img/logo-sin-fondo.png" alt="logo de evolfusion"  className="header__logo-img"/>
                </div>
                <ul className="header__menu">
                    <li><a href="" className="header__menu-link">Inicio</a></li>
                    <li><a href="" className="header__menu-link">Nosotros</a></li>
                    <li><a href="" className="header__menu-link">Servicios</a></li>
                    <li><a href="" className="header__menu-link">Contacto</a></li>
                    <li><a href="" className="header__menu-link header__menu-link--budget">Presupuesto Gratís <Sparkles /></a></li>
                </ul>
               {/*  <div>
                    <span className="header__hamburger-line"></span>
                    <span className="header__hamburger-line"></span>
                    <span className="header__hamburger-line"></span>
                </div> */}
            </nav>
        </header>
    )
}