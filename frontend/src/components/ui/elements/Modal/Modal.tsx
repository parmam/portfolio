import { FunctionComponent, HTMLProps } from "react";

interface ModalProps extends Omit<HTMLProps<HTMLElement>, 'style'> {

}

const Modal: FunctionComponent<ModalProps> = (props) => {

  return <div className={props.className}>
    {props.children}
  </div>
}



export default Modal