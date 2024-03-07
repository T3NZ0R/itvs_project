import React from 'react';
import {useSelector} from "react-redux";

import styles from '../../src/styles/staff.module.scss'
import StaffCard from "../../src/components/StaffCard/StaffCard";

const DepartmentStaff = () => {

    const {staff} = useSelector(state => state['staffReducer']);


    return (
        <div className={styles.staffWrap}>
            <h1 className={styles.staffTittle}>Колектив кафедри</h1>
            <div className={styles.staffCardsWrap}>
                {staff.map(person => <StaffCard key={person.name} person={person} />)}
            </div>
        </div>
    );
};

export default DepartmentStaff;
