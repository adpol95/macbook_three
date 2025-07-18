import { createStarField } from "@/utils/threeStarField";
import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./About.module.scss";

const About = () => {
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        setIsVisible(true);
        if (canvasRef.current) {
            createStarField(canvasRef.current);
        }
    }, []);

    return (
        <section className="about">
            <CSSTransition in={isVisible} timeout={1000} classNames="fade">
                <div className="about__content">
                    <h2>О нас</h2>
                    <p>
                        Мы создаем виртуальные туры по космосу, чтобы каждый мог
                        прикоснуться к звездам.
                    </p>
                </div>
            </CSSTransition>
            <canvas ref={canvasRef} className="about__canvas" />
        </section>
    );
};

export default About;
