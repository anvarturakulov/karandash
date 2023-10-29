import { DocumentModel, DocumentTableItem } from "@/app/interfaces/documents/mainDocument.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DocumentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    document?: DocumentModel
    documentType: string,
    documentTableArray?: Array<DocumentTableItem>
}