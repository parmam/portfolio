import { FunctionComponent, HTMLProps, ReactNode } from "react";
import styles from './AuthLayout.module.css'

interface AuthLayoutProps extends HTMLProps<HTMLElement> {
  leftSlot?: ReactNode
  rightSlot?: ReactNode

}

const AuthLayout: FunctionComponent<AuthLayoutProps> = (props) => {



  return <div className={styles.container}>
    <main className={styles.content}>
      {props.leftSlot &&
        <section>
          {props.leftSlot}
        </section>
      }
      {
        props.rightSlot &&
        <section>
          {props.rightSlot}
        </section>
      }
    </main>
  </div>
}

export default AuthLayout