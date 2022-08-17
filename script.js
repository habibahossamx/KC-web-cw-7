function BMI(w, h) {
let result= w / (h*h)
return result
}

console.log(BMI (10,10))


function Status(BMI) {
if (BMI <18.5) {
return "لديك نقص في الوزن"

}else if (BMI >=18.5  &&BMI <25 ){
return"وزنك صحي"

}else if(BMI >=25) {
    "لديك زياده في الوزن "
}

}

function calculate(){
    let weight=document.getElementById("weight").value 
    let height=document.getElementById("height").value 

    let BMI= BMI(weight,height)
    let desc =  Status (BMI)
    let div =document.getElementById(result)
    div.innerTEXT = BMI + " == " + desc 
}