interface ElementDefaultProps {
  children?: any
  [option: string]: any
}

interface TextProps extends ElementDefaultProps {
  size?: string
  weight?: 'regular' | 'bold'
  color?: string
}

interface ButtonProps extends ElementDefaultProps {
  type: 'A' | 'B'
  color?: string
  fontColor?: string
}

interface InputProps extends ElementDefaultProps {
  type?: string
}
