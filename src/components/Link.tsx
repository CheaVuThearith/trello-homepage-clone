import linkClickedType from "./types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { linkContext } from "@/Navbar";
//
//
//
interface Props {
  name: string;
  expand?: boolean;
}
//
//
//
const Link = ({ name, expand = false }: Props) => {
  const { linkClicked, setLinkClicked } = useContext(linkContext);
  const nameLowered = name
    .toLowerCase()
    .replace(" ", "")
    .replace("expand", "") as linkClickedType;
  const useThisName = name.replace("expand", "") as linkClickedType;
  return (
    <>
      <a
        className={`cursor-pointe flex h-full w-full items-center px-0 xl:px-4 py-2 text-xl font-semibold text-[#172b4d] hover:text-blue-600 xl:text-base xl:font-semibold ${linkClicked === nameLowered && "text-blue-600"}`}
        href={expand ? undefined : `${nameLowered}`}
        onClick={() => {
          expand ? setLinkClicked(nameLowered) : undefined;
        }}
      >
        <span className="flex w-full justify-between xl:items-center xl:justify-center">
          {useThisName}
          {expand && (
            <ChevronDownIcon className="size-6 -rotate-90 xl:size-4 xl:rotate-0" />
          )}
        </span>
      </a>
    </>
  );
};

export default Link;
