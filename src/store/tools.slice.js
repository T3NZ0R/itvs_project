import {createSlice} from "@reduxjs/toolkit";


const toolsSlice = createSlice({
    name: "toolsSlice",
    initialState: {
        tools: [
            {
                name:"Photoshop",
                logo:"img/tools/Photoshop.svg",
                background:"#264A66"
            },
            {
                name:"Illustrator",
                logo:"img/tools/Illustrator.svg",
                background:"#FF9A00"
            },
            {
                name:"Figma",
                logo:"img/tools/Figma.svg",
                background:"#373844"
            },
            {
                name:"Axure",
                logo:"img/tools/Axure.svg",
                background:"#009CD9"
            },
            {
                name:"Maya",
                logo:"img/tools/Maya.svg",
                background:"#09898D"
            },
            {
                name:"Atom",
                logo:"img/tools/Atom.svg",
                background:"#009CD9"
            },
            {
                name:"Visual Studio",
                logo:"img/tools/Visual Studio.svg",
                background:"#7252AA"
            },
            {
                name:"Maya",
                logo:"img/tools/Maya(2).svg",
                background:"#09898D"
            },
            {
                name:"Power Point",
                logo:"img/tools/Power Point.svg",
                background:"#D35230"
            },
            {
                name:"Fontlab",
                logo:"img/tools/Fontlab.svg",
                background:"#EFE9CB"
            },
            {
                name:"Word",
                logo:"img/tools/Word.svg",
                background:"#2B7BD3"
            },
            {
                name:"Exel",
                logo:"img/tools/Exel.svg",
                background:"#2B7BD3"
            },
            {
                name:"Jira",
                logo:"img/tools/Jira.svg",
                background:"#1871EC"
            },
        ]
    },


});

const toolsReducer = toolsSlice.reducer;
export {toolsReducer};
