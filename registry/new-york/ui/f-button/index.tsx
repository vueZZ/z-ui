import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot"

export function FButton({className, asChild = false, ...props}: React.ComponentProps<"button"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp data-slot="f-button" className={cn('border border-2 border-solid size-25 rounded-md',className)} {...props}>
    </Comp>
  );
}
