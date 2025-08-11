import { menuItems } from "./menu-items";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MenuSelectSection() {
  return (
    <div className="p-3">
      <Select>
        <SelectTrigger className="h-1 w-full py-0 text-xs">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          {menuItems.map((menu) => (
            <SelectGroup key={menu.title}>
              <SelectLabel>{menu.title}</SelectLabel>
              {menu.items.map((item) => (
                <SelectItem
                  key={item.label}
                  value={item.label}
                  className="text-xs"
                >
                  {item.icon}
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
