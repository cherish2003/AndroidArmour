"use client";

import {
  AudioWaveform,
  File,
  FileImage,
  FolderArchive,
  UploadCloud,
  Video,
  X,
} from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "../ui/input";
import { ProgressBar } from "../ui/progress";
import { ScrollArea } from "../ui/scroll-area";
import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/hooks/use-toast";
import { set } from "date-fns";

interface FileUploadProgress {
  progress: number;
  File: File;
}

enum FileTypes {
  Image = "image",
  Pdf = "pdf",
  Audio = "audio",
  Video = "video",
  Other = "other",
}

const ImageColor = {
  bgColor: "bg-purple-600",
  fillColor: "fill-purple-600",
};

const PdfColor = {
  bgColor: "bg-blue-400",
  fillColor: "fill-blue-400",
};

const AudioColor = {
  bgColor: "bg-yellow-400",
  fillColor: "fill-yellow-400",
};

const VideoColor = {
  bgColor: "bg-green-400",
  fillColor: "fill-green-400",
};

const OtherColor = {
  bgColor: "bg-gray-400",
  fillColor: "fill-gray-400",
};

const account = "sih2024";
const sasToken =
  "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2026-12-12T15:14:09Z&st=2024-12-12T07:14:09Z&spr=https,http&sig=Xzh0vPeX5dzY16lHXMlTw7e8KwjgUdPJw1g2AtxdsuM%3D";
const containerName = "sih";

export function BlobUpload({
  open,
  setOpen,
  setDownloadUrl,
  downloadUrl,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setDownloadUrl: (url: string | null) => void;
  downloadUrl: string | null;
}) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [filesToUpload, setFilesToUpload] = useState<FileUploadProgress[]>([]);

  const { toast } = useToast();

  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net?${sasToken}`
  );

  const containerClient = blobServiceClient.getContainerClient(containerName);

  const getFileIconAndColor = (file: File) => {
    if (file.type.includes(FileTypes.Image)) {
      return {
        icon: <FileImage size={40} className={ImageColor.fillColor} />,
        color: ImageColor.bgColor,
      };
    }

    if (file.type.includes(FileTypes.Pdf)) {
      return {
        icon: <File size={40} className={PdfColor.fillColor} />,
        color: PdfColor.bgColor,
      };
    }

    if (file.type.includes(FileTypes.Audio)) {
      return {
        icon: <AudioWaveform size={40} className={AudioColor.fillColor} />,
        color: AudioColor.bgColor,
      };
    }

    if (file.type.includes(FileTypes.Video)) {
      return {
        icon: <Video size={40} className={VideoColor.fillColor} />,
        color: VideoColor.bgColor,
      };
    }

    return {
      icon: <FolderArchive size={40} className={OtherColor.fillColor} />,
      color: OtherColor.bgColor,
    };
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setFilesToUpload((prevUploadProgress) => [
      ...prevUploadProgress,
      ...acceptedFiles.map((file) => ({
        progress: 0,
        File: file,
      })),
    ]);

    const fileUploadBatch = acceptedFiles.map(async (file) => {
      const blockBlobClient = containerClient.getBlockBlobClient(file.name);

      let lastProgress = 0;

      try {
        await blockBlobClient.uploadData(file, {
          onProgress: ({ loadedBytes }) => {
            const currentProgress = Math.round((loadedBytes / file.size) * 100);
            if (currentProgress !== lastProgress) {
              lastProgress = currentProgress;
              setFilesToUpload((prev) =>
                prev.map((fileProgress) =>
                  fileProgress.File === file
                    ? {
                        ...fileProgress,
                        progress: currentProgress,
                      }
                    : fileProgress
                )
              );
            }
          },
        });
        setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, file]);
      } catch (error) {
        console.error(`Error uploading ${file.name}: `, error);
      }
    });

    try {
      await Promise.all(fileUploadBatch);

      const response = await fetch("http://127.0.0.1:8000/apk-decompile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apk_url: `https://${account}.blob.core.windows.net/${containerName}/${acceptedFiles[0].name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Error calling backend API");
      }

      const data = await response.json();

      setDownloadUrl(data.url);
    } catch (error) {
      console.error("Error uploading files: ", error);
    }

    console.log("Backend API call completed successfully");

    setOpen(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label
          {...getRootProps()}
          className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-6 hover:bg-gray-100"
        >
          <div className="text-center">
            <div className="mx-auto max-w-min rounded-md border p-2">
              <UploadCloud size={20} />
            </div>

            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Drag files</span>
            </p>
            <p className="text-xs text-gray-500">
              Click to upload files &#40;files should be under 10 MB &#41;
            </p>
          </div>
        </label>

        <Input
          {...getInputProps()}
          id="dropzone-file"
          accept=".apk"
          type="file"
          className="hidden"
        />
      </div>

      <div className="flex items-center justify-center w-full py-4">
        {filesToUpload.length > 0 && !downloadUrl && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      {filesToUpload.length > 0 && (
        <div>
          <ScrollArea className="h-40">
            <p className="my-2 mt-6 text-sm font-medium text-muted-foreground">
              Files to upload
            </p>
            <div className="space-y-2 pr-3">
              {filesToUpload.map((fileUploadProgress) => {
                return (
                  <div
                    key={fileUploadProgress.File.lastModified}
                    className="group flex justify-between gap-2 overflow-hidden rounded-lg border border-slate-100 pr-2 hover:pr-0"
                  >
                    <div className="flex flex-1 items-center p-2">
                      <div className="text-white">
                        {getFileIconAndColor(fileUploadProgress.File).icon}
                      </div>

                      <div className="ml-2 w-full space-y-1">
                        <div className="flex justify-between text-sm">
                          <p className="text-muted-foreground">
                            {fileUploadProgress.File.name.slice(0, 25)}
                          </p>
                          <span className="text-xs">
                            {fileUploadProgress.progress}%
                          </span>
                        </div>
                        <ProgressBar
                          progress={fileUploadProgress.progress}
                          className={
                            getFileIconAndColor(fileUploadProgress.File).color
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div>
          <p className="my-2 mt-6 text-sm font-medium text-muted-foreground">
            Uploaded Files
          </p>
          <div className="space-y-2 pr-3">
            {uploadedFiles.map((file) => {
              return (
                <div
                  key={file.lastModified}
                  className="group flex justify-between gap-2 overflow-hidden rounded-lg border border-slate-100 pr-2 transition-all hover:border-slate-300 hover:pr-0"
                >
                  <div className="flex flex-1 items-center p-2">
                    <div className="text-white">
                      {getFileIconAndColor(file).icon}
                    </div>
                    <div className="ml-2 w-full space-y-1">
                      <div className="flex justify-between text-sm">
                        <p className="text-muted-foreground">
                          {file.name.slice(0, 25)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
