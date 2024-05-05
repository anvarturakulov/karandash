import { OptionsBoxProps } from './optionsBox.props';
import styles from './optionsBox.module.css';
import { Input } from '@/app/components';
import { getOptionsByReportType } from '@/app/service/reports/getOptionsByReportType';
import { SelectReference } from './components/selectReference/selectReference';
import { TypeReference } from '@/app/interfaces/reference.interface';
import { useAppContext } from '@/app/context/app.context';
import { onChangeInputOptionsBox } from './helpers/optionsBox.functions';
import { getEntrysJournal } from '@/app/service/reports/getEntrysJournal';
import { Maindata } from '@/app/context/app.context.interfaces';
import { showMessage } from '@/app/service/common/showMessage';
import { OborotType, ReportType } from '@/app/interfaces/report.interface';
import { SelectOborot } from './components/selectOborot/selectOborot';
import { getMatOborot } from '@/app/service/reports/getMatOborot';


export default function OptionsBox({ className, ...props }: OptionsBoxProps): JSX.Element {
    
    const {mainData, setMainData} = useAppContext();
    const {contentName, contentTitle, reportOption} = mainData;
    const result = getOptionsByReportType(contentName, reportOption.oborotType);

    const showReport = ( setMainData: Function | undefined, mainData: Maindata ) => {
        
        const { reportOption } = mainData;
        const { startDate, endDate } = reportOption;
        console.log(startDate)
        console.log(endDate)
        if ( startDate != 0 && endDate != 0 ) {
            if (contentName == ReportType.MatOborot) getMatOborot(setMainData, mainData) 
            else getEntrysJournal(setMainData, mainData);
        } else {
            showMessage('Санани тулдиринг', 'error', setMainData);
        }
    }

    return (

        <div className={styles.box}>
            
            <div className={styles.title}>{`${contentTitle} буйича хисобот`}</div>
            <div className={styles.dataBox}>
                <Input label='Бошлангич сана' type='date' id='startDate' onChange={(e)=> onChangeInputOptionsBox(e, setMainData, mainData)}/>
                <Input label='Охирги сана' type='date' id='endDate' onChange={(e) => onChangeInputOptionsBox(e, setMainData, mainData)} />
            </div>

            <div className={styles.dataBoxBottom}>
                <SelectOborot label='Айланма тури' visible={contentName == ReportType.Oborotka}/>
            </div>
            
            <div className={styles.dataBoxBottom}>
                <SelectReference 
                    label={result.label} 
                    typeReference={result.typeReference} 
                    id={'firstReferenceId'}
                    visible={true}
                />
            </div>

            <div className={styles.dataBoxBottom}>
                <SelectReference 
                    label='222' 
                    typeReference={TypeReference.WORKERS} 
                    id={'secondReferenceId'}
                    visible={false}
                />
            </div>
            
            <button 
                className={styles.button}
                onClick={()=> showReport(setMainData, mainData)}>
                Хисоботни шакллантириш
            </button>

        </div>
    )
} 