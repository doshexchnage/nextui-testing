import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
} from "@heroui/react";
import { useEffect, useState } from "react";

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1>Exciting times ahead!</h1>

      <Button
        className="bg-blue-500"
        onPress={() => {
          alert("Button tested!");
        }}
      >
        Alert
      </Button>

      <Dropdown disableAnimation={false}>
        <DropdownTrigger>
          <Button variant="bordered">Open Dropdown</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem key={item.key} className={item.key === "delete" ? "text-danger" : ""} color={item.key === "delete" ? "danger" : "default"}>
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      <Tooltip content="Bold" showArrow={true} disableAnimation={false}>
        <Button size="sm">Toolip</Button>
      </Tooltip>

      <Button
        size="md"
        onPress={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        disableAnimation={false}
        onOpenChange={(isOpen: boolean) => {
          if (!isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Header</ModalHeader>
              <ModalBody>Body</ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  onPress={() => {
                    setIsOpen(false);
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
