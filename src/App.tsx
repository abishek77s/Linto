import { RevealBento } from "./components/Bento";
import { SiGithub, SiTiktok, SiYoutube, SiTwitch } from "react-icons/si";

const info = [
  {
    className: "col-span-12 row-span-2 md:col-span-6 ",
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Im Abishek",
    text: "Ohayo! ",
  },
];

const info1 = [
  {
    rotate: "2.5deg",
    bgColor: "bg-red-500",
    href: "#",
    textColor: "text-white",
    icon: <SiYoutube />,
    col: "col-span-4",
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-green-600",
    href: "#",
    textColor: "text-white",
    icon: <SiGithub />,
    col: "col-span-6",
  },
  {
    rotate: "-2.5deg",
    bgColor: "bg-zinc-50",
    href: "#",
    textColor: "text-black",
    icon: <SiTiktok />,
    col: "col-span-4",
  },
];

function App() {
  return (
    <>
      <RevealBento info={info} info1={info1} type="profile" />
    </>
  );
}

export default App;
