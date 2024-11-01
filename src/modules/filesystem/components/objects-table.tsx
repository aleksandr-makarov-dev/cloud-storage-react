import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import dayjs from "dayjs";
import prettyBytes from "pretty-bytes";
import { Object } from "../types";
import { FolderIcon, FileIcon } from "lucide-react";

interface ObjectsTableProps {
  items?: Object[];
  onTableRowClick: (obj: Object) => void;
}

export const ObjectsTable = ({ items, onTableRowClick }: ObjectsTableProps) => {
  return (
    <Table className="border border-border bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[48px] text-black"></TableHead>
          <TableHead className="text-black">Name</TableHead>
          <TableHead className="text-black">Date Modified</TableHead>
          <TableHead className="text-black">Size</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items?.map((obj) => (
          <TableRow
            key={obj.key}
            className="hover:cursor-pointer"
            onClick={() => onTableRowClick(obj)}
          >
            <TableCell>
              {obj.isDir ? (
                <FolderIcon
                  className="w-6 h-6 fill-yellow-200 stroke-none"
                  stroke="0"
                />
              ) : (
                <FileIcon className="w-6 h-6 fill-gray-200" stroke="0" />
              )}
            </TableCell>
            <TableCell className="font-medium">
              {obj.key
                .split("/")
                .filter((k) => !!k)
                .slice(-1)}
            </TableCell>
            <TableCell>
              {obj.lastModifiedDateTime &&
                dayjs(obj.lastModifiedDateTime).toString()}
            </TableCell>
            <TableCell>{obj.isDir ? "-" : prettyBytes(obj.size)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
