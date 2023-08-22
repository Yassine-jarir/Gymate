import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./Types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionBtn({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionBtn;
