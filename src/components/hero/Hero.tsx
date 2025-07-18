import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { createPlanetScene } from "../../utils/threePlanet";
import "./Hero.module.scss";

const Hero = () => {
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        setIsVisible(true); // Запускаем анимацию появления
        if (canvasRef.current) {
            createPlanetScene(canvasRef.current); // Инициализация планеты
        }
    }, []);

    return (
        <section className="hero">
            <CSSTransition in={isVisible} timeout={1000} classNames="fade">
                <div className="hero__content">
                    <h1>Исследуй космос!</h1>
                    <p>Погрузись в звезды и узнай больше о нашей галактике.</p>
                    <button className="hero__cta-button">Узнать больше</button>
                </div>
            </CSSTransition>
            <canvas ref={canvasRef} className="hero__canvas" />
        </section>
    );
};

export default Hero;
