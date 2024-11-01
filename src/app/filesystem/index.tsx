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
import {
  Folder,
  File,
  RefreshCwIcon,
  UploadIcon,
  SearchIcon,
} from "lucide-react";
import prettyBytes from "pretty-bytes";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

interface BreadCrumbLinkData {
  name: string;
  href: string;
}

export const FileSystemPage = () => {
  const navigate = useNavigate();
  const { prefix } = useParams<{ prefix: string }>();

  const { data } = useGetObjects({ prefix: prefix });

  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbLinkData[]>([]);

  useEffect(() => {
    setBreadcrumbs([
      {
        name: "root",
        href: "/filesystem",
      },
      {
        name: "my-folder",
        href: "/filesystem/my-folder",
      },
      {
        name: "my-images",
        href: "/filesystem/my-images",
      },
    ]);
  }, [prefix]);

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
          {breadcrumbs.map((bc, i) => {
            if (i < breadcrumbs.length - 1) {
              return (
                <React.Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <NavLink to={bc.href}>{bc.name}</NavLink>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                </React.Fragment>
              );
            } else {
              return (
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">
                    {bc.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              );
            }
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-4">
        <form className="w-full">
          <div className="flex gap-2">
            <Input className="w-full" placeholder="Search in filesystem" />
            <Button variant="secondary">
              <SearchIcon className="w-6 h-6" />
              Search
            </Button>
          </div>
        </form>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCwIcon className="w-6 h-6" />
            Refresh
          </Button>
          <Button>
            <UploadIcon className="w-6 h-6" />
            Upload
          </Button>
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
