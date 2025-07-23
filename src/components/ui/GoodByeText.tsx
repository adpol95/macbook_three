import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const GoodByeText = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className={'goodByeText'}
         data-aos='fade-up'>
      <p className={'firstText'}>
        Let's launch an extraordinary project into orbit together.
      </p>
      <p className={'secondText'}>
        Contact us to explore new IT frontiers.
      </p>
    </div>
  );
};

export default GoodByeText; 