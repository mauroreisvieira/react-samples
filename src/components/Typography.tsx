import React, { forwardRef } from "react";
import {
    PolymorphicPropsWithRef,
    PolymorphicPropsWithoutRef,
    PolymorphicForwardRefExoticComponent,
} from "../types/Polymorphic";

const defaultElement = "p";

interface TypographyOwnProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    skin?: "primary" | "secondary";
}

export type TypographyProps<T extends React.ElementType = typeof defaultElement> =
    PolymorphicPropsWithRef<TypographyOwnProps, T>;

export const Typography: PolymorphicForwardRefExoticComponent<
    TypographyOwnProps,
    typeof defaultElement
> = forwardRef(
    <T extends React.ElementType = typeof defaultElement>(
        {
            as,
            skin,
            ...restProps
        }: PolymorphicPropsWithoutRef<TypographyOwnProps, T>,
        ref: React.ComponentPropsWithRef<T>["ref"],
    ) => {
        const Element = as || defaultElement;

        return <Element ref={ref} class={skin} {...restProps} />;
    }
);

Typography.displayName = "Typography";
