import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router-dom";
import { MainScreen } from "./screens/main";

export function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter>
        <MainScreen />
      </BrowserRouter>
    </HeroUIProvider>
  );
}
