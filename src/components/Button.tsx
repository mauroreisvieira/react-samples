import React from "react";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "../types/Polymorphic";

interface ButtonBaseProps {
  children: React.ReactNode;
  skin?: "primary" | "secondary";
}

type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, ButtonBaseProps>;

type ButtonComponent = <C extends React.ElementType = "span">(
  props: ButtonProps<C>
) => React.ReactElement | null;

export const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = "button">(
    { as, skin = "primary", children, ...other }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "button";

    return (
        <Component {...other} className={skin} ref={ref}>
            {children}
        </Component>
    );
  }
);

Button.displayName = "Button";
