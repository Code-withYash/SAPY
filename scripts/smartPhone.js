let smartphone=[
    {
        image:"https://m.media-amazon.com/images/I/81pmO0iVNhL._AC_UY436_QL65_.jpg",
        name:"Samsung Galaxy M14 5G",
        price:"18990",
        offerPrice:"13039",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/81Zo3lcSZeL._AC_UY436_QL65_.jpg",
        name:"Redmi 12C",
        price:"13999",
        offerPrice:"6799",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL640_QL65_.jpg",
        name:"iPhone 13",
        price:"59000",
        offerPrice:"50749",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71DSxfKzkJL._AC_UY436_QL65_.jpg",
        name:"realme narzo N55",
        price:"1399",
        offerPrice:"10999",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71lPcWlgL4L._AC_UY436_QL65_.jpg",
        name:"Nokia G42 5g",
        price:"16499",
        offerPrice:"11999",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY436_QL65_.jpg",
        name:"OnePlus 10R 5G",
        price:"38999",
        offerPrice:"27999",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71NYjHiZhAL._AC_UY436_QL65_.jpg",
        name:"OnePlus Nord 3 5G",
        price:"37999",
        offerPrice:"35000",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71pKVhll1IL._AC_UY436_QL65_.jpg",
        name:"OnePlus Open",
        price:"139999",
        offerPrice:"129999",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71REplb5oZL._AC_UL640_QL65_.jpg",
        name:"iPhone 15",
        price:"79900",
        offerPrice:"75000",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UY436_QL65_.jpg",
        name:"IQOO Neo 7 pro 5G",
        price:"39999",
        offerPrice:"32999",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/81w+d9xmHJL._AC_UY436_QL65_.jpg",
        name:"Realme 11 pro+ 5G",
        price:"32999",
        offerPrice:"29490",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/61wp0d+7WGL._AC_UY436_QL65_.jpg",
        name:"Motorola Razr 40",
        price:"99999",
        offerPrice:"49999",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/51noqYKjciL._AC_UY436_QL65_.jpg",
        name:"Samsung Galaxy S23 Ultra",
        price:"149999",
        offerPrice:"102000",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/91xdNu6S9DL._AC_UY436_QL65_.jpg",
        price:"23999",
        name:"realme narzo 60 Pro (Mars Orange,12GB+256GB)",
        offerPrice:"20000",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/71kfHC4ANJL._AC_UY436_QL65_.jpg",
        price:"37500",
        name:"Samsung Galaxy A54 5G",
        offerPrice:"35000",
   
       },{
        image:"https://m.media-amazon.com/images/I/61v2S36O42L._AC_UY436_QL65_.jpg",
        price:"78500",
        name:"TECNO Phantom V Fold",
        offerPrice:"70000",
   
       },{
        image:"https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY436_QL65_.jpg",
        price:"199900",
        name:"Apple iPhone 15 Pro Max",
        offerPrice:"198900",
   
       },{
        image:"https://m.media-amazon.com/images/I/81uNWyk3PaL._AC_UY436_QL65_.jpg",
        price:"33999",
        name:"HONOR 90 (Emerald Green, 12GB + 512GB)",
        offerPrice:"30000",
   
       },{
        image:"https://m.media-amazon.com/images/I/71waR9n2enL._AC_UY436_QL65_.jpg",
        price:"29499",
        name:"VIVO V27 5G",
        offerPrice:"25499",
   
       },{
        image:"https://m.media-amazon.com/images/I/61a2JpcC8SL._AC_UY436_QL65_.jpg",
        price:"49999",
        name:"Vanilla Cream, 8GB RAM, 256GB Storage",
        offerPrice:"44999",
   
       },
]



let CartArray = JSON.parse(localStorage.getItem("CartArray")) || [];



smartphone.forEach(function(el){
    let card = document.createElement("div");
    card.setAttribute("id","Card");


    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","UpperDiv");
    // upperdiv.style.height = "350px";
    // upperdiv.style.width = "90%";
    // upperdiv.style.display = "flex";
    // upperdiv.style.border = "2px solid green";
    let image = document.createElement("img");
    image.setAttribute("id","Img");
    image.src = el.image;
    // image.style.width = "100%";
    // image.style.overflow = "hidden";
    upperdiv.append(image);



    let lowerDiv = document.createElement("div");
    lowerDiv.setAttribute("id","LowerDiv");

    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id","NameDiv");
    let name = document.createElement("p");
    name.setAttribute("id","Name");
    name.innerText = el.name;
    nameDiv.append(name);

    let priceDiv = document.createElement("p");
    priceDiv.setAttribute("id","PriceDiv");

    let priceDiv1 = document.createElement("p");
    priceDiv1.setAttribute("id","PriceDiv1");
    let pr = document.createElement("p");
    pr.style.fontFamily = "Bebas Neue";
    pr.innerText = "Price";
    let Price = document.createElement("p");
    Price.setAttribute("id","Price");
    Price.innerText = `₹ ${el.price}`;
    Price.style.textDecoration = "line-through";
    priceDiv1.append(pr,Price);

    let priceDiv2 = document.createElement("p");
    priceDiv2.setAttribute("id","PriceDiv2");
    let offerPr = document.createElement("p");
    offerPr.style.fontFamily = "Bebas Neue";
    offerPr.style.color = "red";
    offerPr.innerText = `Offer Price`;
    let offerPrice = document.createElement("p");
    offerPrice.setAttribute("id","OfferPrice");
    offerPrice.innerText = `₹ ${el.offerPrice}`;
    offerPrice.style.color = `red`;
    priceDiv2.append(offerPr,offerPrice);

    priceDiv.append(priceDiv1,priceDiv2);



    lowerDiv.append(nameDiv,priceDiv);



    let addtocartBtn = document.createElement("button");
    addtocartBtn.setAttribute("id","addToCartButton");
    addtocartBtn.innerText = "Add To Cart";
    addtocartBtn.addEventListener("click",function(){
      addtocartsmartphone(el);
      alert("Product added to cart !!");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#smartPhoneDiv").append(card);
});


function addtocartsmartphone(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}

