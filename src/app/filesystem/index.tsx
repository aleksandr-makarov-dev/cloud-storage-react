import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetObjects } from "@/modules/filesystem/api/get-objects";
import { Object } from "@/modules/filesystem/types";
import { RefreshCwIcon, UploadIcon, SearchIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { ObjectsTable } from "@/modules/filesystem/components/objects-table";
import { UploadObjectDialog } from "@/modules/filesystem/components/upload-object-dialog";

export const FileSystemPage = () => {
  const navigate = useNavigate();
  const { prefix } = useParams<{ prefix: string }>();

  const { data } = useGetObjects({ prefix: prefix });

  const handleTableRowClick = (value: Object) => {
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
          <UploadObjectDialog
            prefix={prefix}
            trigger={
              <Button>
                <UploadIcon className="w-6 h-6" />
                Upload
              </Button>
            }
          />
        </div>
      </div>
      <ObjectsTable items={data} onTableRowClick={handleTableRowClick} />
    </div>
  );
};
