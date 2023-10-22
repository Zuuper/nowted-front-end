import { cn } from "@/utils/componentController"
import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-medium', {
  variants: {
    variant: {
      default: 'bg-primary-500 text-white hover:bg-primary-300',
      ghost: 'bg-white bg-opacity-5 hover:bg-opacity-30 text-white'
    },
    size: {
      default: 'h-12 p-4 min-w-[40px]',
      sm: 'h-8 p-2 min-w-[24px]',
      lg: 'h-16 p-8 min-w-[48px]'
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default'
  }
})
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> { }
export const Button = ({ children, className, variant, size, ...rest }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...rest}>
    {children}
  </button>
}

