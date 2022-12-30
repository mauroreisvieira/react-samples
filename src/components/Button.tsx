import React, { forwardRef } from "react";
import { classNames } from "../utils";
import {
    PolymorphicPropsWithRef,
    PolymorphicPropsWithoutRef,
    PolymorphicForwardRefExoticComponent,
} from "../types/Polymorphic";
const defaultElement = "button";

interface ButtonOwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "medium" | "large";
    skin?: "primary" | "secondary";
    svgIcon?: React.HTMLAttributes<SVGElement>;
}

export type ButtonProps<T extends React.ElementType = typeof defaultElement> =
    PolymorphicPropsWithRef<ButtonOwnProps, T>;

export const Button: PolymorphicForwardRefExoticComponent<
    ButtonOwnProps,
    typeof defaultElement
> = forwardRef(
    <T extends React.ElementType = typeof defaultElement>(
        {
            as,
            skin = "primary",
            size = "medium",
            svgIcon,
            className,
            disabled,
            onClick,
            children,
            ...restProps
        }: PolymorphicPropsWithoutRef<ButtonOwnProps, T>,
        ref: React.ComponentPropsWithRef<T>["ref"]
    ): React.ReactElement => {
        const Element = as || defaultElement;
        const rootClassName = "button";
        const computedClasses = classNames(
            rootClassName,
            `${rootClassName}--${skin}`,
            `${rootClassName}--${size}`,
            disabled && "is-disabled",
            className
        );

        const onHandleClick = (
            e: React.MouseEvent<HTMLButtonElement>
        ): void => {
            if (disabled) return;
            if (onClick) onClick(e);
        };

        return (
            <Element
                ref={ref}
                tabIndex={disabled ? -1 : 0}
                class={computedClasses}
                onClick={onHandleClick}
                {...restProps}
            >
                {svgIcon && (
                    <span>
                        <svg {...svgIcon} />
                    </span>
                )}
                {children}
            </Element>
        );
    }
);

Button.displayName = "Button";
