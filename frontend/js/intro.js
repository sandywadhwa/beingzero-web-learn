function onClickMe(){
    console.log("Function got called");
    var pElement = document.getElementById("btnresult");
    pElement.innerHTML = '<a href="">You Clicked Me!</a>';
}

function onSliderChange(){
    var pElement = document.getElementById("btnresult");
    let red =document.getElementById("redSlider").value;
    let green =document.getElementById("greenSlider").value;
    let blue =document.getElementById("blueSlider").value;
    let opacity = 1;
    let colors = "rgb("+red+", "+green+", "+blue+", "+opacity+")";
    pElement.innerHTML="rgb("+red+", "+green+", "+blue+", "+opacity+")";
    pElement.style.backgroundColor = colors;
    pElement.style.textAlign="center";
    pElement.style.width="50%";
    pElement.style.height="30px";
    pElement.style.transform = "translate(50px)";
}
