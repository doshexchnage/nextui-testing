import { createRoot } from "react-dom/client";
import { App } from "./app";

const root = createRoot(document.getElementById("app") ?? document.body);
root.render(<App />);
