import { InputHTMLAttributes } from "react";

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    state?: string;
    width?: string;
    icon?: string;
}

export type InputStateType =
  | "DEFAULT"
    "SUCCESS"
    "CRITICAL";