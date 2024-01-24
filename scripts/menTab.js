let shirt =[
  {
   image:"https://m.media-amazon.com/images/I/719gKQS4doL._AC_UL640_QL65_.jpg",
   name:"Monte Carlo",
   price:"1799",
   offerPrice:"569",

  },
  {
      image:"https://m.media-amazon.com/images/I/71mGhk13xYL._AC_UL640_QL65_.jpg",
      name:"Lymio",
      price:"1499",
      offerPrice:"499",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81SynkuTdiL._AC_UL640_QL65_.jpg",
      name:"Allen Solly",
      price:"1599",
      offerPrice:"699",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71wDwvFKrxL._AC_UL640_QL65_.jpg",
      name:"DHRUVI TRENDZ",
      price:"2099",
      offerPrice:"399",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81-JAkrN1sL._AC_UL640_QL65_.jpg",
      name:"Peter England",
      price:"1799",
      offerPrice:"593",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/713elmsvGxL._AC_UL640_QL65_.jpg",
      name:"INKAST",
      price:"1499",
      offerPrice:"519",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71PU6aeNj-L._AC_UL640_QL65_.jpg",
      name:"Indo Primo",
      price:"2199",
      offerPrice:"669",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71rzKMArJZL._AC_UL640_QL65_.jpg",
      name:"Be Active",
      price:"1199",
      offerPrice:"369",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81XbXTOcuZL._AC_UL640_QL65_.jpg",
      name:"Majestic Man",
      price:"1299",
      offerPrice:"149",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71qfMZpYoCL._AC_UL640_QL65_.jpg",
      name:"U-TURN",
      price:"999",
      offerPrice:"399",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81r9ntAzoPL._AC_UL640_QL65_.jpg",
      name:"GLORYBOYZ",
      price:"1299",
      offerPrice:"149",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71K-Sq54cUL._AC_UL640_QL65_.jpg",
      name:"Van Heusen",
      price:"799",
      offerPrice:"249",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/816hFhJSnFL._AC_UL640_QL65_.jpg",
      name:"Look Mark",
      price:"2198",
      offerPrice:"498",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71JFYy6VDUL._AC_UL640_QL65_.jpg",
      name:"Van Heusen",
      price:"1099",
      offerPrice:"399",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71YkSSLzCmL._AC_UL640_QL65_.jpg",
      name:"Leriya Fashion",
      price:"1499",
      offerPrice:"499",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81MMOYv4fxL._AC_UL640_QL65_.jpg",
      name:"Indo Primo",
      price:"1199",
      offerPrice:"299",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81SJxjDDwuL._AC_UL640_QL65_.jpg",
      name:"Diverse",
      price:"1099",
      offerPrice:"399",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/71FpLGZsTmL._AC_UL640_QL65_.jpg",
      name:"Symbol",
      price:"1299",
      offerPrice:"309",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/81D69UzO1QL._AC_UL640_QL65_.jpg",
      name:"US Polo",
      price:"1099",
      offerPrice:"259",
 
     },
     {
      image:"https://m.media-amazon.com/images/I/91awjEQ7nVL._AC_UL640_QL65_.jpg",
      name:"Dennis Lingo",
      price:"2499",
      offerPrice:"269",
 
     },
]


let CartArray = JSON.parse(localStorage.getItem("CartArray")) || [];



shirt.forEach(function(el){
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
      addtocartshirt(el);
      alert("Product added to cart !!");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivShirt").append(card);
});


function addtocartshirt(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}


let shoes = [
  {
    image:
      "https://m.media-amazon.com/images/I/5157yvIWmBL._AC_UL400_.jpg",
    name: "Grey Sports Shoes for Men's- Lace-Up Shoes",
    price: "2,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71TAzJmxClL._AC_UL400_.jpg",
    name: "Men's Bouncer-01 Sports,Walking,Gym",
    price: "649",
    offerPrice: "999",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61u8y6BN0+L._AC_UL400_.jpg",
    name: "Pulsar Trail",
    price: "1,009",
    offerPrice: "1,599",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81HxIKRCUZL._AC_UL400_.jpg",
    name: "Men's Carbon-02 Sports Running",
    price: "2,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61++1-R25gL._AC_UL400_.jpg",
    name: "Mens Sd0734g Sneaker",
    price: "2,500",
    offerPrice: "3,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/713UmakQhoL._AC_UL400_.jpg",
    name: "Men's Dazzler Sneakers",
    price: "1,500",
    offerPrice: "2,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/5157yvIWmBL._AC_UL400_.jpg",
    name: "Grey Sports Shoes for Men's- Lace-Up Shoes",
    price: "2,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51kZRxvxg0L._AC_UL400_.jpg",
    name: "Grey Sports Shoe",
    price: "3,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL400_.jpg",
    name: "Shoes for Men's- Lace-Up Shoes",
    price: "4,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71oQ5cg0rFS._AC_UL400_.jpg",
    name: "Grey Sports Shoes for Men's- Nike",
    price: "4,009",
    offerPrice: "6,000",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61pBTn04eKL._AC_UL400_.jpg",
    name: "Nike Air 1",
    price: "10,009",
    offerPrice: "16,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/5157yvIWmBL._AC_UL400_.jpg",
    name: "Grey Sports Shoes for Men's- Lace-Up Shoes",
    price: "2,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/5157yvIWmBL._AC_UL400_.jpg",
    name: "Campus",
    price: "2,009",
    offerPrice: "3,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71Q0Bu0rHNL._AC_UL400_.jpg",
    name: "Vector X",
    price: "7,009",
    offerPrice: "9,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71YYFRuXmjL._AC_UL400_.jpg",
    name: "SparX",
    price: "5,009",
    offerPrice: "7,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71L4wQiTcXL._AC_UL400_.jpg",
    name: "Adidas",
    price: "8,009",
    offerPrice: "10,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81wjRe1C3jL._AC_UL400_.jpg",
    name: "Men's- Velocity Lace-Up Shoes",
    price: "2,009",
    offerPrice: "6,699",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71eIpmDUAQL._AC_UL400_.jpg",
    name: "Blue Ray",
    price: "1,009",
    offerPrice: "2,999",
  },
  
  {
    image:
      "https://m.media-amazon.com/images/I/81KiR3boi1L._AC_UL400_.jpg",
    name: "Grey Sports Shoes for Men's- Lace-Up Shoes",
    price: "2,500",
    offerPrice: "3,500",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/51cSS91ny+L._AC_UL400_.jpg",
    name: "Nike Force 1",
    price: "12,009",
    offerPrice: "16,699",
  },
];



shoes.forEach(function(el){
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
      addtocartshoes(el);
      alert("Product added to cart !!");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivShoes").append(card);
});


function addtocartshoes(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}




let pants =[
    {
     image:"https://m.media-amazon.com/images/I/717-WaIUi9L._SY879_.jpg",
     price:"1198",
     offerPrice:"678",
     name: "Symbol Men Dress Pants",
    }, 
    {
        image:"https://m.media-amazon.com/images/I/61Jh7DzR8sL._SY879_.jpg",
        price:"2398",
        offerPrice:"978",
        name: "Symbol Men Dress Pants",
       },
       {
        image:"https://m.media-amazon.com/images/I/61c0YM3aMPL._SY741_.jpg",
        price:"4598",
        offerPrice:"1178",
        name: "Aahwan Women's & Girls' Solid High Waist with Pockets Cargo Pants",
       },
       {
        image:"https://m.media-amazon.com/images/I/51jXgsSM6SL._SY741_.jpg",
        price:"2398",
        offerPrice:"678",
        name: "KOTTY Women Polyester Blend Green Solid Trousers",
       },
       {
        image:"https://m.media-amazon.com/images/I/61r+ZK+jPtL._SX679_.jpg",
        price:"3498",
        offerPrice:"978",
        name: "ADDYVERO Women's Slim Fit Casual Trousers",
       },
       {
        image:"https://m.media-amazon.com/images/I/41xLvBm35sL._SX679_.jpg",
        price:"2998",
        offerPrice:"878",
        name: "JUGULAR Men's Polyester Solid Men Stylish Cargo Track Pants",
       },
       {
        image:"https://m.media-amazon.com/images/I/61mp12NqMsL._SY741_.jpg",
        price:"3998",
        offerPrice:"778",
        name: "J B Fashion Track Pant for Men || Track Pants || Lycra Full Elastic Jogger Track Pant (A-TP-01-04)",
       },
       {
        image:"https://m.media-amazon.com/images/I/61cgpCE7mML._SX679_.jpg",
        price:"4698",
        offerPrice:"978",
        name: "MALENO Slim Fit Men Cotton Blend Formal Trouser",
       },
       {
        image:"https://m.media-amazon.com/images/I/61jfBIZmcmL._SY741_.jpg",
        price:"1998",
        offerPrice:"878",
        name: "KOTTY Women Regular Length Solid Trousers",
       },
       {
        image:"https://m.media-amazon.com/images/I/61BUTnhvIFL._SX679_.jpg",
        price:"2798",
        offerPrice:"978",
        name: "T2F Girl's Regular Fit Track Pants",
       },
]



pants.map(function(el){
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
      addtocartpants(el);
      alert("Product added to cart !!");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivPants").append(card);
});


function addtocartpants(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}

