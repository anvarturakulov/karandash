import { DocTableItem, Document } from 'src/document/models/document.model';
import { Schet } from 'src/interfaces/report.interface';
import { DocumentType } from 'src/interfaces/document.interface';
import { FounderObject } from '../prepareEntrysJournal';

export interface ResultgetValuesForEntry {
  debet: Schet,
  kredit: Schet,
  debetFirstSubcontoId: string,
  debetSecondSubcontoId: string,
  kreditFirstSubcontoId: string,
  kreditSecondSubcontoId: string,
  count: number,
  summa: number,
}

export const getValuesForEntry = (item: Document, newEntry: boolean, hasTable: boolean, tableItem: DocTableItem | undefined, isCash: boolean, founders: Array<FounderObject>): ResultgetValuesForEntry => {
  if (item) {
    let documentType = item.documentType;
    let { receiverId, senderId, analiticId, count, total, cashFromPartner, isPartner, isWorker, isFounder } = item
    
    const leaveComeTMZObj = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: count,
      summa: total,
    }

    let leaveMaterial = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: '',
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: '',
      count: 0,
      summa: 0,
    }

    if (hasTable && tableItem) {
      leaveMaterial = {
        debetFirstSubcontoId: senderId.toString(),
        debetSecondSubcontoId: receiverId.toString(),
        kreditFirstSubcontoId: senderId.toString(),
        kreditSecondSubcontoId: (item.tableItems?.length && !newEntry) ? tableItem.referenceId?.toString() : '',
        count: (item.tableItems?.length && !newEntry) ? tableItem.count : 0,
        summa: (item.tableItems?.length && !newEntry) ? tableItem.total : 0,
      }
    }
    
    const ZpCalculateObj = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: analiticId.toString(),
      kreditSecondSubcontoId: receiverId.toString(),
      count: count,
      summa: total,
    }
  
    const ServicesFromPartnersObj = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: senderId.toString(),
      kreditFirstSubcontoId: analiticId.toString(),
      kreditSecondSubcontoId: receiverId.toString(),
      count: count,
      summa: total,
    }

    const saleTMZObj = {
      debetFirstSubcontoId: receiverId?.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: count,
      summa: total,
    }

    const salePaymentObj = {
      debetFirstSubcontoId: senderId.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: receiverId?.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: count,
      summa: total,
    }

    const leaveTMZ = {
      debetFirstSubcontoId: senderId.toString(),
      debetSecondSubcontoId: receiverId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: count,
      summa: total,
    }

    const comeHalfstuff = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: count,
      summa: total,
    }

    let leaveCashZp6750 = {
      debetFirstSubcontoId: analiticId.toString() ,
      debetSecondSubcontoId: senderId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: 0,
      summa: total,
    }

    let leaveCashObj6050 = {
      debetFirstSubcontoId: analiticId.toString(),
      debetSecondSubcontoId: senderId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: 0,
      summa: total,
    }

    let leaveCashOther = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: 0,
      summa: total,
    }

    let leaveCashFromFounder = {
      debetFirstSubcontoId: senderId.toString(),
      debetSecondSubcontoId: analiticId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: analiticId.toString(),
      count: 0,
      summa: total,
    }

    let MoveCashObj = {
      debetFirstSubcontoId: receiverId.toString(),
      debetSecondSubcontoId: senderId.toString(),
      kreditFirstSubcontoId: senderId.toString(),
      kreditSecondSubcontoId: receiverId.toString(),
      count: 0,
      summa: total,
    }

    switch (documentType) {
      case DocumentType.ComeCashFromPartners:
        if (
          founders && founders.length && 
          founders.filter((item:FounderObject) => item.id == receiverId.toString()).length > 0
        ) 
          return {
            debet: Schet.S66,
            kredit: Schet.S00,
            ...MoveCashObj,
        };
      
        return {
          debet: item.date > 86400001 ? Schet.S50 : Schet.S00,
          kredit: Schet.S60,
          ...MoveCashObj
        };

      case DocumentType.ComeHalfstuff:
        if (hasTable && tableItem && !newEntry) {
          return {
            debet: Schet.S23,
            kredit: Schet.S10,
            ...leaveMaterial
          };
        } else {
          return {
            debet: Schet.S21,
            kredit: Schet.S23,
            ...comeHalfstuff
          };
        }
        
      case DocumentType.ComeMaterial:
        return {
          debet: Schet.S10,
          kredit: item.date > 86400001 ? Schet.S60 : Schet.S00,
          ...leaveComeTMZObj
        };

      case DocumentType.ComeProduct:
        return {
          debet: Schet.S28,
          kredit: item.date > 86400001 ? Schet.S20 : Schet.S00,
          ...leaveComeTMZObj,
        };

      case DocumentType.LeaveCash:
        if (isPartner) {
          return {
            debet: Schet.S60,
            kredit: Schet.S50,
            ...leaveCashObj6050,
            count: isCash ? -1 : 0,
          };
        }
        if (isWorker) {
          return {
            debet: Schet.S67,
            kredit: Schet.S50,
            ...leaveCashZp6750,
            count: isCash ? -1 : 0
          };
        }

        if (
          founders && founders.length && 
          founders.filter((item:FounderObject) => item.id == senderId.toString()).length > 0
        ) 
          return {
            debet: Schet.S00,
            kredit: Schet.S66,
            ...leaveCashFromFounder,
        };

        return {
          debet: Schet.S20,
          kredit: Schet.S50,
          ...leaveCashOther,
          count: isCash ? -1 : 0,
        };

      case DocumentType.LeaveHalfstuff:
        return {
          debet: Schet.S20,
          kredit: Schet.S21,
          ...leaveTMZ,
        };

      case DocumentType.LeaveMaterial:
        return {
          debet: Schet.S20,
          kredit: Schet.S10,
          ...leaveMaterial,
        };

      case DocumentType.LeaveProd:
        return {
          debet: Schet.S20,
          kredit: Schet.S28,
          ...leaveTMZ,
        };

      case DocumentType.MoveCash:
        if (
          founders && founders.length && 
          founders.filter((item:FounderObject) => item.id == receiverId.toString()).length > 0
        ) 
          return {
            debet: Schet.S66,
            kredit: Schet.S50,
            ...MoveCashObj,
            count: isCash ? -1 : 0,
        };

        return {
          debet: Schet.S50,
          kredit: item.date > 86400001 ? Schet.S50 : Schet.S00,
          ...MoveCashObj,
          count: isCash ? -1 : 0,
          // debetSecondSubcontoId: isCash? 'cash': MoveCashObj.debetSecondSubcontoId
        };

      case DocumentType.MoveHalfstuff:
        return {
          debet: Schet.S21,
          kredit: Schet.S21,
          ...leaveComeTMZObj,
        };

      case DocumentType.MoveMaterial:
        return {
          debet: Schet.S10,
          kredit: Schet.S10,
          ...leaveComeTMZObj
        };

      case DocumentType.MoveProd:
        return {
          debet: Schet.S28,
          kredit: Schet.S28,
          ...leaveComeTMZObj
        };

      case DocumentType.SaleMaterial:
        if (!newEntry) {
          return {
            debet: Schet.S60,
            kredit: Schet.S10,
            ...saleTMZObj
          };
        } else if (newEntry) {
          return {
            debet: Schet.S50,
            kredit: Schet.S60,
            ...salePaymentObj
          };
        }

      case DocumentType.SaleProd:
        if (!newEntry) {
          return {
            debet: Schet.S40,
            kredit: Schet.S28,
            ...saleTMZObj
          };
        } else if (newEntry) {
          return {
            debet: Schet.S50,
            kredit: Schet.S40,
            ...salePaymentObj
          };
        }

      case DocumentType.ZpCalculate:
        // шу хужжатни проводкаси хакида кайта бир уйлаб куриш керак
        return {
          debet: Schet.S20,
          kredit: Schet.S67,
          ...ZpCalculateObj
        };
      
      case DocumentType.ServicesFromPartners:
        console.log('-*-')
        return {
          debet: Schet.S20,
          kredit: Schet.S60,
          ...ServicesFromPartnersObj
        };
    }
  }
  
}