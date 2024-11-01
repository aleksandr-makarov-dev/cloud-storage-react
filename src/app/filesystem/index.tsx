import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetObjects } from "@/modules/filesystem/api/get-objects";
import { FileSystemObject } from "@/modules/filesystem/types";
import { Folder, File } from "lucide-react";
import prettyBytes from "pretty-bytes";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";

export const FileSystemPage = () => {
  const navigate = useNavigate();
  const { prefix } = useParams<{ prefix: string }>();

  const { data } = useGetObjects({ prefix: prefix });

  const handleTableRowClick = (value: FileSystemObject) => {
    if (!value.isDir) {
      return;
    }

    const encoded = encodeURIComponent(value.key);
    navigate(`/filesystem/${encoded}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-4">
        <form className="w-full">
          <div className="flex gap-2">
            <Input className="w-full" placeholder="Search in filesystem" />
            <Button variant="secondary">Search</Button>
          </div>
        </form>
        <div>
          <Button>Upload</Button>
        </div>
      </div>

      <Table className="border border-border bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[48px] text-black">Type</TableHead>
            <TableHead className="text-black">Name</TableHead>
            <TableHead className="text-black">Date Modified</TableHead>
            <TableHead className="text-black">Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((obj) => (
            <TableRow
              key={obj.key}
              className="hover:cursor-pointer"
              onClick={() => handleTableRowClick(obj)}
            >
              <TableCell>
                {obj.isDir ? (
                  <Folder
                    className="w-6 h-6 fill-yellow-200 stroke-none"
                    stroke="0"
                  />
                ) : (
                  <File className="w-6 h-6 fill-gray-200" stroke="0" />
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
    </div>
  );
};
