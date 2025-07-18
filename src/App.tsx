import About from "./components/about/About";
import CTA from "./components/CTA/CTA";
import Hero from "./components/hero/Hero";

export const App = () => {
    return (
        <div className="app">
            <Hero />
            <About />
            <CTA />
        </div>
    );
};

export default App;
