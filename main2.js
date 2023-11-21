
let a = parseInt(prompt("zapisz 1 liczbe"))
let b = parseInt(prompt("zapisz 2 liczbe"))

if(a == 0){
    alert("nie mozna prez zero")
}else if(b == 0){
    alert("nie mozna prez zero")
}

function pol(){
    let wynik = a/b
    return wynik
}
document.write(pol())