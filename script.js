let engru = document.getElementById("engru")
let eng = document.querySelector(".eng")
let ru = document.querySelector(".ru")

engru.onclick = function(){
    if(eng.style.color == "black"){
        eng.style.color = "#828282"
        ru.style.color = "black"
    }
    else{
        eng.style.color = "black"
        ru.style.color = "#828282"
    }
}