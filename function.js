let BindingEvent = function(){
    document.querySelectorAll(".js-keep-button").forEach(button => {
        button.addEventListener("click",ChangeColor);
    });
    document.querySelectorAll(".js-ratio-button").forEach(button => {
        button.addEventListener("click",ChangeColor2);
    });
}();

function ChangeColor(){
    this.classList.toggle("bgc-green");
}
function ChangeColor2(){
    if(this.classList.contains("bgc-green"))
        return;
    else{
        document.querySelectorAll(".js-ratio-button").forEach(button => {
            if(button.classList.contains("bgc-green"))
                button.classList.toggle("bgc-green");
        });
        this.classList.toggle("bgc-green");
    }
}