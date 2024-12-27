import { RevealBento } from "./components/Bento";

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
    textColor: "text-black font-medium",
    text: "Corsair 750W",
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor:
      "bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text font-bold",
    text: "G.Skill Flare X5",
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-black font-medium",
    text: "Thermalright",
  },
];

const info2 = [
  {
    rotate: "2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-black font-medium",
    text: "Montech Air 900 ARGB",
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor:
      "bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text font-bold",
    text: "Gigabyte B550 ATX",
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-[#E9E9E9]",
    href: "#",
    textColor: "text-black font-medium",
    text: "2 TB M.2",
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
