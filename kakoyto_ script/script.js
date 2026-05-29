let fruit = ["яблоко", "банан", "апельсин","лимон"]
//console.log(fruit) 
//console.log(fruit[3])
//fruit.push("слива")
//console.log(fruit) 
//fruit.pop()
//console.log(fruit) 
//fruit.splice(0,1)
//console.log(fruit) 
// console.log(fruit[1])

// fruit.push("pineaple")
// console.log(fruit) 
// fruit.pop(0 )
// console.log(fruit) 
// fruit.pop(1)
// console.log(fruit) 
// fruit.pop(2)
// console.log(fruit) 
// fruit.pop(3)
// console.log(fruit)
// fruit.push("pineaple")
// console.log(fruit)
// for(let i=0; i < fruit.length; i++)
//     console.log(fruit[i])

let res = document.querySelector(".res")
let b1 = document.querySelector(".b-1")
let b2 = document.querySelector(".b-2")

function update(){
    res.innerHTML = ""
    for(let i = 0; i < fruit.length; i++){
        res.innerHTML += i + ": " + fruit[i] + "<br>"
    }
}
update()


b1.addEventListener("click", function(){
    let il = document.querySelector(".i-1")
    fruit.push(il.value)
    update()
    il.value = ""
})


b2.addEventListener("click", function(){
    let il = document.querySelector(".i-1")
    fruit.pop()
    update()
    il.value = ""})

















