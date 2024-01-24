let shirt =[
    {
        image:"https://m.media-amazon.com/images/I/719gKQS4doL._AC_UL640_QL65_.jpg",
        name:"Levi's",
        price:"1799",
        offerPrice:"569",

    },
    {
        image:"https://m.media-amazon.com/images/I/81-JAkrN1sL._AC_UL640_QL65_.jpg",
        name:"MonteCarlo",
        price:"1799",
        offerPrice:"593",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/81SynkuTdiL._AC_UL640_QL65_.jpg",
        name:"MARKRICH",
        price:"1599",
        offerPrice:"699",
   
       },
       {
        image:"https://m.media-amazon.com/images/I/713elmsvGxL._AC_UL640_QL65_.jpg",
        name:"US Polo",
        price:"1499",
        offerPrice:"519",
   
       },
]



shirt.forEach((el)=>{
    let card = document.createElement("div");
    card.setAttribute("id","card");
    card.style.height = "55vh";
    // card.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    card.style.border = "1px solid rgb(201, 201, 201)";
    card.addEventListener("click",function(){
        window.location.href = "./men.html"
    });

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","imgdiv");
    imgdiv.style.height = "80%";

    let imageEl = document.createElement("img");
    imageEl.setAttribute("id","imageEl");
    imageEl.style.width = "100%";
    imageEl.style.margin = "auto";
    imageEl.style.height = "100%";
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
    // document.querySelector("#card").addEventListener("click",function(){
    //     window.location.href = "./men.html"
    // })
    document.querySelector("#shirt").append(card);
});