import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Style {
  info?: Info[];
  info1?: InfoItem[];
  info2?: InfoItem[];
  type?: string;
}

export const RevealBento = ({ info, info1, info2 }: Style) => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 text-zinc-50 ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-3 font-geist"
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
        "col-span-4 rounded-2xl border  bg-[#E9E9E9] p-6",
        className
      )}
      {...rest}
    />
  );
};

interface Info {
  src?: string;
  text?: string;
  text1?: string;
  text2?: string;
  link?: string;
  classname?: string;
  type?: string;
}

const HeaderBlock = ({ info }: Style) => (
  <>
    {info &&
      info.map((info) => (
        <Block className={`${info.classname} flex flex-col justify-center`}>
          <p className="flex items- w-full text-sm font-mono text-zinc-100 hover:underline">
            {info.type}
          </p>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="mb-1 text-4xl font-medium leading-tight text-center">
                {info.text}
              </h1>
              <p className="mb-2 text-lg font-medium leading-tight text-center font-geist-mono">
                {info.text1}
              </p>
            </div>
          </div>
        </Block>
      ))}
  </>
);

interface InfoItem {
  rotate: string;
  bgColor: string;
  href: string;
  textColor: string;
  text?: string;
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
            } min-h-36 ${index === 1 ? "sm:col-span-6" : "sm:col-span-3"}`}
          >
            <p
              className={`grid h-full place-content-center text-3xl ${i.textColor}`}
            >
              {i.text}
            </p>
          </Block>
        ))}
    </>
  );
};
