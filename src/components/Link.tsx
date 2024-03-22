
import linkClickedType from "./types";
import { linkContext } from "@/Navbar";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
//
//
//
interface Props {
  name: string;
  expand?:boolean
}
//
//
//
const Link = ({ name, expand=false }: Props) => {
  const setLinkClicked=useContext(linkContext).setLinkClicked
  const nameLowered = name.toLowerCase().replace(" ", "") as linkClickedType //TODO: add underline on active link
  return (
    <>
      <button className="hover:text-blue-600 font-semibold px-4 py-2 text-[#172b4d]" onClick={()=>expand ? setLinkClicked(nameLowered): undefined}>
        <span className="flex items-center justify-center">  
        {name}{expand&&<ChevronDownIcon className="size-4"/>}
        </span>
        </button>
    </>
  );
};

export default Link;
