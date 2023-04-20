let details=document.createElement("div")
details.setAttribute("id","list")
details.innerHTML='<ul id=list><li id=list1><li id=list2><li id=list3><li id=list4><li id=list5><li id=list6></li></li></li></li></li></li></ul>'
document.getElementById("sub").appendChild(details)


async function getData() {
let input=document.getElementById("text").value;
let data = await fetch(`https://www.fishwatch.gov/api/species/${input}`)  
let data1 = await data.json()
// console.log(data1[0].Bycatch)
console.log(data1[0].Population)
let population = data1[0].Population
let byCatch = data1[0].Bycatch
let calories= data1[0].Calories
let carbohydrates= data1[0].Carbohydrate
let cholestrol= data1[0].Cholesterol

document.getElementById("list1").innerHTML=`Species Name : ${input}`
document.getElementById("list2").innerHTML=`Population : ${population}`
document.getElementById("list3").innerHTML=`Bycatch : ${byCatch}`
document.getElementById("list4").innerHTML=`Calories : ${calories}`
document.getElementById("list5").innerHTML=`Carbohydrates : ${carbohydrates}`
document.getElementById("list6").innerText=`Calories : ${cholestrol}`
//let availability = data1.Availability 
   
}
getData()