import Header from "@components/ui/prototypes/Header/Header";
import { FunctionComponent, HTMLProps } from "react";
import styles from './MainLayout.module.css'

interface MainLayoutProps extends HTMLProps<HTMLElement> {

}

const MainLayout: FunctionComponent<MainLayoutProps> = (props) => {



  return <main className={styles.container}>
    <Header />
    {props.children}
  </main>
}

export default MainLayout