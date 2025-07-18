import App from "@/App";
import "@/assets/styles/index.scss";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <div id="container">
        <App />
    </div>
);
