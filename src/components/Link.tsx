
import linkClickedType from "./types";
import { linkContext } from "@/Navbar";
import { useContext } from "react";
//
//
//
interface Props {
  name: string;
}
//
//
//
const Link = ({ name }: Props) => {
  const setLinkClicked=useContext(linkContext).setLinkClicked
  const nameLowered = name.toLowerCase().replace(" ", "") as linkClickedType //TODO: make link for menus that dont dropdown
  return (
    <>
      <button className="hover:text-blue-600" onClick={()=>setLinkClicked(nameLowered)}>{nameLowered}</button>
    </>
  );
};

export default Link;
