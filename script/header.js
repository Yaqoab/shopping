 let navIcon=document.getElementById("menu");
 let menu=document.getElementById('list');
 let searchIcon=document.getElementById('search');
 let searchInput=document.getElementById('input');
 searchInput.style.display="none";
 navIcon.onclick=function(){
  if (navIcon.className=="fa fa-bars") {
    menu.style.display="block";
    navIcon.className="fa fa-times";
  }else{
    menu.style.display="none";
    navIcon.className="fa fa-bars";
  }  
}

searchIcon.onclick=function(){
 if (searchIcon.className=="fa fa-search") {
    input.style.display="block";
    searchIcon.className="fa fa-times";
   
}else{
  input.style.display="none";
    searchIcon.className="fa fa-search";
}
}

function cartNumberDisplay(){
  let cartNumber=0;
  let cartItem=JSON.parse(localStorage.getItem("productCart"))
 
   if (cartItem == null) {
    cartNumber=0
  }else{
   cartItem.forEach(item=>{
     cartNumber +=item.quantity   
  });
  }
 // console.log(cartNumber)
  document.querySelector(".cartNum").textContent=cartNumber;
 }
cartNumberDisplay()