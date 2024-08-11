import { FunctionComponent, InputHTMLAttributes } from "react"


interface NumericFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'styles' | 'type'> {

}


const NumericField: FunctionComponent<NumericFieldProps> = (props) => {


  return (
    <input type="number" {...props} />
  )
}


export default NumericField