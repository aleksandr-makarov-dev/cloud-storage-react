import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface UploadObjectDialogProps {
  trigger: JSX.Element;
  prefix?: string;
}

export const UploadObjectDialog = ({ trigger }: UploadObjectDialogProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Upload file</DialogTitle>
          <DialogDescription>
            Select the file or directory you want to upload, and choose the path
            where it will be saved.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          <div className="space-y-1.5">
            <Label>Selected path</Label>
            <Input />
          </div>
          <div className="space-y-1.5">
            <Label>Choose file or folder</Label>
            <Input type="file" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
