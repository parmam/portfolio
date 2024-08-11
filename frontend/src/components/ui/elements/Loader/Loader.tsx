import { FunctionComponent } from "react";
import styles from './Loader.module.css'
import clsx from "clsx";


interface LoaderProps {
  variant: 'body' | 'button',
  color: 'primary' | 'secondary'
}

const Loader: FunctionComponent<LoaderProps> = (props) => {
  return (
    <div className={styles.root}>
      <div className={clsx({
        [styles.loader]: props.variant === 'body',
        [styles.loaderBody]: props.variant === 'body',
        [styles.dots]: props.variant === 'button',

        [styles.primary]: props.color === 'primary',
        [styles.secondary]: props.color === 'secondary'

      })}></div>
    </div>
  )
}


export default Loader