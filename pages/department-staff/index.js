import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import styles from '../../src/styles/staff.module.scss'
import StaffCard from "@/components/StaffCard/StaffCard";
import {useMentors} from "@/hooks/useMentors";

const DepartmentStaff = () => {

    const {staff} = useSelector(state => state['staffReducer']);
    const [getMentors] = useMentors();

    useEffect(()=>{
        getMentors();
    }, [])


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
