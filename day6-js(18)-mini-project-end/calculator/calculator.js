let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button => {
    button.addEventListener("click", (e) => {
        let targetText = e.target.innerText;
        switch(targetText){
            case "=":
                try{
                    display.innerText = Function("return " + display.innerText)();
                }catch{
                    display.innerText = "0";
                }
                break;
            case "C":
                display.innerText = "";
                break;
            case "del":
                display.innerText = display.innerText.slice(0, -1);
                break;
            default: 
                display.innerText += targetText
        }
        console.log()

    })
})