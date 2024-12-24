import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { ReactNode } from "react";

interface Style {
  info?: Info[];
  info1?: InfoItem[];
  type?: string;
}

export const RevealBento = ({ info, type, info1 }: Style) => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        {type === "profile" && <HeaderBlock info={info} />}
        {type === "social" && <SocialsBlock info1={info1} />}
        {type === "social" && <SocialsBlock info1={info1} />}
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
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

interface Info {
  className?: string;
  src?: string;
  text?: string;
  link?: string;
}

const HeaderBlock = ({ info }: Style) => (
  <>
    {info &&
      info.map((info) => (
        <Block className={info.className}>
          <img
            src={info.src}
            alt="avatar"
            className="mb-4 size-14 rounded-full"
          />
          <h1 className="mb-12 text-4xl font-medium leading-tight">
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
            className={`col-span-6 ${i.bgColor} md:col-span-3`}
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
