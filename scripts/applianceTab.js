let earbuds =[
    {
     image:"https://m.media-amazon.com/images/I/51zVOjYRNuL._SX425_.jpg",
     name:"boAt Nirvana Ion TWS",
     price:"1799",
     offerPrice:"1499",
    },
    {
        image:"https://m.media-amazon.com/images/I/41CcucpIplL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Boult Audio Z60",
        price:"1199",
        offerPrice:"999",
       },
        {
        image:"https://m.media-amazon.com/images/I/31Sx7+mu+vL._SY300_SX300_.jpg",
        name:"Samsung Galaxy Buds",
        price:"4299",
        offerPrice:"3899",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/419Pe9doxrL._AC_UL320_.jpg",
        name:"OnePlus Buds Z2 Bluetooth",
        price:"3999",
        offerPrice:"3699",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/31uQjRuF5LL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"realme Buds T300",
        price:"1999",
        offerPrice:"1799",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41NVG86uNdL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"realme Buds Air 5",
        price:"4999",
        offerPrice:"4699",
       },
        {
        image:"https://m.media-amazon.com/images/I/31OCNOXAAZL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"OPPO Enco Air 2",
        price:"3499",
        offerPrice:"3099",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/31R8vyNVWWL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"JBL Tune 230NC TWS",
        price:"3998",
        offerPrice:"3599",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/2110TEYPKnL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Apple AirPods Pro​​​​​​​",
        price:"18999",
        offerPrice:"17999",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/61Qqg+T8nsL._SX679_.jpg",
        name:"Samsung Galaxy Buds2 Pro",
        price:"14990",
        offerPrice:"14000",
       },
        {
        image:"https://m.media-amazon.com/images/I/51SKmu2G9FL._SX355_.jpg",
        name:"Sony WH-1000XM4",
        price:"19987",
        offerPrice:"19500",
       },
        {
        image:"https://m.media-amazon.com/images/I/31eo70r2NWL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Sony WH-CH520",
        price:"4990",
        offerPrice:"4490",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41+0dKVVdvL._SY300_SX300_.jpg",
        name:"JBL Tune 770NC",
        price:"5999",
        offerPrice:"5499",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71UfGaWasNL._SX425_.jpg",
        name:"Skullcandy Hesh",
        price:"6999",
        offerPrice:"6499",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/31rqjDOoKRL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Sony PlayStation Pulse",
        price:"7499",
        offerPrice:"6999",
       }, {
        image:"https://m.media-amazon.com/images/I/715jcYvT9pL._SX425_.jpg",
        name:"Boult Audio Anchor",
        price:"3499",
        offerPrice:"3099",
       },
        {
        image:"https://m.media-amazon.com/images/I/61NnqBU61hL._SX569_.jpg",
        name:"CrossBeats Roar 2.0",
        price:"3499",
        offerPrice:"3099",
       },
        {
        image:"https://m.media-amazon.com/images/I/41machJsMZL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Sennheiser HD 450SE",
        price:"7499",
        offerPrice:"6999",
       },
        {
        image:"https://m.media-amazon.com/images/I/71ISIssoVFL._SY355_.jpg",
        name:"boAt Nirvana 751 ANC",
        price:"4399",
        offerPrice:"3899",
       },
        {
        image:"https://m.media-amazon.com/images/I/91-TBsMjOcL._SY450_.jpg",
        name:"HyperX Cloud Stinger Core",
        price:"5290",
        offerPrice:"4890",
       },
]


let CartArray = JSON.parse(localStorage.getItem("CartArray")) || [];



earbuds.forEach(function(el){
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
    Price.style.textDecoration = "line-through"
    priceDiv1.append(pr,Price);

    let priceDiv2 = document.createElement("p");
    priceDiv2.setAttribute("id","PriceDiv2");
    let offerPr = document.createElement("p");
    offerPr.style.fontFamily = "Bebas Neue";
    offerPr.innerText = `Offer Price`;
    offerPr.style.color = `red`;
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
      addtocartearbuds(el);
      alert("Product added to cart !!");
    });

    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivEarBuds").append(card);
});


function addtocartearbuds(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}


let camera=[
    {
     image:"https://m.media-amazon.com/images/I/51ErTMC9PPL._SX679_.jpg",
     price:"2098",
     offerPrice:"978",
     name: "CP PLUS 2MP Full HD",
    }, 
    {
     image:"https://m.media-amazon.com/images/I/41mFOi+OaxL._SY300_SX300_.jpg",
     price:"1898",
     offerPrice:"878",
     name: "Hevalls 360° Series",
    },
    {
     image:"https://m.media-amazon.com/images/I/41AAdi6SSwL.jpg",
     price:"2798",
     offerPrice:"978",
     name: "Hevalls 360° WiFi cctv",
    },
    {
     image:"https://m.media-amazon.com/images/I/4132M7Fe0+L._SX679_.jpg",
     price:"1998",
     offerPrice:"925",
     name: "Hevalls 360 Full HD",
    },
    {
     image:"https://m.media-amazon.com/images/I/51ZAwvdnkXL._SL1500_.jpg",
     price:"5448",
     offerPrice:"1785",
     name:"PKST Security Camera",
    }, 
    {
     image:"https://m.media-amazon.com/images/I/71FZRg1rJAL._SL1500_.jpg",
     price:"11,498",
     offerPrice:"5776",
     name:"KODAK Mini Shot 3",
    },
    {
     image:"https://m.media-amazon.com/images/I/710+D60++jL._SL1500_.jpg",
     price:"10,498",
     offerPrice:"7876",
     name: "ATBAT Kids Camera",
    },
    {
     image:"https://m.media-amazon.com/images/I/61erc7ly+ZL._SL1500_.jpg",
     price:"9,498",
     offerPrice:"5876",
     name: "Fujifilm Instax",
    }, 
    {
     image:"https://m.media-amazon.com/images/I/710HmU1cAwL._SL1000_.jpg",
     price:"12,568",
     offerPrice:"7676",
     name: "Action Camera 1080P",
    }, 
    {
     image:"https://m.media-amazon.com/images/I/61cZnYZR1wL._SL1080_.jpg",
     price:"7,568",
     offerPrice:"5,676",
     name: "Fujifilm Instax Mini",
    }, 
]




camera.forEach(function(el){
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
  Price.style.textDecoration = "line-through"
  priceDiv1.append(pr,Price);

  let priceDiv2 = document.createElement("p");
  priceDiv2.setAttribute("id","PriceDiv2");
  let offerPr = document.createElement("p");
  offerPr.style.fontFamily = "Bebas Neue";
  offerPr.innerText = `Offer Price`;
  offerPr.style.color = `red`;
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
    addtocartcamera(el);
    alert("Product added to cart !!");
  })



  card.append(upperdiv,lowerDiv,addtocartBtn);

  document.querySelector("#CardDivCamera").append(card);
});


function addtocartcamera(el){
CartArray.push(el);
localStorage.setItem("CartArray",JSON.stringify(CartArray));
}


let fridge =[
    {
      name: "LG 185L 5Star",
     image:"https://m.media-amazon.com/images/I/61Fc4qfedbL._AC_UY436_QL65_.jpg",
     price:"22,199",
     offerPrice:"16,990",
    }, 
    {
        name: "Samsung 183L 3Star",
       image:"https://m.media-amazon.com/images/I/61TTF88NJUL._AC_UY436_QL65_.jpg",
       price:"18,999",
       offerPrice:"14,490",
      }, 
      {
        name: "Whirlpool 184L 3Star",
       image:"https://m.media-amazon.com/images/I/51mdVrFlJPL._AC_UY436_QL65_.jpg",
       price:"17,200",
       offerPrice:"12,990",
      }, 
      {
        name: "Whirlpool 240",
       image:"https://m.media-amazon.com/images/I/51vsMlB+W0L._AC_UY436_QL65_.jpg",
       price:"35,450",
       offerPrice:"12,700",
      }, 
      {
        name: "Samsung 236",
       image:"https://m.media-amazon.com/images/I/61qIChjrrYL._AC_UY436_QL65_.jpg",
       price:"37,990",
       offerPrice:"24,750",
      }, 
      {
        name: "Godrej 180L 2Star",
       image:"https://m.media-amazon.com/images/I/615T57uyx5L._AC_UY436_QL65_.jpg",
       price:"17,500",
       offerPrice:"12,990",
      }, 
      {
        name: "Samsung 183",
        image:"https://m.media-amazon.com/images/I/613sKJ4zLaL._AC_UY436_QL65_.jpg",
       price:"22,999",
       offerPrice:"15,990",
      }, 
      {
        name: "Whirlpool 184L",
       image:"https://m.media-amazon.com/images/I/61Y7SfcfMxL._AC_UY436_QL65_.jpg",
       price:"17,000",
       offerPrice:"12,990",
      }, 
      {
        name: "LG 185L 4Star",
       image:"https://m.media-amazon.com/images/I/61aG2LYc8xL._AC_UY436_QL65_.jpg",
       price:"21,999",
       offerPrice:"15,890",
      }, 
      {
        name: "Samsung 189L 5Star",
       image:"https://m.media-amazon.com/images/I/619Xv90Nj5L._AC_UY436_QL65_.jpg",
       price:"24,999",
       offerPrice:"17,490",
      }, 
      {
        name: "Panasonic Frost Free",
       image:"https://m.media-amazon.com/images/I/61mdQha-qIL._AC_UY436_QL65_.jpg",
       price:"55,500",
       offerPrice:"38,990",
      }, 
      {
        name: "Godrej 564L",
       image:"https://m.media-amazon.com/images/I/51OxcMqHoeL._AC_UY436_QL65_.jpg",
       price:"90,000",
       offerPrice:"54,990",
      }, 
      {
        name: "Panasonic 450L 2Star",
       image:"https://m.media-amazon.com/images/I/51FcQaajj8L._AC_UY436_QL65_.jpg",
       price:"88,600",
       offerPrice:"63,400",
      }, 
      {
        name: "Haier 531L",
       image:"https://m.media-amazon.com/images/I/513Fzyfyn7L._AC_UY436_QL65_.jpg",
       price:"1,28,990",
       offerPrice:"76,990",
      }, 
      {
        name: "LG 650L",
       image:"https://m.media-amazon.com/images/I/61w3jjFqlCL._AC_UY436_QL65_.jpg",
       price:"1,22,999",
       offerPrice:"72,999",
      }, 
      {
        name: "Samsung 653L",
       image:"https://m.media-amazon.com/images/I/51OHtj40WiL._AC_UY436_QL65_.jpg",
       price:"1,13,000",
       offerPrice:"82,999",
      }, 
      {
        name: "Samsung 580L",
       image:"https://m.media-amazon.com/images/I/61G2FzC2PWL._AC_UY436_QL65_.jpg",
       price:"87,990",
       offerPrice:"67,990",
      }, 
      {
        name: "Haier 630L",
       image:"https://m.media-amazon.com/images/I/61FSuaocdjL._AC_UY436_QL65_.jpg",
       price:"1,01,990",
       offerPrice:"59,990",
      }, 
      {
        name: "Midea 591L",
       image:"https://m.media-amazon.com/images/I/71K+v3SVEeL._AC_UY436_QL65_.jpg",
       price:"87,990",
       offerPrice:"47,990",
      }, 
      {
        name: "LLYOD 5Star",
       image:"https://m.media-amazon.com/images/I/41KNjAWvtqL._AC_UY436_QL65_.jpg",
       price:"91,490",
       offerPrice:"61,990",
      }, 
]



fridge.forEach(function(el){
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
  Price.style.textDecoration = "line-through"
  priceDiv1.append(pr,Price);

  let priceDiv2 = document.createElement("p");
  priceDiv2.setAttribute("id","PriceDiv2");
  let offerPr = document.createElement("p");
  offerPr.style.fontFamily = "Bebas Neue";
  offerPr.innerText = `Offer Price`;
  offerPr.style.color = `red`;
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
    addtocartfridge(el);
    alert("Product added to cart !!");
  });



  card.append(upperdiv,lowerDiv,addtocartBtn);

  document.querySelector("#CardDivFridge").append(card);
});


function addtocartfridge(el){
CartArray.push(el);
localStorage.setItem("CartArray",JSON.stringify(CartArray));
}



let kitchen =[
    {
     image:"https://m.media-amazon.com/images/I/61izbYQoQUL._AC_UL320_.jpg",
     name:"Privesh Metal Kitchen Trolley",
     price:"2799",
     offerPrice:"2499",
    },
    {
        image:"https://m.media-amazon.com/images/I/71ARyC4XoYS._AC_UL320_.jpg",
        name:"AGARO Royal 6 Pcs Kitchen Knife",
        price:"1034",
        offerPrice:"900",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/51HKajX7fJL._AC_UL320_.jpg",
        name:"Borosil Chef Delite 300",
        price:"1799",
        offerPrice:"1499",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71hbig95UlL._AC_UL320_.jpg",
        name:"Khushimit® Masala Box",
        price:"1370",
        offerPrice:"970",
       },
        {
        image:"https://m.media-amazon.com/images/I/71kcEYwb4kL._AC_UL320_.jpg",
        name:"Milton Pro Cook Kitchen Jewel",
        price:"1599",
        offerPrice:"1099",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71O5OGmFZ0L._AC_UL320_.jpg",
        name:"bellemax Italian Premium Water",
        price:"1199",
        offerPrice:"899",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/91wDCwug8XL._AC_UL320_.jpg",
        name:"Femora Peacock Motif",
        price:"1000",
        offerPrice:"800",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/61K500rRRiL._AC_UL320_.jpg",
        name:"Noritake Japan - Porcelain Milk",
        price:"1750",
        offerPrice:"1450",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/51fYs28x-DL._AC_UY218_.jpg",
        name:"Prestige Delight Mixer",
        price:"3999",
        offerPrice:"3599",
       },
        {
        image:"https://m.media-amazon.com/images/I/51hB1Q7761L._AC_UY218_.jpg",
        name:"Sujata Dynamix DX Mixer Grinder",
        price:"5899",
        offerPrice:"5399",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71gVbRgU8NL._AC_UY218_.jpg",
        name:"Kuvings Nutri Blender",
        price:"3999",
        offerPrice:"2599",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41-5nd-r6bL._AC_UY218_.jpg",
        name:"PHILIPS Hand Blender",
        price:"1499",
        offerPrice:"1099",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/61Krpl7FGyL._SY342_.jpg",
        name:"CELLO Plastic Bottle",
        price:"679",
        offerPrice:"499",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/51t8OYLLXEL._AC_UL320_.jpg",
        name:"Hidrate Smart Water Bottle",
        price:"8799",
        offerPrice:"8399",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/51G-CWChnYL._AC_UL320_.jpg",
        name:"EVEREST Copper Water Bottle",
        price:"789",
        offerPrice:"649",
       }, 
       {
        image:"https://images-eu.ssl-images-amazon.com/images/I/31rQHnbMmsL._AC_SX184_.jpg",
        name:"V-Guard Zenora RO",
        price:"7499",
        offerPrice:"7099",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41LFdROYICL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Prestige Sandwich Maker",
        price:"1199",
        offerPrice:"899",
       },
        {
        image:"https://m.media-amazon.com/images/I/61jAZzS2nqL._SY355_.jpg",
        name:"CAROTE Non Stick Kadai",
        price:"1599",
        offerPrice:"1199",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/31fQBOGVAQL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Meyer Merlot Non-Stick Kadai",
        price:"2499",
        offerPrice:"1999",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41LKi-jADhL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"KESAR KUNJ Kadhai",
        price:"1499",
        offerPrice:"999",
       },
]



kitchen.forEach(function(el){
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
  Price.style.textDecoration = "line-through"
  priceDiv1.append(pr,Price);

  let priceDiv2 = document.createElement("p");
  priceDiv2.setAttribute("id","PriceDiv2");
  let offerPr = document.createElement("p");
  offerPr.style.fontFamily = "Bebas Neue";
  offerPr.innerText = `Offer Price`;
  offerPr.style.color = `red`;
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
    addtocartkitchen(el);
    alert("Product added to cart !!");
  })



  card.append(upperdiv,lowerDiv,addtocartBtn);

  document.querySelector("#CardDivKitchen").append(card);
});


function addtocartkitchen(el){
CartArray.push(el);
localStorage.setItem("CartArray",JSON.stringify(CartArray));
}



let washingMachine =[
    {
        name: "LG 9kg 5 star",
       image:"https://m.media-amazon.com/images/I/71SH3z4sKZL._AC_UY436_QL65_.jpg",
       price:"56,999",
       offerPrice:"39,990",
      },
      {
        name: "NU 7kg Automatic",
       image:"https://m.media-amazon.com/images/I/718xEzaQdaL._AC_UY436_QL65_.jpg",
       price:"12,999",
       offerPrice:"7,999",
      },
      {
        name: "LG 10kg 5 Star Turbo",
       image:"https://m.media-amazon.com/images/I/71Tj8QIhWxL._AC_UY436_QL65_.jpg",
       price:"36,999",
       offerPrice:"26,999",
      },
      {
        name: "Whirlpool 8.5kg Semi-Auto",
       image:"https://m.media-amazon.com/images/I/61Kza5qsMBL._AC_UY436_QL65_.jpg",
       price:"18,499",
       offerPrice:"13,690",
      },
      {
        name: "Samsung 7kg Full Auto",
       image:"https://m.media-amazon.com/images/I/61gbJJMLLEL._AC_UY436_QL65_.jpg",
       price:"221,000",
       offerPrice:"15,490",
      },
      {
        name: "Samsung 7kg Top Load",
       image:"https://m.media-amazon.com/images/I/61QJpARvgRL._AC_UY436_QL65_.jpg",
       price:"22,500",
       offerPrice:"17,590",
      },
      {
        name: "Samsung 6kg Semi-Auto",
       image:"https://m.media-amazon.com/images/I/71mzaEeE2vL._AC_UY436_QL65_.jpg",
       price:"",
       offerPrice:"",
      },
      {
        name: "Bosch WAJ2846W",
       image:"https://m.media-amazon.com/images/I/71jrfeoos7L._AC_UY436_QL65_.jpg",
       price:"49,190",
       offerPrice:"34,740",
      },
      {
        name: "IFB 7kg Star Top Load",
       image:"https://m.media-amazon.com/images/I/61aEf-fgerL._AC_UY436_QL65_.jpg",
       price:"50,000",
       offerPrice:"38,999",
      },
      {
        name: "IFB 6kg Star AI",
       image:"https://m.media-amazon.com/images/I/61yvbripxsL._AC_UY436_QL65_.jpg",
       price:"29,990",
       offerPrice:"23,990",
      },
      {
        name: "Samsung 8kg 5 star AI",
       image:"https://m.media-amazon.com/images/I/71ZMYMhP5TL._AC_UY436_QL65_.jpg",
       price:"51,880",
       offerPrice:"34,990",
      },
      {
        name: "Panasonic 6kg Fully Auto",
       image:"https://m.media-amazon.com/images/I/51uVzVsKuZL._AC_UY436_QL65_.jpg",
       price:"20,000",
       offerPrice:"12,990",
      },
      {
        name: "IFB 8kg 5 star AI ",
       image:"https://m.media-amazon.com/images/I/61NKTaX5pPL._AC_UY436_QL65_.jpg",
       price:"48,990",
       offerPrice:"35,990",
      },
      {
        name: "Acer 8kg Halo Wash",
       image:"https://m.media-amazon.com/images/I/61OJwWNw8eL._AC_UY436_QL65_.jpg",
       price:"38,999",
       offerPrice:"15,990",
      },
      {
        name: "Haier 6kg Fully Auto",
       image:"https://m.media-amazon.com/images/I/51zNGmliPiL._AC_UY436_QL65_.jpg",
       price:"22,990",
       offerPrice:"12,290",
      },
      {
        name: "Whirlpool 11kg Semi Auto",
       image:"https://m.media-amazon.com/images/I/61hjKhRnqlL._AC_UY436_QL65_.jpg",
       price:"22,990",
       offerPrice:"15,990",
      },
      {
        name: "Godrej EDGE Ultima",
       image:"https://m.media-amazon.com/images/I/61vP1X59DaL._AC_UY436_QL65_.jpg",
       price:"23,500",
       offerPrice:"15,450",
      },
      {
        name: "IFB 6.5kg Top Load",
       image:"https://m.media-amazon.com/images/I/61CH5bFxAlL._AC_UY436_QL65_.jpg",
       price:"24,500",
       offerPrice:"18,999",
      },
      {
        name: "Samsung 10kg Star WiFi",
       image:"https://m.media-amazon.com/images/I/61TNmLaGiIL._AC_UY436_QL65_.jpg",
       price:"32,500",
       offerPrice:"24,390",
      },
      {
        name: "Voltas beko 7kg",
       image:"https://m.media-amazon.com/images/I/71v40Bw9kbL._AC_UY436_QL65_.jpg",
       price:"28,990",
       offerPrice:"13,990",
      },
]



washingMachine.forEach(function(el){
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
  Price.style.textDecoration = "line-through"
  priceDiv1.append(pr,Price);

  let priceDiv2 = document.createElement("p");
  priceDiv2.setAttribute("id","PriceDiv2");
  let offerPr = document.createElement("p");
  offerPr.style.fontFamily = "Bebas Neue";
  offerPr.innerText = `Offer Price`;
  offerPr.style.color = `red`;
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
    addtocartwashingMachine(el);
    alert("Product added to cart !!");
  })



  card.append(upperdiv,lowerDiv,addtocartBtn);

  document.querySelector("#CardDivWashingMachine").append(card);
});


function addtocartwashingMachine(el){
CartArray.push(el);
localStorage.setItem("CartArray",JSON.stringify(CartArray));
}



let TV =[
    {
        image:"https://m.media-amazon.com/images/I/81XljYpPtGL._AC_UY218_.jpg",
        name: "Nu 109 cm (43 inch) ",
        price:"25000",
        offerPrice:"21000",
       },  {
        image:"https://m.media-amazon.com/images/I/71Ey2FZp4tL._AC_UY218_.jpg",
        name: "MI 125 cm (50 inches)(Black)",
        price:"37000",
        offerPrice:"33000",
       },  {
        image:"https://m.media-amazon.com/images/I/71Dkc-5hX1L._AC_UY218_.jpg",
        name: "MI 80 cm  (Black)",
        price:"11500",
        offerPrice:"10000",
       },  {
        image:"https://m.media-amazon.com/images/I/819Lw2PE8tL._AC_UY218_.jpg",
        name: "Redmi 80 cm(Black)",
        price:"10500",
        offerPrice:"8500",
       },  {
        image:"https://m.media-amazon.com/images/I/819SRH2DKBL._AC_UY218_.jpg",
        name: "OnePlus 108 cm (Black)",
        price:"25000",
        offerPrice:"22000",
       },  {
        image:"https://m.media-amazon.com/images/I/71VHchc4T4L._AC_UY218_.jpg",
        name: "LG 80 cm (Black)",
        price:"15000",
        offerPrice:"12000",
       },  {
        image:"https://m.media-amazon.com/images/I/81qx8YtutXL._AC_UY218_.jpg",
        name: "Sony Bravia 139 cm (Black)",
        price:"53000",
        offerPrice:"49000",
       },  {
        image:"https://m.media-amazon.com/images/I/41OV8MNY3IL._AC_UY218_.jpg",
        name: "VISE  140 cm ",
        price:"45000",
        offerPrice:"41000",
       },  {
        image:"https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_UY218_.jpg",
        name: "Samsung 80 cm(Glossy Black)",
        price:"14000",
        offerPrice:"11000",
       },  {
        image:"https://m.media-amazon.com/images/I/710a8lTyPnL._AC_UY218_.jpg",
        name: "MI 138 cm (Black)",
        price:"37000",
        offerPrice:"33000",
       },  {
        image:"https://m.media-amazon.com/images/I/61sDDAOUzSL._AC_UY218_.jpg",
        name: "Kodak 108 cm (Black)",
        price:"16000",
        offerPrice:"13500",
       },  {
        image:"https://m.media-amazon.com/images/I/71EGuVJ2oDL._AC_UY218_.jpg",
        name: "Sony Bravia 108 cm (Black)",
        price:"41000",
        offerPrice:"36500",
       },  {
        image:"https://m.media-amazon.com/images/I/7192ztv+rNL._AC_UY218_.jpg",
        name: "Acer 127 cm (Black)",
        price:"34000",
        offerPrice:"31000",
       },  {
        image:"https://m.media-amazon.com/images/I/91zvwernn+L._AC_UY218_.jpg",
        name: "TOSHIBA 108 cm (Black)",
        price:"19000",
        offerPrice:"16500",
       },  {
        image:"https://m.media-amazon.com/images/I/81qx8YtutXL._AC_UY218_.jpg",
        name: "Sony Bravia 108 cm (Black)",
        price:"39500",
        offerPrice:"35000",
       },  {
        image:"https://m.media-amazon.com/images/I/71rZkA9SfML._AC_UY218_.jpg",
        name: "MI 138 cm (Black)",
        price:"45000",
        offerPrice:"41500",
       },  {
        image:"https://m.media-amazon.com/images/I/71njEHrIybL._AC_UY218_.jpg",
        name: "Redmi 164 cm (Black)",
        price:"58000",
        offerPrice:"55000",
       },  {
        image:"https://m.media-amazon.com/images/I/71EJ1D+NxnL._AC_UY218_.jpg",
        name: "TCL 189.5 cm (Black)",
        price:"69990",
        offerPrice:"65000",
       },  {
        image:"https://m.media-amazon.com/images/I/81Z9zGZ0zBL._AC_UY218_.jpg",
        name: "Hisense 164 cm (Dark Grey) ",
        price:"58000",
        offerPrice:"55000",
       },  {
        image:"https://m.media-amazon.com/images/I/71S8qt+K8hL._AC_UY218_.jpg",
        name: "Samsung 163 cm (Black)",
        price:"65990",
        offerPrice:"60000",
       }, 
]



TV.forEach(function(el){
  let card = document.createElement("div");
  card.setAttribute("id","Card");


  let upperdiv = document.createElement("div");
  upperdiv.setAttribute("id","UpperDiv");
  upperdiv.style.height = "150px";
  upperdiv.style.width = "100%";
  upperdiv.style.display = "flex";
  // upperdiv.style.border = "2px solid green";
  let image = document.createElement("img");
  image.setAttribute("id","Img");
  image.src = el.image;
  image.style.width = "100%";
  // image.style.overflow = "hidden";
  image.style.marginBottom = "20px";
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
  Price.style.textDecoration = "line-through"
  priceDiv1.append(pr,Price);

  let priceDiv2 = document.createElement("p");
  priceDiv2.setAttribute("id","PriceDiv2");
  let offerPr = document.createElement("p");
  offerPr.style.fontFamily = "Bebas Neue";
  offerPr.innerText = `Offer Price`;
  offerPr.style.color = `red`;
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
    addtocartTV(el);
    alert("Product added to cart !!");
  })



  card.append(upperdiv,lowerDiv,addtocartBtn);

  document.querySelector("#CardDivTelivision").append(card);
});


function addtocartTV(el){
CartArray.push(el);
localStorage.setItem("CartArray",JSON.stringify(CartArray));
}


let AC =[
{
image:"https://m.media-amazon.com/images/I/41TuyxwZ9mL._AC_UY218_.jpg",
name: "Voltas 1.4 Ton 3 Star Inverter Split AC",
price:"30000",
offerPrice:"25000",
}, {
image:"https://m.media-amazon.com/images/I/51JFb7FctDL._AC_UY218_.jpg",
name: "LG 1 Ton 4 Star AI DUAL Inverter Split AC ",
price:"34990",
offerPrice:"31000",
}, {
image:"https://m.media-amazon.com/images/I/61VC4kJtDAL._AC_UY218_.jpg",
name: "Daikin 0.8 Ton 3 Star",
price:"24990",
offerPrice:"20500",
}, {
image:"https://m.media-amazon.com/images/I/41lrtqXPiWL._AC_UY218_.jpg",
name: "Carrier 1.5 Ton 4 Star AI Flexicool",
price:"34990",
offerPrice:"31500",
}, {
image:"https://m.media-amazon.com/images/I/61Y1T1q5crL._AC_UY218_.jpg",
name: "Daikin 1.5 Ton 3 Star",
price:"37990",
offerPrice:"34500",
}, {
image:"https://m.media-amazon.com/images/I/51sTXvsanQL._AC_UY218_.jpg",
name: "Carrier 1.5 Ton 3 Star AI ",
price:"31990",
offerPrice:"27500",
}, {
image:"https://m.media-amazon.com/images/I/51yCJDngeLL._AC_UY218_.jpg",
name: "LG 1.5 Ton 5 Star VIRAAT",
price:"43490",
offerPrice:"40000",
}, {
image:"https://m.media-amazon.com/images/I/61hQvWQiYAL._AC_UY218_.jpg",
name: "Lloyd 1.5 Ton 3 Star Inverter Split AC ",
price:"33990",
offerPrice:"30000",
}, {
image:"https://m.media-amazon.com/images/I/61ZzcguzB1L._AC_UY218_.jpg",
name: "Panasonic 1.5 Ton 5 Star Wi-Fi ",
price:"44490",
offerPrice:"41500",
}, {
image:"https://m.media-amazon.com/images/I/51gkbLRpxtL._AC_UY218_.jpg",
name: "Godrej 1.5 Ton 3 Star",
price:"31490",
offerPrice:"26000",
}, {
image:"https://m.media-amazon.com/images/I/41LlSc9YsnL._AC_UY218_.jpg",
name: "Voltas 1 Ton 3 Star",
price:"28999",
offerPrice:"25999",
}, {
image:"https://m.media-amazon.com/images/I/61PWjQFDtQL._AC_UY218_.jpg",
name: "Panasonic 1.5 Ton ",
price:"36490",
offerPrice:"31500",
}, {
image:"https://m.media-amazon.com/images/I/51JFb7FctDL._AC_UY218_.jpg",
name: "LG 1.5 Ton 5 Star AI DUAL Inverter Split AC ",
price:"43490",
offerPrice:"39450",
}, {
image:"https://m.media-amazon.com/images/I/518szMqoI5L._AC_UY218_.jpg",
name: "Haier 1.5 Ton 3 Star Inverter Split AC ",
price:"32490",
offerPrice:"29500",
}, {
image:"https://m.media-amazon.com/images/I/51XI2FLjJ4L._AC_UY218_.jpg",
name: "Samsung 1.5 Ton 5 Star Inverter Split AC ",
price:"42490",
offerPrice:"38490",
}, {
image:"https://m.media-amazon.com/images/I/31uXFF2wVNL._AC_UY218_.jpg",
name: "Voltas 1 Ph Rot.(2 Ton White)",
price:"77890",
offerPrice:"74000",
}, {
image:"https://m.media-amazon.com/images/I/41H61ZFlBHL._AC_UY218_.jpg",
name: "Daikin 2.02 Ton 3 Star",
price:"60990",
offerPrice:"55990",
}, {
image:"https://m.media-amazon.com/images/I/61W+U7VzqHL._AC_UY218_.jpg",
name: "1.5 Ton DC Solar Air Conditioner ",
price:"180000",
offerPrice:"155000",
}, {
image:"https://m.media-amazon.com/images/I/61lTN0lYAgL._AC_UY218_.jpg",
name: "O General 2 Ton (Copper Condenser, ASGG24CGTB-B, White)",
price:"76950",
offerPrice:"72950",
}, {
image:"https://m.media-amazon.com/images/I/31lyjrJOXsL._AC_UY218_.jpg",
name: "Voltas 3Ph (4 Ton White)",
price:"128800",
offerPrice:"115000",
},
]



AC.forEach(function(el){
  let card = document.createElement("div");
  card.setAttribute("id","Card");


  let upperdiv = document.createElement("div");
  upperdiv.setAttribute("id","UpperDiv");
  upperdiv.style.height = "100px";
  upperdiv.style.width = "100%";
  upperdiv.style.display = "flex";
  // upperdiv.style.border = "2px solid green";
  let image = document.createElement("img");
  image.setAttribute("id","Img");
  image.src = el.image;
  image.style.width = "100%";
  image.style.marginBottom = "20px"
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
  offerPr.innerText = `Offer Price`;
  offerPr.style.color = `red`;
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
    addtocartAC(el);
    alert("Product added to cart !!");
  })



  card.append(upperdiv,lowerDiv,addtocartBtn);

  document.querySelector("#CardDivAC").append(card);
});


function addtocartAC(el){
CartArray.push(el);
localStorage.setItem("CartArray",JSON.stringify(CartArray));
}
