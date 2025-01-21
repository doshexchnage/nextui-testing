import { Select, SelectItem } from "@heroui/react";

const MONTHS = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];

export function MainScreen() {
  return (
    <div className="">
      <Select label="Select a month of the year...">
        {MONTHS.map((month) => (
          <SelectItem key={month} value={month}>
            {month}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
