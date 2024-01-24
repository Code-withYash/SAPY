let skirt = [
    {
     name:"Formal Knee Length Skirt",
     image:"https://m.media-amazon.com/images/I/51rdoZ6wxsL._SY741_.jpg",
     price:"999",
     offerPrice:"599",
    },
    {
     name:"Stars and You Women Midi Skirt",
     image:"https://m.media-amazon.com/images/I/61Qv6q9GJoL._SY741_.jpg",
     price:"1199",
     offerPrice:"899",
    },
    {
     name:"Stars and You Women's Flared Knee Length Skirt",
     image:"https://m.media-amazon.com/images/I/41w-GceJDrL._SY741_.jpg",
     price:"1499",
     offerPrice:"999",
    },
    {
     name:"Girl's Solid High Waist ",
     image:"https://m.media-amazon.com/images/I/71leX1mIFOL._SY879_.jpg",
     price:"799",
     offerPrice:"545",
    },
    {
     name:"Women Western Floral ",
     image:"https://m.media-amazon.com/images/I/81tH8Y8zKHL._SY879_.jpg",
     price:"1299",
     offerPrice:"799",
    },
    {
     name:"KUDUZO Girl's",
     image:"https://m.media-amazon.com/images/I/71CslLJggQL._SY879_.jpg",
     price:"1799",
     offerPrice:"1199",
    },
    {
     name:"SNEH Women Floor Length Skirt",
     image:"https://m.media-amazon.com/images/I/71wSXWBmycL._SX679_.jpg",
     price:"699",
     offerPrice:"399",
    },
    {
     name:"OTABU Women Midi Pleated Skirt",
     image:"https://m.media-amazon.com/images/I/61P6pkIjIdL._SY879_.jpg",
     price:"1199",
     offerPrice:"799",
    },
    {
     name:"Rajvila Women's Cotton ",
     image:"https://m.media-amazon.com/images/I/81ASvmF0sVL._SX679_.jpg",
     price:"1699",
     offerPrice:"1299",
    },
    {
     name:"FRAULEIN Women's Flared Pleated Maxi Skirt",
     image:"https://m.media-amazon.com/images/I/61-e58B8BiL._SX679_.jpg",
     price:"2999",
     offerPrice:"2199",
    },
    {
     name:"FRAULEIN Women's Flared Pleated Maxi Skirt",
     image:"https://m.media-amazon.com/images/I/61-e58B8BiL._SX679_.jpg",
     price:"2999",
     offerPrice:"2199",
    },
    {
     name:"Janak",
     image:"https://m.media-amazon.com/images/I/61YDoP4KzkL._AC_UL640_QL65_.jpg",
     price:"1079",
     offerPrice:"649",
    },
    {
     name:"ADDVERO",
     image:"https://m.media-amazon.com/images/I/61gk8Qp-WmL._AC_UL640_QL65_.jpg",
     price:"1479",
     offerPrice:"649",
    },
    {
     name:"Mrugneni",
     image:"https://m.media-amazon.com/images/I/61bjuNu0EML._AC_UL640_QL65_.jpg",
     price:"1099",
     offerPrice:"349",
    },
    {
     name:"Aurelia",
     image:"https://m.media-amazon.com/images/I/91EJGMcW7nL._AC_UL640_QL65_.jpg",
     price:"1999",
     offerPrice:"740",
    },
    {
     name:"Studio Shringaar",
     image:"https://m.media-amazon.com/images/I/61JYBe-gaoL._AC_UL640_QL65_.jpg",
     price:"1499",
     offerPrice:"699",
    },
    {
     name:"OOMPH!",
     image:"https://m.media-amazon.com/images/I/71Qw2yEM3rL._AC_UL640_QL65_.jpg",
     price:"1340",
     offerPrice:"339",
    },
    {
     name:"Samjhi",
     image:"https://m.media-amazon.com/images/I/91DCM7LPfyL._AC_UL640_QL65_.jpg",
     price:"1599",
     offerPrice:"650",
    },
    {
     name:"AASK",
     image:"https://m.media-amazon.com/images/I/61YmqnpqqRL._AC_UL640_QL65_.jpg",
     price:"1399",
     offerPrice:"849",
    },
    {
     name:"DIAMO",
     image:"https://m.media-amazon.com/images/I/81VDes7365L._AC_UL640_QL65_.jpg",
     price:"1299",
     offerPrice:"429",
    },
];

let CartArray = JSON.parse(localStorage.getItem("CartArray")) || [];



skirt.forEach(function(el){
    let card = document.createElement("div");
    card.setAttribute("id","Card");


    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","UpperDiv");
    let image = document.createElement("img");
    image.setAttribute("id","Img");
    image.src = el.image;
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
      addtocartskirt(el);
      alert("Product added to cart");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivSkirt").append(card);
});


function addtocartskirt(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}


let saree = [
    {
     name:"Glory Sarees Women's Kanchipuram Art Silk Saree With Blouse Piece",
     image:"https://m.media-amazon.com/images/I/91iiBtClCnL._SY879_.jpg",
     price:"799",
     offerPrice:"399",
    },
    {
     name:"C J Enterprise Women's Pure Kanjivaram Silk",
     image:"https://m.media-amazon.com/images/I/41ykC0f0VTL.jpg",
     price:"1000",
     offerPrice:"650",
    },
    {
     name:"EthnicJunction Women's Kanchipuram Silk",
     image:"https://m.media-amazon.com/images/I/912JFM8XEJL._SY879_.jpg",
     price:"500",
     offerPrice:"350",
    },
    {
     name:"SIRIL Women's Floral Print Geoegette Saree",
     image:"https://m.media-amazon.com/images/I/51Zaiaid9bL.jpg",
     price:"800",
     offerPrice:"400",
    },
    {
     name:"IRIL Women's Poly Silk Saree",
     image:"https://m.media-amazon.com/images/I/71Jjpa1KUAL._SY879_.jpg",
     price:"1200",
     offerPrice:"750",
    },
    {
     name:"Sidhidata Women's Kanchipuram Silk Saree",
     image:"https://m.media-amazon.com/images/I/91HAgnw2CTL._SX679_.jpg",
     price:"1400",
     offerPrice:"950",
    },
    {
     name:"EthnicJunction Women's Kanchipuram Silk",
     image:"https://m.media-amazon.com/images/I/71VyoTQm1+L._SY741_.jpg",
     price:"2399",
     offerPrice:"1499",
    },
    {
     name:"SWORNOF Womens Kanjivaram Banarasi Silk",
     image:"https://m.media-amazon.com/images/I/61BKJte6U3L._SY879_.jpg",
     price:"2699",
     offerPrice:"1599",
    },
    {
     name:"SERONA FABRICS Women's Assam Cotton Silk",
     image:"https://m.media-amazon.com/images/I/81au9cImtzL._SY879_.jpg",
     price:"1689",
     offerPrice:"870",
    },
    {
     name:"Glory Saree",
     image:"https://m.media-amazon.com/images/I/91iiBtClCnL._AC_UL640_QL65_.jpg",
     price:"3999",
     offerPrice:"699",
    },
    {
     name:"Yashika",
     image:"https://m.media-amazon.com/images/I/81YfAbiJCNL._AC_UL640_QL65_.jpg",
     price:"1699",
     offerPrice:"549",
    },
    {
     name:"Dhruvi Trends",
     image:"https://m.media-amazon.com/images/I/619cbp-6mAL._AC_UL640_QL65_.jpg",
     price:"1499",
     offerPrice:"349",
    },
    {
     name:"Leeza Store",
     image:"https://m.media-amazon.com/images/I/71r2-C5Vk1L._AC_UL640_QL65_.jpg",
     price:"2999",
     offerPrice:"599",
    },
    {
     name:"Yashika",
     image:"https://m.media-amazon.com/images/I/91Utl0DCCBL._AC_UL640_QL65_.jpg",
     price:"1099",
     offerPrice:"249",
    },
    {
     name:"Mirchi Fashion",
     image:"https://m.media-amazon.com/images/I/91dmF4kQykL._AC_UL640_QL65_.jpg",
     price:"2799",
     offerPrice:"599",
    },
    {
     name:"Satrani",
     image:"https://m.media-amazon.com/images/I/710ppwP6VOL._AC_UL640_QL65_.jpg",
     price:"1049",
     offerPrice:"299",
    },
    {
     name:"Avantika Fashion",
     image:"https://m.media-amazon.com/images/I/51bvr+2O4EL._AC_UL640_QL65_.jpg",
     price:"3999",
     offerPrice:"449",
    },
    {
     name:"Winza Designer",
     image:"https://m.media-amazon.com/images/I/A1W38DLbLcL._AC_UL640_QL65_.jpg",
     price:"2479",
     offerPrice:"349",
    },
]


// let sareeCartArray = JSON.parse(localStorage.getItem("CartArray")) || [];


saree.forEach(function(el){
    let card = document.createElement("div");
    card.setAttribute("id","Card");


    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","UpperDiv");
    
    let image = document.createElement("img");
    image.setAttribute("id","Img");
    image.src = el.image;
    image.style.width = "100%";
    image.style.overflow = "hidden";
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
      addtocartsaree(el);
      alert("Product added to cart");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivSaree").append(card);
});



function addtocartsaree(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}











let jeans =[
    {
    name: "Miss Chase",
    image:"https://m.media-amazon.com/images/I/71h5Ol0EY0L._AC_UL640_QL65_.jpg",
    price:"1899",
    offerPrice:"990",
    }, 
    {
    name: "Nifty",
    image:"https://m.media-amazon.com/images/I/61pwV5yI5qL._AC_UL640_QL65_.jpg",
    price:"1299",
    offerPrice:"850",
    }, 
    {
    name: "Miss Chase Women's Crop Denim Jeans",
    image:"https://m.media-amazon.com/images/I/71iQIjmJ-jL._AC_UL640_QL65_.jpg",
    price:"2299",
    offerPrice:"920",
    }, 
    {
      name: "Pepe Jeans",
     image:"https://m.media-amazon.com/images/I/61XWgki3z3L._AC_UL640_QL65_.jpg",
     price:"3999",
     offerPrice:"1799",
    }, 
    {
      name: "Desi belle",
     image:"https://m.media-amazon.com/images/I/61QmoNGLiHL._AC_UL640_QL65_.jpg",
     price:"1999",
     offerPrice:"733",
    }, 
    {
      name: "ZXN Clothing Women Plus Size Jeans",
     image:"https://m.media-amazon.com/images/I/51ddbSjfxDL._AC_UL640_QL65_.jpg",
     price:"1699",
     offerPrice:"449",
    }, 
    {
      name: "ZXN Clothing Women's Skinny Jeans",
     image:"https://m.media-amazon.com/images/I/61-tsEGD9SL._AC_UL640_QL65_.jpg",
     price:"1699",
     offerPrice:"449",
    }, 
    {
      name: "Dolce Crudo Women Jeans",
     image:"https://m.media-amazon.com/images/I/719s9SFObwL._AC_UL640_QL65_.jpg",
     price:"2399",
     offerPrice:"888",
    }, 
    {
      name: "Amazon Brand - INKAST Women Jeans",
     image:"https://m.media-amazon.com/images/I/81gtpJiZmHL._AC_UL640_QL65_.jpg",
     price:"2399",
     offerPrice:"717",
    }, 
    {
      name: "Ben Martin Women's Skinny Fit Jeans",
     image:"https://m.media-amazon.com/images/I/61DciDubOEL._AC_UL640_QL65_.jpg",
     price:"2499",
     offerPrice:"599",
    }, 
    {
      name: "Slvete Plus Women's Slim Fit Jeans",
     image:"https://m.media-amazon.com/images/I/71iZAq+ipqL._AC_UL640_QL65_.jpg",
     price:"1499",
     offerPrice:"662",
    }, 
    {
      name: "MM-21 Women's Jeans",
     image:"https://m.media-amazon.com/images/I/618WXaEMIeL._AC_UL640_QL65_.jpg",
     price:"1999",
     offerPrice:"699",
    }, 
    {
      name: "FUNDAY FASHION Women's Denim Joggers",
     image:"https://m.media-amazon.com/images/I/61P1XahDV8L._AC_UL640_QL65_.jpg",
     price:"1299",
     offerPrice:"462",
    }, 
    {
      name: "FITG 18",
     image:"https://m.media-amazon.com/images/I/41z8GrhAPyL._AC_UL640_QL65_.jpg",
     price:"999",
     offerPrice:"299",
    }, 
    {
      name: "Nifty Women's Slim Fit Jeans",
     image:"https://m.media-amazon.com/images/I/61i6yloR4nL._AC_UL640_QL65_.jpg",
     price:"1299",
     offerPrice:"649",
    }, 
    {
      name: "KOTTY",
     image:"https://m.media-amazon.com/images/I/71Qox1JaZeL._AC_UL640_QL65_.jpg",
     price:"1999",
     offerPrice:"699",
    }, 
    {
      name: "Generic Women's Skinny Jeans",
     image:"https://m.media-amazon.com/images/I/61BZHqmoqLL._AC_UL640_QL65_.jpg",
     price:"1899",
     offerPrice:"549",
    }, 
    {
      name: "High Star Women Jeans",
     image:"https://m.media-amazon.com/images/I/61YhVw40oIL._AC_UL640_QL65_.jpg",
     price:"2499",
     offerPrice:"649",
    }, 
    {
      name: "ADBUCKS Women's",
     image:"https://m.media-amazon.com/images/I/51fysvEhmqL._AC_UL640_QL65_.jpg",
     price:"1499",
     offerPrice:"669",
    }, 
    {
      name: "INKD Women's ",
     image:"https://m.media-amazon.com/images/I/514kFiRweEL._AC_UL640_QL65_.jpg",
     price:"2499",
     offerPrice:"699",
    }, 
]


jeans.forEach(function(el){
    let card = document.createElement("div");
    card.setAttribute("id","Card");


    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","UpperDiv");
    let image = document.createElement("img");
    image.setAttribute("id","Img");
    image.src = el.image;
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
      addtocartjeans(el);
      alert("Product added to cart !!");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#CardDivJeans").append(card);
});

function addtocartjeans(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}
