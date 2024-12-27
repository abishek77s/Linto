import { RevealBento } from "./components/Bento";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";

const info = [
  {
    text: "RADEON",
    text1: "RX 6700 XT",
    classname:
      " col-span-3 h-[236px] md:col-span-3 sm:col-span-12 font-geist bg-gradient-to-t from-[#b91c1c] via-[#ef4444] to-[#fca5a5]",
    type: "GPU",
  },
  {
    link: "Im Abishek",

    classname: "col-span-6 h-[236px] md:col-span-6 sm:col-span-12  ",
  },
  {
    text1: "7 7800 3D",
    text: "RYZEN",

    classname:
      " col-span-3 h-[236px] md:col-span-3 sm:col-span-12 font-geist bg-gradient-to-t from-[#FFB948] via-[#f59e0b] to-[#EC5600] ",
    type: "CPU",
  },
];

const info1 = [
  {
    rotate: "2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-white",
    icon: <SiYoutube />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-white",
    icon: <SiGithub />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-black",
    icon: <SiTiktok />,
  },
];

const info2 = [
  {
    rotate: "2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-white",
    icon: <SiYoutube />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-white",
    icon: <SiGithub />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-black",
    icon: <SiTiktok />,
  },
];

function App() {
  return (
    <>
      <RevealBento info={info} info1={info1} info2={info2} type="profile" />
    </>
  );
}

export default App;
