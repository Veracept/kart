function funk(){
let a = document.getElementById("imie").value
let b = document.getElementById("nazwisko").value

if(document.getElementById("1").checked == true){
    document.getElementById("result").innerHTML = "Masz na imie " + a + " masz na nazwisko " + b;
}
else{
    alert("zaznacz")
}
}