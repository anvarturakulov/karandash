import { DocumentModel, DocumentModelOnDataBase, DocumentState } from "../interfaces/documents/mainDocument.interface";
import { DocumentType } from "../interfaces/documents/mainDocument.interface";

export function convertDocumentState(value: string): DocumentState {
    const strEnum = value as unknown as DocumentState;
    if (Object.keys(DocumentState).includes(value)) {
        return DocumentState[strEnum]
    }
    return DocumentState.Error
}

export function convertDocumentType(value: string): DocumentType {
    const strEnum = value as unknown as DocumentType;
    if (Object.keys(DocumentType).includes(value)) {
        return DocumentType[strEnum]
    }
    return DocumentType.Error
}


export const ConvertDocuments = (data: Array<DocumentModelOnDataBase>):Array<DocumentModel> => {
    let d:Array<DocumentModel> = []
    data.forEach(item => {
        let obj:DocumentModel = {
            _id: item._id,
            date: item.date,
            state: convertDocumentState(item.state),
            senderId: item.senderId,
            receiverId: item.receiverId,
            tableData: {},
            documentType: convertDocumentType(item.documentType),    
        }
        d.push(obj)
    })
    return d
    
}