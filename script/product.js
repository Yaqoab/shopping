class AddToCardElement{
 constructor(image,name,about,price){
 	 this.image=image;
   this.name=name;
   this.about=about;
   this.price=price;
 }
}
 

const phoneAndTablet=[
new AddToCardElement('pop5lte--blue-800_800.png','tecno','pop5lte--blue-800',35000),
new AddToCardElement('800.png','samsung','samsung tablet',36000),
new AddToCardElement('africa-en-galaxy-a11-a115-sm.png','samsung','galaxy-a11-a115-sm',36000),
new AddToCardElement('10 Octa Dual SIM Card.jpg','infinix','10 Octa Dual SIM Card',39000)
];

const computers=[
new AddToCardElement('hp notebook14 250,000.jpg','hp','hp notebook14 250,000',250000),
new AddToCardElement('Desktop-System-Intel-Dual-Core-500GB-4GB.jpg','lenovo','hp desktop Hdd 8GB RAM',40000),
new AddToCardElement('Lenovo Ideapad.jpg','lenovo','Lenovo Ideapad 14 Amd Quad Core 1TB Hdd 8GB RAM',165000),
new AddToCardElement('Apple iMac.jpg','Apple','Apple iMac 27 Core i5 3.3ghz 6 core 512GB',165000)
];

 const electronics=[
new AddToCardElement('Amani 32 INCHES LED FULL HD__63,00.jpg','hp','Amani 32 inches led full HD',63000),
new AddToCardElement('canon221,00.jpg','canon','canon camera',22100),
new AddToCardElement('Skyrun 93.jpg','Skyrun','Skyrun 93 Litres Single Door Fridge',80000),
new AddToCardElement('rechargeable speaker9400.jpg','Skyrun','rechargeable speaker9400',74000)
];

const accessories=[
new AddToCardElement('Apple Apple Airpod__6628.jpg','apple','Apple Airpod',6000),
new AddToCardElement('Baseus TYPEC One With Three Fast Charging.jpg','USB','Data Cable For Apple Android ',11711),
new AddToCardElement('Oraimo 27000mAh.jpg','power bank','27000mAh Charing Bank',11500),
new AddToCardElement('V9 Earhook BT.jpg','headset','V9 Earhook BT Headset',2119)
]
function displayProduct(element,prod){
 let card=document.getElementById(element)
 let html='';
  console.log(html)
 prod.forEach(el=>{
 
  html +=`
  <div class="cards">
  <img src="images/${el.image}">
            <div class="card_info">
              <h4 class="card_title">${el.name}</h4>
              <p class="card_text">${el.about}</p>
              <p class="card_price">${new Intl.NumberFormat('en-NG',{
    style:'currency',
    currency:'NGN'
  }).format(el.price)}</p>
              <button class="card_btn add-to-cart"data-id="1">Add to cart</button>
            </div>
            </div>

  `;
 })
 card.innerHTML=html
}
displayProduct('phones',phoneAndTablet)
displayProduct('computers',computers)
displayProduct('electronics',electronics)
displayProduct('Accessories',accessories)