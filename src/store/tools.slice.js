import {createSlice} from "@reduxjs/toolkit";

import Photoshop from '@/assets/img/tools/Photoshop.svg';
import Illustrator from '@/assets/img/tools/Illustrator.svg';
import Figma from '@/assets/img/tools/Figma.svg';
import Axure from '@/assets/img/tools/Axure.svg';
import Maya from '@/assets/img/tools/Maya.svg';
import Atom from '@/assets/img/tools/Atom.svg';
import VisualStudio from '@/assets/img/tools/VisualStudio.svg';
import Maya2 from '@/assets/img/tools/Maya(2).svg';
import PowerPoint from '@/assets/img/tools/PowerPoint.svg';
import Fontlab from '@/assets/img/tools/Fontlab.svg';
import Word from '@/assets/img/tools/Word.svg';
import Exel from '@/assets/img/tools/Exel.svg';
import Jira from '@/assets/img/tools/Jira.svg';


const toolsSlice = createSlice({
    name: "toolsSlice",
    initialState: {
        tools: [
            {
                name:"Photoshop",
                logo:Photoshop,
                background:"#264A66"
            },
            {
                name:"Illustrator",
                logo:Illustrator,
                background:"#FF9A00"
            },
            {
                name:"Figma",
                logo:Figma,
                background:"#373844"
            },
            {
                name:"Axure",
                logo:Axure,
                background:"#009CD9"
            },
            {
                name:"Maya",
                logo:Maya,
                background:"#09898D"
            },
            {
                name:"Atom",
                logo:Atom,
                background:"#009CD9"
            },
            {
                name:"Visual Studio",
                logo:VisualStudio,
                background:"#7252AA"
            },
            {
                name:"Maya",
                logo: Maya2,
                background:"#09898D"
            },
            {
                name:"Power Point",
                logo:PowerPoint,
                background:"#D35230"
            },
            {
                name:"Fontlab",
                logo:Fontlab,
                background:"#EFE9CB"
            },
            {
                name:"Word",
                logo:Word,
                background:"#2B7BD3"
            },
            {
                name:"Exel",
                logo:Exel,
                background:"#2B7BD3"
            },
            {
                name:"Jira",
                logo:Jira,
                background:"#1871EC"
            },
        ]
    },


});

const toolsReducer = toolsSlice.reducer;
export {toolsReducer};
