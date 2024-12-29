import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const Apptype = ({
  setshowSecuritytypes,
  setShowAppType,
}: {
  setshowSecuritytypes: any;
  setShowAppType: any;
}) => {
  const [appType, setAppType] = React.useState("");
  const handleChange = () => {
    setshowSecuritytypes(true);
    setShowAppType(false);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h2 className="mb-4 text-xl font-bold dark:text-white">
        Select App Type
      </h2>
      <Select onValueChange={(value) => setAppType(value)}>
        <SelectTrigger className="w-72 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-md">
          <SelectValue placeholder="Choose app type" />
        </SelectTrigger>
        <SelectContent className="w-72 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-md">
          <SelectItem value="social media">Social Media App</SelectItem>
          <SelectItem value="gaming">Gaming App</SelectItem>
          <SelectItem value="fintech">Fintech App</SelectItem>
          <SelectItem value="streaming">Streaming App</SelectItem>
          <SelectItem value="ecommerce">E-commerce App</SelectItem>
        </SelectContent>
      </Select>

      {appType && (
        <>
          <div className="mt-4 text-lg dark:text-white">
            You selected: <strong>{appType}</strong>
          </div>
          <Button
            variant={"outline"}
            className="mt-2 ml-96"
            onClick={handleChange}
          >
            Continue
          </Button>
        </>
      )}
    </div>
  );
};
