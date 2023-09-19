document.addEventListener("DOMContentLoaded",function(){
    //get element by id
   var mainHeader= document.getElementById("main-header");
   mainHeader.style.color="blue";
   mainHeader.style.fontSize="30px";
   mainHeader.style.textTransform="uppercase";
   mainHeader.style.textAlign="center";

//get element by class name
   var headings= document.getElementsByClassName("heading");
   for(i=0;i<headings.length;i++){
    var element=headings[i];
    element.style.color="tomato";
    element.innerHTML="document-"+(i+1);//change inner text
   }

// adding new element

var firstArticle=document.getElementById("first-article");
var newText=document.createElement("p");
newText.innerHTML="this is added by javascript";
firstArticle.appendChild(newText);

// query selector all

var otherArticle= document.querySelectorAll(".other-article .author");
for(i=0;i<otherArticle.length;i++){
    var element=otherArticle[i];
    element.style.textTransform="uppercase";
}


// add new list via javascript
var giftList= document.getElementById("gift-list");
var newList=document.createElement("li");
newList.innerHTML="another gift";
giftList.appendChild(newList);

// set title or title change
document.getElementById("main-header").setAttribute("title","i am main header");


})