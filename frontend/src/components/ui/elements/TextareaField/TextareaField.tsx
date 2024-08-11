import { FunctionComponent, TextareaHTMLAttributes } from "react"

interface TextareaFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'styles' | 'type'> {

}


const TextareaField: FunctionComponent<TextareaFieldProps> = (props) => {


  return <textarea {...props} />
}

export default TextareaField