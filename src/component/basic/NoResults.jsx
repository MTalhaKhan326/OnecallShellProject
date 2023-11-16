import { MdOutlineBrokenImage } from "react-icons/md";
import Center from "./Center.jsx";

function NoResults({ text = "No Results" }) {
  return (  
    <Center>
      <div className="my-8">
        <div><MdOutlineBrokenImage size={"25px"} className="mx-auto block my-2 text-slate-500" /></div>
        <div className="text-[15px] text-slate-500">{text}</div>
      </div>
    </Center>
  );
}

export default NoResults;