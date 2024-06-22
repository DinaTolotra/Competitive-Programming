function isLevelIndexValid(levelIndex) {
    return levelIndex >= 0 && levelIndex < levelData.length;
}


function alertIndexInvalid(levelIndex) {
    console.log(`Level index ${levelIndex} is invalid`);
}


function setSubjectName(level) {
    let subjectNameCont = $("#subjectName");
    $(subjectNameCont).html(level.name);
}


function setSubject(level) {
    let subjectCont = $("#subjectCont");
    $(subjectCont).html(level.subject);
}


function generateInput(level) {
    let inputList = $(".input");
    for (let i=0; i<INPUTCOUNT; i++) {
        $(inputList[i]).html(level.generate(8, 16));
    }
}


function generateInputElm() {
    let template = $("#template > .inputCont");
    for (let i=0; i<INPUTCOUNT; i++) {
        let clone = $(template).clone();
        $("#submitBtn").before(clone);
    }
}


function setExemple(level) {
    let inEgCont = $("#inputEg");
    let outEgCont = $("#outputEg");

    inEgCont.html("");
    outEgCont.html("");

    for (let i=0; i<level.exemple.length; i++) {
        let inElem = $("<div></div>");
        let outElem = $("<div></div>");
        $(inElem).html(level.exemple[i]);
        $(outElem).html(level.answer(level.exemple[i]));
        inEgCont.append(inElem);
        outEgCont.append(outElem);
    }
}


function setLevelButtonEvent() {
    let btnList = $(".lvlBtn");
    for (let i = 0; i < SUBJECTCOUNT; i++) {
        let btn = btnList[i];

        $(btn).on("click", function () {
            currentLevel = i;
            loadLevel(i);
        })
    }
}


function setSubmitButtonEvent() {
    let submitBtn = $("#submitBtn");
    $(submitBtn).on("click", function () {
        checkAnswer();
    })
}


function loadLevel(levelIndex) {
    //  check if the index is valid or not
    if (!isLevelIndexValid(levelIndex)) {
        alertIndexInvalid(levelIndex);
        return;
    }

    const level = levelData[levelIndex];

    setSubjectName(level);
    setSubject(level);
    generateInput(level);
    setExemple(level);
}


function markAnswer(elem, valide) {
    $(elem).removeClass("is-valid");
    $(elem).removeClass("is-invalid");
    
    if (valide) {
        $(elem).addClass("is-valid");
        $(elem).attr("disabled","");
    } else {
        $(elem).addClass("is-invalid");
    }
}


function checkAnswer() {
    let level = levelData[currentLevel];
    let outputElemList = $(".output");
    let inputElemList = $(".input");
    let allValid = true

    for (let i=0; i<outputElemList.length; i++) {
        let outElem = outputElemList[i];
        let inElem = inputElemList[i];
        let value = $(outElem).val().trim();
        let input = $(inElem).html();
        let correctAns = level.answer(input);

        markAnswer(outElem, correctAns == value);
        if (correctAns != value) allValid = false;
    }

    if (allValid) {
        setTimeout(() => {
            alert("Next level!");
            nextLevel();    
        }, 500);
    }
}


function resetInputValue() {
    let inputElemList = $("input");

    for (const inputElem of inputElemList) {
        $(inputElem).val("");
        $(inputElem).removeAttr("disabled");
        $(inputElem).removeClass("is-valid");
        $(inputElem).removeClass("is-invalid");
    }
}


function lockLevel(levelIndex) {
    let levelBtn = $(".lvlBtn")[levelIndex];
    $(levelBtn).addClass("disabled");
}


function unlockLevel(levelIndex) {
    let levelBtn = $(".lvlBtn")[levelIndex];
    $(levelBtn).removeClass("disabled");
}


function lockUpperLevel() {
    for (let i = 1 + currentLevel; i < SUBJECTCOUNT; i++) {
        lockLevel(i);
    }
}


function nextLevel() {
    currentLevel++;
    unlockLevel(currentLevel);
    loadLevel(currentLevel);
    resetInputValue();
}


function rand(min, max) {
    let result = 0;
    do {
        result = Math.round((10*Math.random())%max);
    } while (result < min);
    return result;
}
