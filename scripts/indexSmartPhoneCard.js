// let carousel_div = document.querySelector("#carousel");

// function carousel(){
//     let images = [
//         `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7nvBQYguXPmtwleKULR_ZLWrdTrZ5ziqdw&usqp=CAU`,
//         `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGagNnhzKI9hoJDmtWyHFlrn-9179AK5rIg&usqp=CAU`,
//         `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Fl55NzYJxmJw_DBA9dQU1GAAv9gC_VCjw&usqp=CAU`,
//         `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuZk7H9u-64pKuBeslIkYxctYRPCcuONUfg&usqp=CAU`,
//         `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZldlCOKc7azEI3_aXqnsgm9TVwvVu6gSBvg&usqp=CAU`,
//     ];
//     let imgEliment = document.createElement("img");
//     imgEliment.setAttribute("id","imge1")
//     imgEliment.src = images[0];
//     carousel_div.append(imgEliment);
//     let i=1;
//     setInterval(function(){
//         if(i==images.length){
//             i=0;
//         }
//         imgEliment.src = images[i];
//         carousel_div.append(imgEliment);
//         i++
//     },2000);  
// }
// carousel()

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
    card.addEventListener("click",function(){
        window.location.hreaf = "../catagory.html"
    })
    
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

    let div2= document.createElement("div");
    div2.setAttribute("id","div2");

    let ofPr = document.createElement("p");
    ofPr.style.fontFamily = "Bebas Neue";
    ofPr.innerText = "Offer Price";
    let offerPrice = document.createElement("p");
    offerPrice.setAttribute("id","offerPrice");
    offerPrice.innerText = `₹ ${el.offerPrice}`;

    imgdiv.append(imageEl);

    namediv.append(name);
    div1.append(pr,price);
    div2.append(ofPr,offerPrice);

    compDiv.append(namediv,div1,div2);

    card.append(imgdiv,compDiv);
    document.querySelector("#smartPhoneCard").append(card);
})