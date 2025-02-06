// išjungti dešinį pelės mygtuką
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
// išjungti F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
)
    return false;
};
function loadFunction() {
    setInterval(function() {
        document.getElementById("reklama1").style.display = "none";
        document.getElementById("reklama2").style.display = "block";
        document.getElementById("reklamaImg1").style.display = "none";
        document.getElementById("reklamaImg2").style.display = "inline";
    }, 10 * 1000);
    setTimeout(() => {  
        setInterval(function() {
            document.getElementById("reklama1").style.display = "block";
            document.getElementById("reklama2").style.display = "none";
            document.getElementById("reklamaImg1").style.display = "inline";
            document.getElementById("reklamaImg2").style.display = "none";
        }, 10 * 1000);
    }, 5000);
    document.getElementById("loadImg").style.opacity = "1";
    setTimeout(() => {  
        document.getElementById("screen").style.backgroundColor = "rgba(255, 255, 255, 0.75)";
    }, 2000);
    setTimeout(() => {  
        document.getElementById("screen").style.opacity = "0";
    }, 4000);
    setTimeout(() => {  
        document.getElementById("screen").style.display = "none";
    }, 4300);
    // setTimeout(() => {  
        // document.getElementById("reklama1").style.display = "none";
        // document.getElementById("reklama2").style.display = "block";
        // document.getElementById("reklamaImg1").style.display = "none";
        // document.getElementById("reklamaImg2").style.display = "inline";
        // setInterval(function() {
        //     document.getElementById("reklama1").style.display = "none";
        //     document.getElementById("reklama2").style.display = "block";
        //     document.getElementById("reklamaImg1").style.display = "none";
        //     document.getElementById("reklamaImg2").style.display = "inline";
        // }, 6 * 1000);
    // }, 7300);
    // setTimeout(() => {  
        // document.getElementById("reklama1").style.display = "block";
        // document.getElementById("reklama2").style.display = "none";
        // document.getElementById("reklamaImg1").style.display = "inline";
        // document.getElementById("reklamaImg2").style.display = "none";
        // setInterval(function() {
        //     document.getElementById("reklama1").style.display = "block";
        //     document.getElementById("reklama2").style.display = "none";
        //     document.getElementById("reklamaImg1").style.display = "inline";
        //     document.getElementById("reklamaImg2").style.display = "none";
        // }, 6 * 1000);
    // }, 10300);
}

function start() {
    document.getElementById("screen").style.display = "flex";
    setTimeout(() => {  
        document.getElementById("screen").style.opacity = "1";
    }, 10);
    setTimeout(() => {  
        document.getElementById("options").style.left = "0";
        document.getElementById("ekranas").style.marginLeft = "-100%";
        document.getElementById("reklamosTekstas").style.marginLeft = "-100%";
        document.getElementById("logoMenu").style.marginLeft = "45px";
        document.getElementById("backSelect").style.left = "0";
    }, 1700);
    setTimeout(() => {  
        document.getElementById("screen").style.opacity = "0";
    }, 2000);
    setTimeout(() => {  
        document.getElementById("screen").style.display = "none";
    }, 2300);
}
function selectBack() {
    setTimeout(() => {
        document.getElementById("ekranas").style.marginLeft = "0";
        document.getElementById("reklamosTekstas").style.marginLeft = "0";
        document.getElementById("options").style.left = "100%";
        document.getElementById("logoMenu").style.marginLeft = "0";
        document.getElementById("backSelect").style.left = "-50px";
    }, 10);
}
function collect() {
    document.getElementById("screen").style.display = "flex";
    setTimeout(() => {  
        document.getElementById("screen").style.opacity = "1";
    }, 10);
    setTimeout(() => {  
        document.getElementById("collect").style.left = "0";
        document.getElementById("options").style.marginLeft = "-100%";
        document.getElementById("backSelect").style.display = "none";
        document.getElementById("backCollect").style.display = "flex";
    }, 1700);
    setTimeout(() => {  
        document.getElementById("screen").style.opacity = "0";
    }, 2000);
    setTimeout(() => {  
        document.getElementById("screen").style.display = "none";
    }, 2300);
}
function collectBack() {
    setTimeout(() => {
        document.getElementById("options").style.marginLeft = "0";
        document.getElementById("collect").style.left = "100%";
    }, 10);
    setTimeout(() => {
        document.getElementById("backCollect").style.display = "none";
        document.getElementById("backSelect").style.display = "flex";
        document.getElementById("inputas").value = '';
    }, 310);
}
function check(form)
{
    if(form.pin.value === "222857")
    {
        document.getElementById("backCollect").style.pointerEvents = "none";
        document.getElementById("istrinimas").style.color = "transparent";
        document.getElementById("istrinimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("key1").style.opacity = "0.2";
            document.getElementById("key2").style.opacity = "0.2";
            document.getElementById("key3").style.opacity = "0.2";
            document.getElementById("key4").style.opacity = "0.2";
            document.getElementById("taskeliai").style.opacity = "0.2";
            document.getElementById("ivestiPinKoda").style.opacity = "0.2";
            document.getElementById("keypad").style.pointerEvents = "none";
        }, 10);
        setTimeout(() => {
            document.getElementById("key1").style.opacity = "1";
            document.getElementById("key2").style.opacity = "1";
            document.getElementById("key3").style.opacity = "1";
            document.getElementById("key4").style.opacity = "1";
            document.getElementById("taskeliai").style.opacity = "1";
            document.getElementById("ivestiPinKoda").style.opacity = "1";
            document.getElementById("keypad").style.pointerEvents = "all";
            document.getElementById("collect").style.left = "-100%";
            document.getElementById("completeCollect").style.left = "0";
            document.getElementById("backCollect").style.left = "-50px";
            document.getElementById("logoMenu").style.marginLeft = "0";
        }, 3000);
        setTimeout(() => {
            document.getElementById("15sec").style.display = "none";
            document.getElementById("14sec").style.display = "inline";
        }, 4000);
        setTimeout(() => {
            document.getElementById("14sec").style.display = "none";
            document.getElementById("13sec").style.display = "inline";
        }, 5000);
        setTimeout(() => {
            document.getElementById("13sec").style.display = "none";
            document.getElementById("12sec").style.display = "inline";
        }, 6000);
        setTimeout(() => {
            document.getElementById("12sec").style.display = "none";
            document.getElementById("11sec").style.display = "inline";
        }, 7000);
        setTimeout(() => {
            document.getElementById("11sec").style.display = "none";
            document.getElementById("10sec").style.display = "inline";
        }, 8000);
        setTimeout(() => {
            document.getElementById("10sec").style.display = "none";
            document.getElementById("9sec").style.display = "inline";
        }, 9000);
        setTimeout(() => {
            document.getElementById("9sec").style.display = "none";
            document.getElementById("8sec").style.display = "inline";
        }, 10000);
        setTimeout(() => {
            document.getElementById("8sec").style.display = "none";
            document.getElementById("7sec").style.display = "inline";
        }, 11000);
        setTimeout(() => {
            document.getElementById("7sec").style.display = "none";
            document.getElementById("6sec").style.display = "inline";
        }, 12000);
        setTimeout(() => {
            document.getElementById("6sec").style.display = "none";
            document.getElementById("5sec").style.display = "inline";
        }, 13000);
        setTimeout(() => {
            document.getElementById("5sec").style.display = "none";
            document.getElementById("4sec").style.display = "inline";
        }, 14000);
        setTimeout(() => {
            document.getElementById("4sec").style.display = "none";
            document.getElementById("3sec").style.display = "inline";
        }, 15000);
        setTimeout(() => {
            document.getElementById("3sec").style.display = "none";
            document.getElementById("2sec").style.display = "inline";
        }, 16000);
        setTimeout(() => {
            document.getElementById("2sec").style.display = "none";
            document.getElementById("1sec").style.display = "inline";
        }, 17000);
        setTimeout(() => {
            document.getElementById("1sec").style.display = "none";
            document.getElementById("0sec").style.display = "inline";
        }, 18000);
        setTimeout(() => {
            document.getElementById("vaizdasBusRodomas").style.display = "none";
            document.getElementById("sistemaAtnaujinama").style.display = "block";
        }, 19000);
        setTimeout(() => {  
            location.replace("index.html");
        }, 20000);
    }
    else{
        document.getElementById("backCollect").style.pointerEvents = "none";
        document.getElementById("istrinimas").style.color = "transparent";
        document.getElementById("istrinimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("key1").style.opacity = "0.2";
            document.getElementById("key2").style.opacity = "0.2";
            document.getElementById("key3").style.opacity = "0.2";
            document.getElementById("key4").style.opacity = "0.2";
            document.getElementById("taskeliai").style.opacity = "0.2";
            document.getElementById("ivestiPinKoda").style.opacity = "0.2";
            document.getElementById("keypad").style.pointerEvents = "none";
        }, 10);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-30px";
            document.getElementById("key1").style.opacity = "1";
            document.getElementById("key2").style.opacity = "1";
            document.getElementById("key3").style.opacity = "1";
            document.getElementById("key4").style.opacity = "1";
            document.getElementById("taskeliai").style.opacity = "1";
            document.getElementById("ivestiPinKoda").style.opacity = "1";
            document.getElementById("keypad").style.pointerEvents = "all";
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("backCollect").style.pointerEvents = "all";
        }, 3000);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3100);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
        }, 3200);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3300);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "0";
        }, 3400);
    }
}
let inputas = "";
function pirmas() {
    inputas = inputas + 1;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function antras() {
    inputas = inputas + 2;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function trecias() {
    inputas = inputas + 3;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function ketvirtas() {
    inputas = inputas + 4;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function penktas() {
    inputas = inputas + 5;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function sestas() {
    inputas = inputas + 6;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function septintas() {
    inputas = inputas + 7;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function astuntas() {
    inputas = inputas + 8;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function devintas() {
    inputas = inputas + 9;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function nulinis() {
    inputas = inputas + 0;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrinimas").style.color = "#000033";
    document.getElementById("istrinimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#000033";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#000033";
            document.getElementById("checkBtn").click();
    }
}
function istrinti() {
    inputas = "";
    document.getElementById("kodas").value = '';
    document.getElementById("istrinimas").style.color = "transparent";
    document.getElementById("istrinimas").style.pointerEvents = "none";
    document.getElementById("taskelis1").style.backgroundColor = "white";
    document.getElementById("taskelis2").style.backgroundColor = "white";
    document.getElementById("taskelis3").style.backgroundColor = "white";
    document.getElementById("taskelis4").style.backgroundColor = "white";
    document.getElementById("taskelis5").style.backgroundColor = "white";
    document.getElementById("taskelis6").style.backgroundColor = "white";
}