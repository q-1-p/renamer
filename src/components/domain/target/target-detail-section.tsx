import { useState } from "react";

import { TargetSelectTable } from "./target-select-table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions = {
  add: "追加順",
  name: "名前順",
  createdAt: "作成日順",
  updatedAt: "変更日順",
} as const;

export function TargetDetailSection() {
  const [sortOption, setSortOption] = useState<string>(sortOptions.add);

  return (
    <>
      <div className="flex items-center gap-2 p-3">
        <span className="whitespace-nowrap">並び替え</span>
        <Select
          defaultValue={sortOption}
          onValueChange={(value) => setSortOption(value)}
        >
          <SelectTrigger className="h-1 w-full py-0 text-xs">
            <SelectValue></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={sortOptions.add}>{sortOptions.add}</SelectItem>
            <SelectItem value={sortOptions.name}>{sortOptions.name}</SelectItem>
            <SelectItem value={sortOptions.createdAt}>
              {sortOptions.createdAt}
            </SelectItem>
            <SelectItem value={sortOptions.updatedAt}>
              {sortOptions.updatedAt}
            </SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="up">
          <SelectTrigger className="h-1 py-0 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="up">昇順</SelectItem>
            <SelectItem value="down">降順</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <hr />
      <TargetSelectTable />
    </>
  );
}
