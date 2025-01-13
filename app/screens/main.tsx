import { Button } from "@nextui-org/react";
import { useEffect } from "react";

export function MainScreen() {
  useEffect(() => {
    //
  }, []);

  return (
    <div className="">
      <h1>Exciting times ahead!</h1>
      <Button
        className="bg-blue-500"
        onPress={() => {
          alert("Button tested!");
        }}
      >
        Test
      </Button>
    </div>
  );
}
