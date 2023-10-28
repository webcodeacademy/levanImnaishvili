
let display = () => {
    let navdisplay = document.getElementById("nav").style.display;
    console.log(navdisplay);

    if(navdisplay == ""){
        document.getElementById("nav").style.display = "block";
    }
    else{
        document.getElementById("nav").style.display = "";
    }
}