import { TypeReference } from './reference.interface'

export enum DocumentType {

    ComeMaterial = 'ComeMaterial',
    ComeProduct = 'ComeProduct',
    ComeHalfstuff = 'ComeHalfstuff',
    ComeProductImport = 'ComeProductImport',

    SaleProd = 'SaleProd',
    SaleMaterial = 'SaleMaterial',
    SaleHalfStuff = 'SaleHalfStuff',

    LeaveProd = 'LeaveProd',
    LeaveMaterial = 'LeaveMaterial',
    LeaveHalfstuff = 'LeaveHalfstuff',

    MoveProd = 'MoveProd',
    MoveMaterial = 'MoveMaterial',
    MoveHalfstuff = 'MoveHalfstuff',

    ComeCashFromPartners = 'ComeCashFromPartners',
    MoveCash = 'MoveCash',
    LeaveCash = 'LeaveCash',
    ZpCalculate = 'ZpCalculate',
    TakeProfit = 'TakeProfit',

    ServicesFromPartners = 'ServicesFromPartners',

    Error = 'Error'
}

export interface DocTableItem {
    referenceId: string,
    count: number,
    price: number,
    total: number,
    comment: string,
    balance: number,
}


export interface DocumentModel {
    _id?: string,
    date: number,
    docNumber: number,
    documentType: string,
    deleted: boolean,
    user: string,
    senderId: string,
    receiverId: string,
    isWorker?: boolean,
    isPartner?: boolean,
    isFounder?: boolean,
    isCash?: boolean,
    analiticId: string,
    count: number,
    balance?: number,
    price: number,
    total: number,
    cashFromPartner?: number,
    comment?: string,
    proveden?: boolean,
    firstWorkerId?: string | null,
    secondWorkerId?: string | null,
    thirdWorkerId?: string | null,
    tableItems: Array<DocTableItem>,
};

export interface OptionsForDocument {
    senderType: TypeReference,
    senderLabel: string,
    senderIsVisible: boolean,

    receiverType: TypeReference,
    receiverLabel: string,
    recieverIsVisible: boolean

    analiticType: TypeReference,
    analiticLabel: string,
    analiticIsVisible: boolean

    cashFromPartnerLabel: string,
    cashFromPartnerVisible: boolean,

    tableIsVisible: boolean,
    countIsVisible: boolean,
    priceIsVisible: boolean,
    totalIsVisible: boolean,
    priceIsDisabled: boolean,
    totalIsDisabled: boolean,
    balansIsVisible: boolean,
}

export type DocumentTypeForReference = 'MATERIAL' | 'PRODUCT' | 'HALFSTUFF' | 'OTHER'

export interface Interval {
    dateStart: number,
    dateEnd: number
}

export type NameControl = 'count' | 'price' | 'total' | 'comment' | 'cashFromPartner' | 'balance'

export type NameDocs = 'sd' | 'ds'

export interface JournalCheckboxs {
    charges: boolean,
    workers: boolean,
    partners: boolean,
}