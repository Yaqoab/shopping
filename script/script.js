var slideIndex = 0;
showSlides();

function showSlides(){
	var i;
	// get the array of divs' with classname image-sliderfade
	var slides = document.getElementsByClassName("image-sliderfade");
	// get the array of divs' with classname dot
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}
	// increase by 1, Global variable
	slideIndex++;
	// check for boundary
	if (slideIndex > slides.length)
	{
		slideIndex = 1;
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.
		replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	// Change image every 2 seconds
	setTimeout(showSlides, 5000);
}

 
// for(key in prod1)console.log(prod1[key])
// let descriptor = Object.getOwnPropertyDescriptor(prod1, 'priceNGN');
// alert( JSON.stringify(descriptor, null, 2 ) );


 const cartButtons=document.querySelectorAll(".add-to-cart");
 const showCartCount=document.querySelector(".cartNum");
 //showCartCount.textContent="hello";
 //const info=card.querySelectorAll(".card_info")
 const products=[]

 for(key of cartButtons){
   key.addEventListener("click",()=>{
   	let priceNGN=parseFloat(event.target.parentElement.children[2].textContent.replace(/\₦|,/g, ''));
   	let productsObj={
   		image:event.target.parentElement.parentElement.children[0].src,
   		name:event.target.parentElement.children[0].textContent,
   		price:priceNGN,
   		totalPrice:priceNGN,
   		quantity:1,
   	}
   	addItemToStorage(productsObj)
   	

   
   })
 }

  function addItemToStorage(product){
  	let cartItem=JSON.parse(localStorage.getItem('productCart'));
  	if (cartItem ===  null) {
     products.push(product)
     localStorage.setItem("productCart",JSON.stringify(products));
  	}else{
  	 cartItem.forEach(item=>{
       if (product.name == item.name) {
       	 product.quantity = item.quantity +=1;
       	 product.totalPrice = item.totalPrice += product.totalPrice;
       }else{
       	products.push(item)
       }
  	 });
  	 products.push(product)
  	}
  	 localStorage.setItem("productCart",JSON.stringify(products));
  	window.location.reload()
  }


