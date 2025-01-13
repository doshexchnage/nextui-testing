import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { MainScreen } from "./screens/main";

export function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <MainScreen />
      </NextUIProvider>
    </BrowserRouter>
  );
}
