import { Input, Select, SelectItem } from "@heroui/react";

const MONTHS = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];

export function MainScreen() {
  return (
    <div className="flex flex-col gap-4">
      <Select label="Select a month of the year...">
        {MONTHS.map((month) => (
          <SelectItem key={month} value={month}>
            {month}
          </SelectItem>
        ))}
      </Select>
      <Input placeholder="this is an input" />
    </div>
  );
}
