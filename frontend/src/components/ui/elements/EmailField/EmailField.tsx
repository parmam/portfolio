import { FunctionComponent, InputHTMLAttributes, useState, FocusEvent } from "react"

import commonStyles from '../_CommonStyles/FieldCommonStyles.module.css'
import clsx from "clsx"

import { ElementFieldExceptionType, ElementFieldVariantType, ElementSizeType } from "@models/Ui"
import { isValidEmail } from "@libs/validations/fields.validation"

interface EmailFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, ElementFieldExceptionType> {
  variant: ElementFieldVariantType,
  size?: ElementSizeType,
}

const EmailField: FunctionComponent<EmailFieldProps> = (props) => {

  const [error, setError] = useState(false)

  const {
    variant = 'default',
    size = 'sm',
    ...rest
  } = props

  const validationHandler = (event: FocusEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const isValid = isValidEmail(email);
    setError(!isValid);
  }
  return (
    <>
      <input
        onBlur={validationHandler}
        type="text"
        className={clsx({
          // variants
          [commonStyles.rounded]: variant === 'rounded',
          [commonStyles.default]: variant === 'default',

          // sizes
          [commonStyles.xsBtn]: size === 'xs',
          [commonStyles.smBtn]: size === 'sm',
          [commonStyles.mdBtn]: size === 'md',
          [commonStyles.lgBtn]: size === 'lg',
          [commonStyles.xlBtn]: size === 'xl',
        })}
        {...rest}
      />
      {error && <span>email invalido</span>}
    </>
  );
}

export default EmailField