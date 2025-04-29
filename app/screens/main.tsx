import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { useEffect } from "react";

export function MainScreen() {
  useEffect(() => {
    //
  }, []);

  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

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

      <Dropdown isDisabled={false}>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem key={item.key} className={item.key === "delete" ? "text-danger" : ""} color={item.key === "delete" ? "danger" : "default"}>
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
