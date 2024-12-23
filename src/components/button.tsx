import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button = ({ children, size = 'md', className }: Props) => {
  const sizeClassName = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      className={twMerge(
        'bg-white text-textBlack rounded-full',
        sizeClassName[size],
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
