import { FunctionComponent, InputHTMLAttributes } from "react"


import commonStyles from '../_CommonStyles/FieldCommonStyles.module.css'

import clsx from "clsx"

import { ElementFieldExceptionType, ElementFieldVariantType, ElementSizeType } from "@models/Ui"

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, ElementFieldExceptionType> {
  variant: ElementFieldVariantType,
  size?: ElementSizeType
}

const TextField: FunctionComponent<TextFieldProps> = (props) => {

  const {
    variant = 'default',
    size = 'sm',
    ...rest
  } = props

  return <input
    type='text'
    onBlur={() => alert('asdasdas')}
    className={clsx({
      //variants
      [commonStyles.rounded]: variant === 'rounded',
      [commonStyles.default]: variant === 'default',

      //sizes
      [commonStyles.xsBtn]: size === 'xs',
      [commonStyles.smBtn]: size === 'sm',
      [commonStyles.mdBtn]: size === 'md',
      [commonStyles.lgBtn]: size === 'lg',
      [commonStyles.xlBtn]: size === 'xl',

    })} {...rest} />

}

export default TextField