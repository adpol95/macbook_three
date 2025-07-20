import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
    return (
        <div className={"bodyMain"}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
