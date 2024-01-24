

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
]

smartphone.map((el)=>{
    let card = document.createElement("div");
    card.setAttribute("id","card");
    // card.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    card.style.border = "1px solid rgb(201, 201, 201)";
    card.addEventListener("click",function(){
        window.location.href = "./phone.html"
    });

    
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","imgdiv");
    
    let imageEl = document.createElement("img");
    imageEl.setAttribute("id","imageEl");
    imageEl.src = el.image;
    
    let compDiv = document.createElement("div");
    compDiv.setAttribute("id","compDiv");
   

    let namediv = document.createElement("div");
    namediv.setAttribute("id","namediv");

    let name = document.createElement("p");
    name.setAttribute("id","name");
    name.innerText = el.name;
    


    let div1= document.createElement("div");
    div1.setAttribute("id","div1");
    div1.style.marginTop = "10px";

    let pr = document.createElement("p");
    pr.style.fontFamily = "Bebas Neue";
    pr.innerText = "Price";
    let price = document.createElement("p");
    price.setAttribute("id","price");
    price.innerText = `₹ ${el.price}`;
    price.style.textDecoration = "line-through";

    let div2= document.createElement("div");
    div2.setAttribute("id","div2");

    let ofPr = document.createElement("p");
    ofPr.style.fontFamily = "Bebas Neue";
    ofPr.style.color = "red";
    ofPr.innerText = "Offer Price";
    let offerPrice = document.createElement("p");
    offerPrice.setAttribute("id","offerPrice");
    offerPrice.innerText = `₹ ${el.offerPrice}`;
    offerPrice.style.color = `red`;

    imgdiv.append(imageEl);

    namediv.append(name);
    div1.append(pr,price);
    div2.append(ofPr,offerPrice);

    compDiv.append(namediv,div1,div2);

    card.append(imgdiv,compDiv);
    
    document.querySelector("#smartPhoneCard").append(card);
});

