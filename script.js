var inputText = document.querySelector("#inputText");
var translateBtn = document.querySelector("#translateBtn");
var outputText = document.querySelector("#outputText");
var apiURL = "https://api.funtranslations.com/translate/groot.json"

function queryURL(text){
    return apiURL + "?text=" + text;
}

function showError(error){
    console.log("error: "+ error);
    alert("error: "+ error);
}

function translateBtnClick(){
    var inputTxt = inputText.value;
    fetch(queryURL(inputTxt)).then(response => response.json()).then(json => {
        outputText.value = json.contents.translated
    }).catch(showError)
}

translateBtn.addEventListener("click", translateBtnClick);