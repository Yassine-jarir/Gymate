import { SelectedPage } from "@/Shared/Types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from "@/Shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Contactus({ setSelectedPage }: Props) {
  const inputStyles = `mb-10 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="ms-auto w-5/6 pt-24 pb-32 m-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </Htext>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem
            at, explicabo similique commodi consequatur nobis adipisci
            consectetur! Itaque sed, repellendus minus dolorum rerum omnis.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className=" mt-10 justify-beetween gap-8 md:flex ">
          {/* FORM */}
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 }, // y + 50 hidden than 0 y
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank" // go to new page
              onSubmit={onSubmit}
              method="POST"
              action="http://formsubmit.co/yassinejr1999@gmail.com"
            >
              <input
                type="text"
                placeholder="name"
                className={inputStyles}
                {...register("name", {
                  required: "name is required",
                  maxLength: {
                    value: 20,
                    message: "max length is 20 ",
                  },
                })}
              />
              {errors.name && (
                <p
                  className="mt-1 text-primary-500
                
                "
                >{`${errors.name.message}`}</p>
              )}

              <input
                type="text"
                placeholder="email"
                className={inputStyles}
                {...register("email", {
                  required: "email is required",
                })}
              />
              {errors.email && (
                <p
                  className="mt-1 text-primary-500
                
                "
                >{`${errors.email.message}`}</p>
              )}

              <textarea
                rows={4}
                cols={5}
                placeholder="Message"
                className={inputStyles}
                {...register("Message", {
                  required: "Message is req uired",
                  maxLength: {
                    value: 20,
                    message: "max length is 20 ",
                  },
                })}
              />
              {errors.Message && (
                <p
                  className="mt-1 text-primary-500
                
                "
                >{`${errors.Message.message}`}</p>
              )}
              <button
                className={`mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white`}
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 }, // y + 50 hidden than 0 y
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:absolute md:before:-bottom-20 md:before:-z-[1] md:before:content-evolvetext md:before:-left-96">
              <img
                src={ContactUsPageGraphic}
                alt="contactus"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contactus;
