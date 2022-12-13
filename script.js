let readText = document.querySelector("#readText");
let resultText = document.querySelector("#resultText");
let btnEncrypt = document.querySelector("#btnEncrypt");
let btnDecrypt = document.querySelector("#btnDecrypt");
let btnCopy = document.querySelector("#btnCopy");
let btnDel = document.querySelector("#btnDel");
let msgActive = false;

function colorButton(j){
    switch(j){
        case 1: document.getElementById("btnEncrypt").style.backgroundColor = "#0A3871";
                document.getElementById("btnEncrypt").style.color = "#ffffff";
                document.getElementById("btnDecrypt").style.backgroundColor = "#D8DFE8";
                document.getElementById("btnDecrypt").style.color = "#0A3871";
        break;
        case 2: document.getElementById("btnEncrypt").style.backgroundColor = "#D8DFE8";
                document.getElementById("btnEncrypt").style.color = "#0A3871";
                document.getElementById("btnDecrypt").style.backgroundColor = "#0A3871";
                document.getElementById("btnDecrypt").style.color = "#ffffff";
        break;
    }
}

function asidePanel(x){
    switch(x){
        case 0: document.getElementById("result-on").style.display = "none";
                document.getElementById("result-off").style.display = "block";
        break;
        case 1: document.getElementById("result-on").style.display = "block";
                document.getElementById("result-off").style.display = "none";
        break;
    }
}

function msgAlert(n){
    switch(n){
        case 0: document.getElementById("msg-empty-section").style.display = "block";
                document.getElementById("msg-empty-aside").style.display = "block";
                document.getElementById("msg-error").style.display = "none";
                document.getElementById("msg-info").style.display = "none";
        break;
        case 1: document.getElementById("msg-empty-section").style.display = "none";
                document.getElementById("msg-empty-aside").style.display = "block";
                document.getElementById("msg-error").style.display = "block";
                document.getElementById("msg-info").style.display = "none";
        break;
        case 2: document.getElementById("msg-empty-section").style.display = "block";
                document.getElementById("msg-empty-aside").style.display = "none";
                document.getElementById("msg-error").style.display = "none";
                document.getElementById("msg-info").style.display = "block";
        break;
    }
}

function validation(){
    let processText = readText.value;
    let validation = "áéíóúäëïöüQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚÄËÏÖÜ";

    if(processText == ""){
        asidePanel(0);
        readText.focus();
    }

    for (var i of processText){
        if(validation.includes(i)){            
            readText.value = readText.value.toLowerCase()
            .replaceAll("á","a")
            .replaceAll("é","e")
            .replaceAll("í","i")
            .replaceAll("ó","o")
            .replaceAll("ú","u")
            .replaceAll("ä","a")
            .replaceAll("ë","e")
            .replaceAll("ï","i")
            .replaceAll("ö","o")
            .replaceAll("ü","u");

            readText.value = readText.value;

            msgActive = true;
            break;
        }
    }
}

function encrypt(){

    colorButton(1);
    asidePanel(1);
    validation();

    if(msgActive == true){
        msgAlert(1);
    }
    if(msgActive == false){
        msgAlert(0);
    }

    let processText = readText.value;

    let encrypted = processText
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")
    .replaceAll(" ","std");
    
    resultText.focus();
    resultText.value = encrypted;
    msgActive = false;
}

function decrypt(){

    colorButton(2);
    asidePanel(1);
    validation();

    if(msgActive == true){
        msgAlert(1);
    }
    if(msgActive == false){
        msgAlert(0);
    }

    let processText = readText.value;
    
    let dencrypted = processText
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
    .replaceAll("std"," ");

    resultText.focus();
    resultText.value = dencrypted;
    msgActive = false;
}

function copyText(){
    let copyText = document.querySelector("#resultText");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    readText.value = "";
    msgAlert(2);
}

function delText(){
    readText.value = "";
    resultText.value = "";
    asidePanel(0);
    readText.focus();

}

colorButton(1);
msgAlert(0);
asidePanel(0);

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;
btnCopy.onclick = copyText;
btnDel.onclick = delText;