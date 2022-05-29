import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { className, children } = props
  return (
    <button className={[className, styles['button']].join(' ')} {...props}>
      {children}
    </button>
  )
}

export default Button
