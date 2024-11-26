var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var addpopupbutton=document.getElementById("add-popup")

addpopupbutton.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    overlay.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
                    <h5>${bookauthorinput.value}</h5>
                    <p>${bookdescriptioninput.value}</p>
                    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    overlay.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}