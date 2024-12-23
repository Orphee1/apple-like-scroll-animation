import { twMerge } from 'tailwind-merge'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge('mx-auto max-w-[980px] px-6', className)}>
      {children}
    </div>
  )
}

export default Container
