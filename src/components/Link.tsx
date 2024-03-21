interface Props {
  name: string;
}
import { linkContext } from "@/Navbar";
import { useContext } from "react";
const Link = ({ name }: Props) => {
  const {linkClicked, setLinkClicked}=useContext(linkContext)
  const nameLowered = name.toLowerCase().replace(" ", "")
  return (
    <>
      <button className="hover:text-blue-600" onDoubleClick={()=>console.log(linkClicked)} onClick={()=>setLinkClicked(nameLowered)}>{nameLowered}</button>
    </>
  );
};

export default Link;
