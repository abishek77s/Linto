import { RevealBento } from "./components/Bento";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";

const info = [
  {
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Im Abishek",
    text: "Ohayo! ",
    classname: "col-span-3 h-[520px] md:col-span-3 sm:col-span-12",
  },
  {
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Im Abishek",
    text: "Ohayo! ",
    classname: "col-span-6 h-[340px] md:col-span-6 sm:col-span-12",
  },
  {
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Im Abishek",
    text: "Ohayo! ",
    classname: "col-span-3 h-[340px] md:col-span-3 sm:col-span-12",
  },
];

const info1 = [
  {
    rotate: "2.5deg",
    bgColor: "bg-red-500",
    href: "#",
    textColor: "text-white",
    icon: <SiYoutube />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-green-600",
    href: "#",
    textColor: "text-white",
    icon: <SiGithub />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-zinc-50",
    href: "#",
    textColor: "text-black",
    icon: <SiTiktok />,
  },
];

const info2 = [
  {
    rotate: "2.5deg",
    bgColor: "bg-red-500",
    href: "#",
    textColor: "text-white",
    icon: <SiYoutube />,
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-green-600",
    href: "#",
    textColor: "text-white",
    icon: <SiGithub />,
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
