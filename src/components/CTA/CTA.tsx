import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./CTA.module.scss";

const CTA = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsVisible(false); // Запускаем анимацию исчезновения
    };

    return (
        <section className="cta">
            <CSSTransition in={isVisible} timeout={500} classNames="fade" unmountOnExit>
                <div className="cta__content">
                    <h2>Присоединяйся к нам!</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Ваш email" />
                        <button type="submit">Записаться</button>
                    </form>
                </div>
            </CSSTransition>
        </section>
    );
};

export default CTA;
