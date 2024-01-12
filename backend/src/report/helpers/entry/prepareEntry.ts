import { DocTableItem, Document } from 'src/document/models/document.model';
import { getValuesForEntry } from './getValuesForEntry';

export const prepareEntry = (item: Document, tableItem?: DocTableItem, newEntryForCharges?: boolean ) => {
  // let hasTableItems = hasDocumentTablePart(item.documentType);
  return {
    date: item.date,
    docNumber: item.docNumber,
    documentType: item.documentType,
    comment: tableItem?.comment || item.comment,
    docId: '',
    ...getValuesForEntry(item, tableItem, newEntryForCharges)
  }
}