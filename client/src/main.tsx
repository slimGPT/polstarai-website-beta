import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./utils/initAnimations";

createRoot(document.getElementById("root")!).render(<App />);
