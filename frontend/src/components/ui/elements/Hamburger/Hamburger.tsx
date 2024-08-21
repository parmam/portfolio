import { FunctionComponent, HTMLProps } from "react";

import styles from './Hamburger.module.css'
import clsx from "clsx";




interface HamburgerProps extends Omit<HTMLProps<HTMLDivElement>, 'style'>{
    isActive:boolean
}

const Hamburger: FunctionComponent<HamburgerProps> = (props) => {
    const { isActive, className, ...rest } = props;

    return (
        <div className={clsx(styles.navIcon5, { [styles.open]: isActive }, className)} {...rest}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </div>
    );
}

export default Hamburger