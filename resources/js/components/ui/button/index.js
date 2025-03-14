import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/90 ring-2 ring-transparent hover:ring-ring transition-all duration-300`,
        destructive: `bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300`,
        outline: `border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300`,
        ghost: `hover:bg-accent hover:text-accent-foreground transition-all duration-300`,
        link: `text-primary underline-offset-4 hover:underline transition-all duration-300`,
      },
      size: {
        default: `h-10 px-4 py-2`,
        xs: `h-7 rounded px-2`,
        sm: `h-9 rounded-md px-3`,
        lg: `h-11 rounded-md px-8`,
        icon: `h-10 w-10`,
      },
    },
    defaultVariants: {
      variant: `default`,
      size: `default`,
    },
  },
)
