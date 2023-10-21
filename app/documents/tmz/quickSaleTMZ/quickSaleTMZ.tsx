'use client'

import { QuickSaleTMZProps } from './quickSaleTMZ.props';
import styles from './quickSaleTMZ.module.css';
import cn from 'classnames';
import { Button, Htag, Input } from '@/app/components';
import TrashIco from './trash.svg';
import AddIco from './add.svg'

export const QuickSaleTMZ = ({ className, ...props }: QuickSaleTMZProps) :JSX.Element => {
    
    return (
        <div className={styles.docBox}>
            <div className={styles.selectBox}>
                <div>
                    <Htag tag='h2'>Хужжат тури</Htag>
                    <input value='Юк чикими' disabled className={styles.input} />
                </div>

                <div>
                    <Htag tag='h2'>Номер</Htag>
                    <input value='000569' disabled className={styles.input} />
                </div>

                <div>
                    <Htag tag='h2'>Сана</Htag>
                    <input value='15/10/2023' disabled className={styles.input}/>
                </div>
                <div></div>
                <div>
                    <Htag tag='h2'>Жунатувчи</Htag>
                    <select
                        className={styles.select}
                    >
                        <option value="dashboard" selected>Цех Дарё</option>
                        <option value="gild">Цех Халкобод</option>
                        <option value="delivery">Цех Иштихон</option>
                    </select>
                </div>
                
                <div>
                    <Htag tag='h2'>Олувчи</Htag>
                    <select
                        className={styles.select}
                    >
                        <option value="dashboard" selected>Саломат</option>
                        <option value="gild">Шукрона Маркет</option>
                        <option value="delivery">Дукон Шаходат опа</option>
                    </select>
                </div>
                
            </div>
            {/* <Htag tag='h2'>Махсулот таснифи</Htag> */}
            
            <div className={styles.TMZ}>
                <div className={styles.boxTMZ}>
                    <Htag tag='h2'>Махсулот номи</Htag>
                    <Htag tag='h2'>Сони</Htag>
                    <Htag tag='h2'>Нархи</Htag>
                    <Htag tag='h2'>Суммаси</Htag>
                    {/* <Htag tag='h2'>Уч.</Htag> */}
                    <div className={styles.ico}>
                        {/* <TrashIco className={styles.ico} /> */}
                    </div>
                </div>
                <div className={styles.boxTMZ}>
                    <select
                        className={styles.select}
                    >
                        <option value="dashboard" selected>Бозор Нон</option>
                        <option value="gild">Буханка</option>
                        <option value="delivery">Патир</option>
                    </select>
                    <input className={styles.input} type='number' />
                    <input className={styles.input} type='number' />
                    <input className={styles.input} type='number' />
                    <div className={styles.ico}>
                        <TrashIco />
                    </div>
                </div>
                {/* <div className={styles.boxTMZ}>
                    <select
                        className={styles.select}
                    >
                        <option value="dashboard" selected>Бозор Нон</option>
                        <option value="gild">Буханка</option>
                        <option value="delivery">Патир</option>
                    </select>
                    <input className={styles.input} type='number' />
                    <input className={styles.input} type='number' />
                    <input className={styles.input} type='number' />
                    <div className={styles.ico}>
                        <TrashIco className={styles.ico} />
                    </div>
                </div>
                <div className={styles.boxTMZ}>
                    <select
                        className={styles.select}
                    >
                        <option value="dashboard" selected>Бозор Нон</option>
                        <option value="gild">Буханка</option>
                        <option value="delivery">Патир</option>
                    </select>
                    <input className={styles.input} type='number' />
                    <input className={styles.input} type='number' />
                    <input className={styles.input} type='number' />
                    <div className={styles.ico}>
                        <TrashIco className={styles.ico} />
                    </div>
                </div> */}
                                
            </div>
            <div className={styles.paybox}>
                <input className={styles.input} type='number' placeholder='мижоздан олинган сумма' />
                <Input placeholder='Кушимча изох'/>
                <div className={styles.add}>
                    <AddIco/>
                </div>
            </div>

            <div className={styles.boxBtn}>
                <Button appearance='primary'>Жунатиш</Button>
                <Button appearance='ghost'>Бекор килиш</Button>
            </div>
        </div>   
    )
} 