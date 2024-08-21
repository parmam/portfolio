import { FunctionComponent, HTMLProps } from "react";
import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import useWindowSize from "@hooks/useWindowSize";
import { navItems } from "./model";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "@components/ui/components";

interface HeaderProps extends HTMLProps<HTMLElement> {}

const Header: FunctionComponent<HeaderProps> = (props) => {

  const { isMobile } = useWindowSize()


  return (
    <header className={styles.header}>
          <HamburgerMenu />

    </header>
  );
}

export default Header;