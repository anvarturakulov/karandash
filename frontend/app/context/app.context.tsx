"use client"
import { ReactNode, createContext, useContext, useState } from "react";
import { ContentType, MessageType } from '../interfaces/general.interface';
import { ReferenceModel } from '../interfaces/reference.interface';

export interface Maindata {
  activeMenuKey: string,
  contentType?: ContentType,
  contentTitle: string,
  showReferenceWindow: boolean,
  showDocumentWindow: boolean,
  user: string,
  mainPage: boolean,
  showMessageWindow: boolean,
  message: string,
  messageType: MessageType,
  clearControlElements: boolean,
  updateDataForRefenceJournal: boolean,
  currentReferencyForShow: ReferenceModel | undefined,
}

export interface IAppContext {
  mainData: Maindata,
  setMainData? : (key: string, value: any) => void;
};

const defaultMainData: Maindata = {
    activeMenuKey: '',
    contentType: 'document',
    contentTitle: '',
    showReferenceWindow: false,
    showDocumentWindow: false,
    user: 'Шавкат',
    mainPage: true,
    showMessageWindow: false,
    message: 'Маълумотлар сакланди',
    messageType: 'error',
    clearControlElements: false,
    updateDataForRefenceJournal: false,
    currentReferencyForShow: undefined,
  }

const appContextDefaultValues: IAppContext = {
  mainData: {...defaultMainData},
};
const AppContext = createContext<IAppContext>(appContextDefaultValues);

export function useAppContext() {
    return useContext(AppContext);
}

type Props = {
    children: ReactNode;
};

export function AppProvider({ children }: Props) {
    
    const [data, setData] = useState<Maindata>(defaultMainData);

    const setMainData = (key: string, value: any ):void => {
      // console.log(value)
      setData((data) => ({
        ...data,
        [key]: typeof key != 'object' ? value : {...value}
      }));
    };

    const value = {
        mainData: data,
        setMainData,
    };

    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    );
}