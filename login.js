var containerbox=document.querySelector(".containerbox")
var login =document.getElementById("login")
var x=document.getElementById("x")
var form =document.querySelector("form")

login.addEventListener("click",function(){
    containerbox.style.display="block"
})
x.addEventListener("click",function(){
    containerbox.style.display="none"
    form.reset()
})