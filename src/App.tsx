import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Outlet } from "react-router-dom";
import { BackgroundScene } from "@/components/background/BackgroundScene";

export const App = () => {
    return (
        <div className={"bodyMain"}>
            <BackgroundScene />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
