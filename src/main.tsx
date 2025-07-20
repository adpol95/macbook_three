import App from "@/App";
import "@/assets/styles/index.scss";
import { ContactPage } from "@/components/pages/ContactPage";
import { HomePage } from "@/components/pages/HomePage";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
