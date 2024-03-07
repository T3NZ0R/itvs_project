import React, {useEffect, useState} from 'react';

import styles from "../../styles/mainTools.module.scss";
import {useSelector} from "react-redux";

const MainTools = () => {

    const {tools} = useSelector(state => state['toolsReducer']);

    const [responseTools, setResponseTools] = useState(tools);
    const [toolsNumber, setToolsNumber] = useState(14);
    const [screenSize, getDimension] = useState(0);

    const setDimension = () => {
        getDimension(window.innerWidth,)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        if ( window.innerWidth < 720) {
            setResponseTools(responseTools.slice(0, 6))
            setToolsNumber(23);
        } else {
            setResponseTools(tools);
            setToolsNumber(14);
        }

        return (() => {
            window.removeEventListener('resize', setDimension);
        })

    }, [screenSize]);



    return (
        <section className={styles.mainTools}>
            <div className={styles.mainToolsWrap}>

                <h2 className={styles.mainToolsTitle}>
                    Основні <br/>
                    програми
                </h2>

                <div className={styles.mainToolsContentWrap}>
                    {responseTools.map(tool =>
                        <div className={styles.mainToolsItem} key={tool.logo} style={tool.name === "Fontlab" ? {
                            color: "#122940",
                            background: tool.background
                        } : {background: tool.background}}>
                            <img className={styles.mainToolsItemImage} src={tool.logo} alt={tool.name}/>
                            <h5 className={styles.mainToolsItemTitle}>{tool.name}</h5>
                        </div>)}
                    <div className={styles.mainToolsLastItem}> + ще {toolsNumber} </div>
                </div>

            </div>

        </section>
    );
};

export default MainTools;
