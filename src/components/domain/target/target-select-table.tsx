import { X } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TargetSelectTable() {
  return (
    <div className="p-3">
      <Table>
        <TableCaption>ここにファイルをドロップしてください</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>変更前</TableHead>
            <TableHead>変更後</TableHead>
            <TableHead className="w-4">作成日時</TableHead>
            <TableHead className="w-4">更新日時</TableHead>
            <TableHead className="w-2"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>2025/08/08 12:12:12</TableCell>
            <TableCell>2025/08/08 12:12:12</TableCell>
            <TableCell>
              <X
                role="button"
                className="rounded text-gray-500 hover:bg-gray-700"
                onClick={() => alert()}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
