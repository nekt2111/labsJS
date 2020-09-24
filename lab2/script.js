
let amountOfDivs = 3


let divId0 = `<div id="listOfMyMessages" class="my-messages">
                <div id="dateOfMyMessage" class="message-date"></div>
            </div>
            <div id="listOfInterlocutorMessages" class="interlocutor-messages">
                <div class="message-date"></div>
            </div>`

let divId1 = `<div id="listOfMyMessages" class="my-messages">
                <div id="dateOfMyMessage" class="message-date"></div>
            </div>
            <div id="listOfInterlocutorMessages" class="interlocutor-messages">
                <div class="message-date"></div>
            </div>`

let divId2 = `<div id="listOfMyMessages" class="my-messages">
                <div id="dateOfMyMessage" class="message-date"></div>
            </div>
            <div id="listOfInterlocutorMessages" class="interlocutor-messages">
                <div class="message-date"></div>
            </div>`

function changeDiv(id){
    let div = document.getElementById("chat-message-list")
    switch (id){
        case 0:
            div.innerHTML = divId0
            return
        case 1:
            div.innerHTML = divId1
            return;
        case 2:
            div.innerHTML = divId2
    }
}



for(let i=0; i<localStorage.length; i++) {
    console.log(localStorage.getItem("divPos"))
}


function clickOnOtherConversation(id){
    window.location.replace(window.location.href.substring(0,window.location.href.indexOf("?")) + "?id="+id.toString());
    setCurrentDivId(id)
}

function changeCurrentDivId(){
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id")
    setCurrentDivId(parseInt(id))

}



function changeAllLastMessage(amountOfDivs){
    for (let i =0; i < amountOfDivs;i++){
        changeLastMessage(i)
    }

}

function changeLastMessage(idNum){


    let idStr = idNum.toString()
    let maxId = getGeneratedId()
    let a;
    for (let i = 0;i <= maxId;i++){
        if(localStorage.getItem(`${i}divId`) === idStr){
            a = i
        }
    }
    document.getElementById(idStr).querySelector(".message-date-list").innerHTML = localStorage.getItem(`${a}date`)
   document.getElementById(idStr).querySelector(".last-conversation-message").innerHTML = localStorage.getItem(`${a}text`)


}






function changeChatTitle(){
    let currentId = getCurrentDivId()
    let title = ""
    if(!isNaN(currentId)) {
        title = document.getElementById(currentId.toString()).querySelector(".interlocutor-name").textContent
    }

    document.getElementById("chat-title").textContent = title

}

document.getElementById("search-input").oninput = function (){
    let val = this.value.trim().toLowerCase()
    console.log(val)
    let elasticItems = document.querySelectorAll(".interlocutor-name");
    console.log(elasticItems)
    if (val !== '') {
        elasticItems.forEach((elem) => {
            if (elem.innerText.toLowerCase().search(val) === -1) {
                elem.parentElement.classList.add('hide')
            } else {
                elem.parentElement.classList.remove('hide')
            }
        })
    } else {
        elasticItems.forEach((elem) => {
            elem.parentElement.classList.remove('hide')
        })
    }
}





function setCurrentDivId(id){

    // Really bad function :(
    // Have to be refactored
    for (let a = 0; a < amountOfDivs;a++){
        let div = document.getElementById(a.toString())
        div.className = "conversation"
        if(a === id){
            div.className = "conversation active"
        }
    }




    localStorage.setItem("currentDivId",id.toString())
    changeDiv(id)
    changeChatTitle()

}
function getCurrentDivId(){
    let currentIdDiv
    if(localStorage.getItem("currentDivId")){
        currentIdDiv = parseInt(localStorage.getItem("currentDivId"))
    }
    else{
        currentIdDiv = 0
    }
    return currentIdDiv
}



setCurrentDivId(getCurrentDivId())

function getDefaultDivPos(){
    let defDivPos = ""
    for (let i = 0; i < amountOfDivs;i++){
        defDivPos += i.toString()
    }
    return defDivPos;
}


function divToStart(){
    let divPos = getDefaultDivPos()
    if(localStorage.getItem("divPos")){
        divPos = localStorage.getItem("divPos")
    }
    let newPos = divPos
    if(divPos[0] !== getCurrentDivId().toString()) {
        newPos = getCurrentDivId().toString()
        for (let i = 0; i < divPos.length;i++){
            if(i !== divPos.indexOf(getCurrentDivId())){
                newPos += divPos[i]
            }
        }
    }


    if((divPos[0].toString() !== getCurrentDivId())) {
        localStorage.setItem("divPos", newPos)
    }
    console.log(divPos)
    console.log(newPos)

    let mainDiv = document.getElementById("conversation-list")
    let div = document.getElementById(getCurrentDivId().toString())
    mainDiv.removeChild(div)
    mainDiv.prepend(div)
}

function changeDivPos(amountOfDivs){

    let allDiv = []
    let mainDiv = document.getElementById("conversation-list")
    let divPos = getDefaultDivPos()
    if(localStorage.getItem("divPos")){
        divPos = localStorage.getItem("divPos")
    }
    console.log(divPos)
    for (let i = 0;i < amountOfDivs;i++){
        allDiv[i] = document.getElementById(i.toString())
        mainDiv.removeChild(allDiv[i])
    }
    for (let i = 0;i < amountOfDivs;i++){
        mainDiv.append(allDiv[divPos[i].toString()])
    }
    console.log(allDiv)


}
changeDivPos(amountOfDivs)



function sendMessage(type) {

    let text
    let date = getFormattedDate(new Date())
    changeLastMessage(getCurrentDivId())

    if(type==="myMessage"){
        text = document.getElementById("my-message-input").value
        document.getElementById("my-message-input").value = "";
    }
    else{
        text = document.getElementById("interlocutor-message-input").value
        document.getElementById("interlocutor-message-input").value = "";
    }


    if (text !== "") {
        addMessageToBlock(text,date,type)
        pushNewMessageToStorage(text,date,type)
        changeLastMessage(getCurrentDivId())
        divToStart()
    }


}


function pushNewMessageToStorage(message,date,type){
    let generatedId = getGeneratedId().toString()
    localStorage.setItem(generatedId + "text",message)
    localStorage.setItem(generatedId + "date",date)
    localStorage.setItem(generatedId + "type",type)
    localStorage.setItem(generatedId + "divId",getCurrentDivId().toString())
}

function showAllMessages() {

    for (let i = 0; i < getGeneratedId(); i++) {
        if (localStorage.getItem(`${i}divId`) === getCurrentDivId().toString()) {
            let msgText = localStorage.getItem(`${i}text`)
            let msgDate = localStorage.getItem(`${i}date`)
            let msgType = localStorage.getItem(`${i}type`)
            addMessageToBlock(msgText, msgDate, msgType)

        }
    }

}

function addMessageToBlock(text,date,type){


    let div = document.getElementById("chat-message-list")

    if(type==="myMessage"){
        div.innerHTML +=  `<div id="listOfMyMessages" class="my-messages">
            <span id="myMessage" class="message-text">${text}</span>
            <div id="dateOfMyMessage" class="message-date">${date}</div>
        </div>`
    }
    else{
        div.innerHTML += `<div id="listOfInterlocutorMessages" class="interlocutor-messages">
            <span class="message-text">${text}</span>
            <div class="message-date">${date}</div>
        </div>
    </div>`

    }

}


function getGeneratedId(){
    if(localStorage.length === 1){
        return 0
    }
    if(!localStorage.getItem("divPos")){
        return (localStorage.length - 1)/4
    }
    return (localStorage.length - 2)/4
}










// Formatted date


function getFormattedDate(date) {
    let options = {day: "2-digit", month: "short", hour:"2-digit",minute:"2-digit"}
    //    return (date.getHours() + ":" + date.getMinutes() + " || " + date.getDate() + " " + getFormattedMonth(date.getMonth())).toString()
    return date.toLocaleDateString("en-GB",options)
}








// Event-listener ----> click on enter to send a message

document.getElementById("my-message-input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSendMyMsg").click();
    }
});

document.getElementById("interlocutor-message-input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSendIntrMsg").click();
    }
});

changeCurrentDivId()
showAllMessages()
changeAllLastMessage(amountOfDivs)
let scroll = document.getElementById('chat-message-list');
scroll.scrollTop = scroll.scrollHeight;




