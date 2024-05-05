'use client'
import { ProductionProps } from './production.props';
import styles from './production.module.css';
import { ProductionItem } from './productionItem/productionItem';
import { ReferenceModel } from '@/app/interfaces/reference.interface';
import { query } from '@/app/service/reports/querys/query';
import { Schet, TypeQuery } from '@/app/interfaces/report.interface';
import { useAppContext } from '@/app/context/app.context';
import { numberValue } from '@/app/service/common/converters';
import { queryKor } from '@/app/service/reports/querys/queryKor';
import { dateNumberToString } from '@/app/service/common/converterForDates';
import { getDataForSwr } from '@/app/service/common/getDataForSwr';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { totalByKey } from '../inform';

export const Production = ({className, data, currentSection, ...props }: ProductionProps) :JSX.Element => {
    
    useEffect(()=> {
    }, [data])
    
    let datas = data ? data.filter((item: any) => item?.reportType == 'PRODUCTION')[0]?.values : []

    return (
       <>
            <div className={styles.title}>
                {'ЦЕХЛАР'}
                
            </div>
            
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Цех</td>
                        <td>Килинган хамир сони</td>
                        <td>Ишлатилган загатовка</td>
                        <td>Бир дона хамирга нис зувала</td>
                    </tr>
                </thead>
                
                {
                    datas && datas.length &&
                    datas
                    .map((element: any, key: number) => {
                        return <ProductionItem 
                            key={key}
                            item={element}
                        />
                    })
                }  
            
                <thead>
                    <tr>
                        <td>Жами</td>
                        <td className={styles.totalTd}>{numberValue(totalByKey('countHamirs', datas))}</td>
                        <td className={styles.totalTd}>{numberValue(totalByKey('countZagatovka', datas))}</td>
                        <td className={styles.totalTd}>-</td>
                        
                    </tr>
                </thead>
                
            </table>
            
            
       </>
    )
} 