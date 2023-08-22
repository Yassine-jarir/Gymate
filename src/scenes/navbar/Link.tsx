import { SelectedPage } from "@/Shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  page: string;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
