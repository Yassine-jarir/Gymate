import { SelectedPage } from "@/Shared/Types";
import Logo from "@/assets/Logo.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Footer({ setSelectedPage }: Props) {
  return (
    <footer className="bg-primary-100" id="about">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.about)}>
        <div className="md:flex justify-center p-[1.5rem] gap-[1.5rem]">
          <div className="w w-[46%] my-14">
            <img src={Logo} alt="" className="pb-6" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              debitis velit voluptatem assumenda optio enim ab sint a atque qui.
            </p>
            <p>&copy; 2023 GYMATE. All rights reserved.</p>
          </div>
          <div className=" my-14">
            <h1 className="pb-6 font-black">Links</h1>
            <p>debitis velit voluptatem</p>
            <p>consectetur adipisicing </p>
            <p>ab sint a atque qui.</p>
          </div>
          <div className=" my-14">
            <h4 className="pb-6 font-black">Contact Us</h4>
            <p>dolor sit amet consectetur adipisicing elit.</p>
            <p>(333)717-655</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
