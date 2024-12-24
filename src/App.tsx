import { RevealBento } from "./components/Bento";
import { SiGithub, SiTiktok, SiYoutube, SiTwitch } from "react-icons/si";

const info = [
  {
    className: "col-span-12 row-span-2 md:col-span-6",
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Im Abishek",
    text: "Ohayo! ",
  },
  {
    className: "col-span-12 row-span-2 md:col-span-6",
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Linto",
    text: "Day 1 ",
  },
  {
    className: "col-span-6 bg-red-500 md:col-span-3",
    src: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
    link: "Linto",
    text: "Day 1 ",
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
  {
    rotate: "2.5deg",
    bgColor: "bg-purple-500",
    href: "#",
    textColor: "text-white",
    icon: <SiTwitch />,
  },
];

function App() {
  return (
    <>
      <RevealBento info={info} type="profile" />
      <RevealBento info1={info1} type="social" />
    </>
  );
}

export default App;
