import React, { forwardRef } from "react";
import { classNames } from "../utils";
import {
    PolymorphicPropsWithRef,
    PolymorphicForwardRefExoticComponent,
} from "../types/Polymorphic";

const defaultElement = "p";

const SizeMap = {
    h1: "font-bold text-5xl",
    h2: "font-bold text-4xl",
    h3: "font-bold text-3xl",
    h4: "font-bold text-2xl",
    h5: "font-bold text-xl",
    h6: "font-bold text-base",
    a: "text-base",
    p: "text-base",
};

interface TypographyOwnProps
    extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
    size?: keyof typeof SizeMap;
}

export type TypographyProps<
    T extends React.ElementType = typeof defaultElement
> = PolymorphicPropsWithRef<TypographyOwnProps, T>;

export const Typography: PolymorphicForwardRefExoticComponent<
    TypographyOwnProps,
    typeof defaultElement
> = forwardRef(
    <T extends React.ElementType = typeof defaultElement>(
        {
            as,
            size,
            className,
            ...restProps
        }: PolymorphicPropsWithRef<TypographyOwnProps, T>,
        ref: React.ComponentPropsWithRef<T>["ref"]
    ) => {
        const Element = as || defaultElement;

        const defaultSize =
            size ||
            (Object.keys(SizeMap).find(
                (key) => key === as
            ) as TypographyOwnProps["size"]);

        const computedClasses = classNames(
            defaultSize && SizeMap[defaultSize],
            className
        );

        return <Element ref={ref} className={computedClasses} {...restProps} />;
    }
);

Typography.displayName = "Typography";
