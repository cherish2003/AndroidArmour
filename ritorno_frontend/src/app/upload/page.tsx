"use client";
import React from "react";
import Appsidebar from "@/components/global/app-sidebar";
import { BlobUpload } from "@/components/file-upload/upload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const Uploads = () => {
  const [open, setOpen] = React.useState(false);
  const [downloadUrl, setDownloadUrl] = React.useState<string | null>(null);

  return (
    <Appsidebar first="AndroidArmour" second="upload">
      <div className="flex flex-col items-center justify-center w-full space-y-4">
        <div className="flex flex-col items-center justify-center w-full">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Upload className="mr-2 h-6 w-6" />
                File upload
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Upload your files
                </DialogTitle>
                <DialogDescription className="text-center">
                  The only file upload you will ever need
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <BlobUpload
                  open={open}
                  setOpen={setOpen}
                  setDownloadUrl={setDownloadUrl}
                  downloadUrl={downloadUrl}
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {downloadUrl && (
            <Button
              variant="outline"
              onClick={() => {
                if (downloadUrl) {
                  window.open(downloadUrl, "_blank");
                }
              }}
            >
              Download APK
            </Button>
          )}
        </div>
      </div>
    </Appsidebar>
  );
};
export default Uploads;
