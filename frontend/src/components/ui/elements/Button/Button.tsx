import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styles from './Button.module.css'
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style'> {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary';
  leftIcon?: IconProp;
  rightIcon?: IconProp;
}

const Button: FunctionComponent<ButtonProps> = props => {

  // extract props and define default values
  const {
    size = 'medium',
    variant = 'primary',
    label,
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  return (
    <button
      className={clsx(styles.root, {
        // Sizes
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        // Variants
        [styles.primary]: variant === 'primary'
      })}
      {...rest}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}

      {label}

      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
};

export default Button;
