"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  placeholder: string;
};

const SearchInput = ({ className, placeholder }: Props) => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const urlParams = new URLSearchParams();

  const handleSearch = useDebouncedCallback(function (
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { value } = event.target;
    urlParams.set("page", "1");
    value ? urlParams.set("query", value) : urlParams.delete("query");
    replace(`${pathName}?${urlParams.toString()}`);
  },
  800);
  return (
    <Input
      onChange={handleSearch}
      type="text"
      className={cn("w-1/2", className)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
