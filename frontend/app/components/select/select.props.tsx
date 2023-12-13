import { ReferenceType } from "../../interfaces/reference.interface";
import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    label: string,
    referenceType: ReferenceType,
    visibile?: boolean
}