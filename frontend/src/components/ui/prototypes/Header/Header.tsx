import { FunctionComponent, HTMLProps } from "react";
import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import useWindowSize from "@hooks/useWindowSize";
import { navItems } from "./model";
import { Link } from "react-router-dom";

interface HeaderProps extends HTMLProps<HTMLElement> {}

const Header: FunctionComponent<HeaderProps> = (props) => {

  const { isMobile } = useWindowSize()


  return (
    <header className={styles.header}>
          <div>logo</div>
          <nav className={styles.navContainer}>
            {
              navItems.map(item => <Link to={item.route}>{item.text}</Link>)
            }
          </nav>
          <div className={styles.buttonsContainer}>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faSearch}/>
            {isMobile &&  <div>hamburger</div>}
          </div>
    </header>
  );
}

export default Header;