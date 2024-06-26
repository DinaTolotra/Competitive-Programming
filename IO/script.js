const SUBJECTCOUNT = levelData.length;
const INPUTCOUNT = 5;

let subjectNameCont;
let subjectCont;
let inputEg;
let outputEg;
let inputList;
let currentLevel = -1;


$(document).ready(function () {
    generateInputElm();
    resetInputValue();

    setLevelTracker();
    
    // lockUpperLevel();
    // unlockLevel(currentLevel);

    loadLevel(currentLevel);

    setLevelButtonEvent();
    setSubmitButtonEvent();
});