
type IconDefinition = unknown

export interface OptionItem {
  id: string;
  icon: IconDefinition;
  text: string;
  disabled?: boolean;
}


export type ElementSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ElementFieldVariantType = 'default' | 'rounded'

export type ElementFieldExceptionType = 'size' | 'className' | 'style' | 'type' | 'onBlur'