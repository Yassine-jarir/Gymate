import Htext from "@/Shared/Htext";
import { SelectedPage, BenefitType } from "@/Shared/Types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionBtn from "@/Shared/ActionBtn";
import benefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-5 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum dicta quod repellendus, velit ex.",
  },
  {
    icon: <UserGroupIcon className="h-5 w-6" />,
    title: "100's of Divers Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum dicta quod repellendus, velit ex.",
  },
  {
    icon: <AcademicCapIcon className="h-5 w-6" />,
    title: "Expert and pro trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum dicta quod repellendus, velit ex.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="Benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*  HEADER  */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eius aut autem vero suscipit pariatur ut laudantium odio facere
            dolore iure maiores enim magni sint quos dolorem, deleniti, et
            consequuntur?
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="flex mt-16 items-center justify-between gap-20 md:mt-28 flex-col md:flex ">
          {/* GRAPHIC */}
          <img
            src={benefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* DESCRIP */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                aperiam illo repellat velit recusandae, maiores optio eaque
                voluptate nostrum tempora perferendis culpa. Debitis, molestias
                asperiores.
              </p>
              <p className="my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis et enim soluta nisi excepturi laborum.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionBtn setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionBtn>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
