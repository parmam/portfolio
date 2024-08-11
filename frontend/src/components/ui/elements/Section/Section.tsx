import { FunctionComponent, HTMLProps } from "react"
import styles from './Section.module.css'

import { Loader } from '@components/ui/elements'

import clsx from "clsx"

interface SectionProps extends Omit<HTMLProps<HTMLElement>, 'style'> {
  paddingX?: 'px-xs' | 'px-sm' | 'px-md'
  paddingY?: 'py-xs' | 'py-sm' | 'py-md'
  isLoading?: boolean
}

const Section: FunctionComponent<SectionProps> = (props) => {
  return (
    <section className={clsx(styles.root, {
      //paddingX
      [styles.pxXs]: props.paddingX === 'px-xs',
      [styles.pxSm]: props.paddingX === 'px-sm',
      [styles.pxMd]: props.paddingX === 'px-md',


      //paddingY
      [styles.pyXs]: props.paddingY === 'py-xs',
      [styles.pySm]: props.paddingY === 'py-sm',
      [styles.pyMd]: props.paddingY === 'py-md'


    }, props.className)} {...props}>

      {props.isLoading ? <Loader variant='button' color='secondary' /> : props.children}
    </section>
  )
}



export default Section