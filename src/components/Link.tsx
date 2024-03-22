import linkClickedType from "./types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import MovingUnderline from "./MovingUnderline";
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
        className={`cursor-pointer px-4 py-2 font-semibold text-[#172b4d] hover:text-blue-600 ${linkClicked === nameLowered && "text-blue-600"}`}
        href={expand ? undefined : `${nameLowered}`}
        onClick={() => {
          expand ? setLinkClicked(nameLowered) : undefined;
        }}
      >
        <span className="flex items-center justify-center">
          <span className="relative">
            {useThisName}
            {linkClicked === nameLowered && (
                <MovingUnderline />
            )}
          </span>
          {expand && <ChevronDownIcon className="size-4" />}
        </span>
      </a>
    </>
  );
};

export default Link;
