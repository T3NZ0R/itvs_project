import React, {useEffect, useState} from 'react';

import styles from "../../styles/mainTools.module.scss";
import {useSelector} from "react-redux";
import Image from "next/image";
import {useTools} from "@/hooks/useTools";

const MainTools = () => {

    const {tools} = useSelector(state => state['toolsReducer']);
    const [getToolsRequest] = useTools();

    useEffect(() => {
        if (!tools.length) {
            getToolsRequest();
        }
    }, [tools.length])


    useEffect(() => {
        console.log(tools);
    }, [tools])

    const [responseTools, setResponseTools] = useState(tools);
    const [toolsNumber, setToolsNumber] = useState(14);
    const [screenSize, getDimension] = useState(721);

    const setDimension = () => {
        getDimension(window.innerWidth,)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        if (window.innerWidth < 720) {
            setResponseTools(tools.slice(0, 6))
            setToolsNumber(23);
        } else {
            setResponseTools(tools);
            setToolsNumber(14);
        }

        return (() => {
            window.removeEventListener('resize', setDimension);
        })

    }, [screenSize, tools.length]);


    return (
        <section className={styles.mainTools}>
            <div className={styles.mainToolsWrap}>

                <h2 className={styles.mainToolsTitle}>
                    Основні <br/>
                    програми
                </h2>

                <div className={styles.mainToolsContentWrap}>
                    {[...responseTools].map((tool, index) =>
                        <div className={styles.mainToolsItem} key={index} style={tool.name === "Fontlab" ? {
                            color: "#122940",
                            background: tool.background
                        } : {background: tool.background}}>
                            <Image className={styles.mainToolsItemImage} width={"50"} height={"50"} src={tool.logo} alt={tool.name} />
                            <h5 className={styles.mainToolsItemTitle}>{tool.name}</h5>
                        </div>)}
                    {screenSize >= 720 && <div className={styles.mainToolsLastItem}> + ще {toolsNumber} </div>}
                </div>
                {screenSize < 720 && <div className={`${styles.mainToolsLastItem} LastItem`}> + ще {toolsNumber} </div>}
            </div>

        </section>
    );
};

export default MainTools;
