import { servicesData } from "../data/data";
import { Globe, Wrench, Palette, Smartphone, Monitor, Laptop, ArrowRight } from "lucide-react";
const iconMap = { Globe, Wrench, Palette, Smartphone, Monitor, Laptop };

export default function ServiceSection() {
    return (
        <div id="services">
            <div className="services">
                <div className="services__header">
                    <h2 className="services__title">Nuestros Servicios</h2>
                    <p className="services__description">Soluciones tecnológicas integrales diseñadas para tu éxito</p>
                </div>
                <div className="services__cards">
                    {servicesData.map(({ id, icon, title, description, linkUrl }) => {
                        const Icon = iconMap[icon];

                        return (
                            <article className="services__card" key={id} data-aos="zoom-in">
                                <div className="services__icons">
                                    <div className="service__icons-primary">
                                        <Icon size={48} strokeWidth={1.8} className="services__icon-primary" />
                                    </div>
                                    <div className="service__icons-secondary">
                                        <Icon size={80} strokeWidth={1.8} className="services__icon-secondary" />
                                    </div>
                                </div>
                                <h3 className="services__title-card">{title}</h3>
                                <p className="services__description-card">{description}</p>
                                <a href={linkUrl} className="services__btn" target="_blank">Más información <ArrowRight className="services__icon" /></a>
                            </article>
                        )
                    })}
                </div>
                <div className="services__request">
                    <p className="services__description-request">¿No encuentras lo que buscas? Consulta por servicios personalizados</p>
                    <a href="https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa obtener información sobre servicios personalizados" className="services__btn-request" target="_blank">Solicitar Consulta Gratuita</a>
                </div>
            </div>
        </div>
    )
}