function displayCartItem(){
 	let html='';
  let total=0;
 	let cartItem=JSON.parse(localStorage.getItem('productCart'));
  if (cartItem == null) {
  html =`
  <td><h4>No cart product <a style="color:blue" href="index.html">shop now</a></h4><td>
  `;
 }else{
  cartItem.forEach(item=>{
  html +=`
   <tr>
        <td class="hidden-xs">
         <img src="${item.image}" width="47" height="47">
        </td>
         <td>${item.name}</a>
         </td>
        <td class="text-center">${item.quantity}</td>
        <td class="price">${new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN'
    }).format(item.totalPrice)}</td>
                          
        <td class="text-center">
        <button class="btn btn-primary remove">Remove</button>
    </td>
  </tr>
  `;
 
  total +=item.totalPrice
  });

 }

 	document.querySelector(".carts").innerHTML=html;
  document.querySelector(".total").innerHTML=new Intl.NumberFormat('en-NG',{
    style:'currency',
    currency:'NGN'
  }).format(total);
 }
 displayCartItem();


   let prod=[];
let removeItem=document.getElementsByClassName('remove');
for(remove of removeItem){
  remove.addEventListener('click',()=>{

    let cartItem=JSON.parse(localStorage.getItem('productCart'));
    let targetName=event.target.parentElement.parentElement.children[1].textContent.trim();
    cartItem.forEach(item=>{
       if (item.name !=targetName) {
          prod.push(item)
          
       }
    });
     localStorage.setItem("productCart",JSON.stringify(prod));
     window.location.reload()
  })
}


