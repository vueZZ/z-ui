import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

function Border({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="border"
      className={cn(
        "border border-2 border-solid size-25 rounded-md",
        className,
      )}
      {...props}
    ></Comp>
  );
}

export { Border };
