let items = [
    "Яблоко",
    "Палка",
    "Камень",
    "Глина",
    "Золото"
]
let inventory = [0,0,0,0,0]
let drugieitems = [
    "APLLE.JPG",
    "stick.webp",
    "stone.webp",
    "glina (1).jpg",
    "gold.jpg",
]

let button = document.querySelector(".main_button")
let info = document.querySelector(".info")
let inv = document.querySelector(".inventory")

let button2 = document.querySelector(".button")



function update(){
    inv.innerHTML = " "
    for(let i=0; i<inventory.length;i++){
        if(inventory[i]>0){
            inv.innerHTML+= items[i] + ":" + inventory[i] + "<br>"

        }
    }
}
update()

button.addEventListener("click", function(){
    let index = Math.round(Math.random()*(items.length - 1))
    let found = items[index]
    let found_count = Math.round(6/(index+1)*(Math.random()+1))
    info.innerHTML = "Вы нашли :" + found + " в количестве " +  found_count
    inventory[index] += found_count
    let imgrr = document.querySelector(".aplle123")

    if (found == "Яблоко"){
        imgrr.src= drugieitems[0]
    }
    if (found == "Палка"){
        imgrr.src= drugieitems[1]
    }
    if (found == "Камень"){
        imgrr.src= drugieitems[2]
    }
    if (found == "Глина"){
        imgrr.src= drugieitems[3]
    }
    if (found == "Золото"){
        imgrr.src= drugieitems[4]
    }






    if (found -= "Яблоко"){
            imgrr.src -= drugieitems[0]
        }
        if (found -= "Палка"){
            imgrr.src -= drugieitems[1]
        }
        if (found -= "Камень"){
            imgrr.src -= drugieitems[2]
        }
        if (found -= "Глина"){
            imgrr.src -= drugieitems[3]
        }
        if (found -= "Золото"){
            imgrr.src -= drugieitems[4]
        }





    update()
})
button2.addEventListener("click", function(){
    inventory = [0,0,0,0,0]
    info.innerHTML = "продано" 
    update()
})




let userName = prompt("Введите имя:")

if(userName == "."){
    alert("Пользователь найден!")
}


clear()


