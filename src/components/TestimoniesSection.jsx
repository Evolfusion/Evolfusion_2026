import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimoniesData, testimoniesStats } from "../data/data.js"
import { Quote, Star } from "lucide-react"

const iconMap = { Quote, Star }
const AUTOPLAY_TIME = 9000 // 4 segundos

export default function TestimoniesSection() {
    const [index, setIndex] = useState(0)

    // 🔁 Autoplay infinito
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimoniesData.length)
        }, AUTOPLAY_TIME)

        return () => clearInterval(interval)
    }, [])

    const { icon, iconStar, description, name, position } =
        testimoniesData[index]

    const Icon = iconMap[icon]
    const IconStar = iconMap[iconStar]

    return (
        <div className="testimonies">
            <div className="testimonies__header">
                <h2 className="testimonies__title">Testimonios de Clientes</h2>
                <p className="testimonies__description">
                    La confianza de nuestros clientes es nuestro mayor logro
                </p>
            </div>

            <div className="testimonies__carousel">
                <AnimatePresence mode="wait">
                    <motion.article
                        key={index}
                        className="testimonies__card"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 1.3, ease: "easeInOut" }}
                    >
                        <Icon size={48} className="testimonies__icon" />
                        <div className="testimonies__stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="testimonies__star-wrapper">
                                    <IconStar
                                        size={20}
                                        fill="currentColor"
                                        className="testimonies__star"
                                    />
                                </span>
                            ))}
                        </div>
                        <p className="testimonies__card-description">
                            {description}
                        </p>

                        <h3 className="testimony-card__name">{name}</h3>
                        <span className="testimony-card__position">
                            {position}
                        </span>
                    </motion.article>
                </AnimatePresence>
            </div>
            <div className="testimonie__stats">
                {testimoniesStats.map(({id, value, label}) => (
                    <div className="testimonie__stat" key={id}>
                        <span className="testimonie__value">{value}</span>
                        <p className="testimonie__label">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
