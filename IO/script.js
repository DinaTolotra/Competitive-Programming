const SUBJECTCOUNT = levelData.length;
const INPUTCOUNT = 5;

let subjectNameCont;
let subjectCont;
let inputEg;
let outputEg;
let inputList;
let currentLevel;


$(document).ready(function () {
    generateInputElm();
    resetInputValue();
    
    currentLevel = 0;

    unlockLevel(currentLevel);
    lockUpperLevel();

    loadLevel(currentLevel);

    setLevelButtonEvent();
    setSubmitButtonEvent();
});