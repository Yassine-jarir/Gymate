import { SelectedPage } from "@/Shared/Types";
import { motion } from "framer-motion";
import Htext from "@/Shared/Htext";
import images from "@/Shared/images";
import { useRef, useState, useEffect } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  const [scrollWidth, setscrollWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      const carouselElement = carousel.current;
      setscrollWidth(carouselElement.scrollWidth - carouselElement.offsetWidth);
    }
  }, []);
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>Our Classes</Htext>
            <p className="py-5 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              soluta illo sunt nemo sit sed sint neque asperiores, deserunt
              totam nulla velit, quia at molestiae!
            </p>
          </div>
          {/* SLIDER */}
        </motion.div>
        <motion.div
          ref={carousel}
          className="carousel cursor-grab overflow-hidden mx-auto w-5/6"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -scrollWidth }}
            className="inner-carousel flex "
          >
            {images.map((image: string) => {
              return (
                <motion.div
                  className="min-h-[18rem] min-w-[30rem] p-5"
                  key={image}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full rounded-lg object-cover pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default OurClasses;
