"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  size?: "default" | "sm" | "icon";
};

const Button = ({ asChild = false, className, size = "default", ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return <Comp data-size={size} className={cn(styles.button, className)} {...props} />;
};

export default Button;
