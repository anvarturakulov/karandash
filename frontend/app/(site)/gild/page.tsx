'use client'
import { Button, Htag } from '@/app/components'
import styles from './page.module.css'
import cn from 'classnames';
import { Document } from '@/app/components/document/document';
import Journal from '@/app/components/journal/journal';
import { DocumentsData } from '@/app/data/documents';
import { DocumentType } from '../../interfaces/document.interface';

export default function Gild() {
  return (
    <>
      <div className={styles.container}>
        <Htag tag='h1'>Цех сотувчиси ойнаси</Htag>
        
        <div className={styles.docBox}>
          <div className={cn(styles.box,styles.boxbox)}>Махсулотлар чикими</div>
          <div className={styles.box }>Махсулотлар кирими</div>
          <div className={styles.box}>Пул чикими</div>
          <div className={styles.box}>Пул кирими</div>
        </div>
        
        <div className={styles.actionBox}>
          <Document documentType={DocumentType.SaleProd}/>
        </div>
        {/* <Journal
          documents={ConvertDocuments(DocumentsData)}
        /> */}


      </div>
    </>
  )
}
