import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { ReactNode } from "react";

interface Style {
  info?: Info[];
  info1?: InfoItem[];
  info2?: InfoItem[];
  type?: string;
}

export const RevealBento = ({ info, info1, info2 }: Style) => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense  grid-cols-12 gap-4"
      >
        <SocialsBlock info1={info1} />
        <HeaderBlock info={info} />
        <SocialsBlock info1={info2} />
      </motion.div>
    </div>
  );
};

type Props = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-3xl border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

interface Info {
  src?: string;
  text?: string;
  link?: string;
  classname?: string;
}

const HeaderBlock = ({ info }: Style) => (
  <>
    {info &&
      info.map((info) => (
        <Block className={info.classname}>
          <img
            src={info.src}
            alt="avatar"
            className="mb-4 size-14 rounded-full"
          />
          <h1 className="mb-12 text-4xl font-medium leading-tight bg-gradient-to-t from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            {info.text}
            <span className="text-zinc-400">{info.link}</span>
          </h1>
          <a
            href="#"
            className="flex items-center gap-1 text-red-300 hover:underline"
          >
            Contact me <FiArrowRight />
          </a>
        </Block>
      ))}
  </>
);

interface InfoItem {
  rotate: string;
  bgColor: string;
  href: string;
  textColor: string;
  icon: ReactNode;
  col?: string;
}
const SocialsBlock = ({ info1 }: Style) => {
  console.log(info1?.map((i) => i.bgColor));

  return (
    <>
      {info1 &&
        info1.map((i, index) => (
          <Block
            key={index}
            whileHover={{
              rotate: i.rotate,
              scale: 1.1,
            }}
            className={`${index === 1 ? "col-span-12" : "col-span-6"} ${
              i.bgColor
            } min-h-40 ${index === 1 ? "sm:col-span-6" : "sm:col-span-3"}`}
          >
            <a
              href={i.href}
              className={`grid h-full place-content-center text-3xl ${i.textColor}`}
            >
              {i.icon}
            </a>
          </Block>
        ))}
    </>
  );
};
