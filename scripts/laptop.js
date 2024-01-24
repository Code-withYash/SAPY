let laptops =[
    {
     image:"https://m.media-amazon.com/images/I/71EF8fY2HuL._AC_UY218_.jpg",
     name:"Dell SmartChoice 14 Laptop",
     price:"49990",
     offerPrice:"45599",
    },
    {
        image:"https://m.media-amazon.com/images/I/71yjoXu2ZAL._AC_UY218_.jpg",
        name:"HP [SmartChoice] 15s",
        price:"41990",
        offerPrice:"39999",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41zCpYZBz2L._SX300_SY300_QL70_FMwebp_.jpg",
        name:"MSI Modern 14, Intel 12th Gen",
        price:"49990",
        offerPrice:"46999",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/41a4-vgETkL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Xiaomi Notebook Ultra Max 11th Gen",
        price:"47990",
        offerPrice:"45990",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/81pB730MM8L._AC_UY218_.jpg",
        name:"Acer Predator Helios Neo 16",
        price:"99990",
        offerPrice:"95990",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg",
        name:"Apple MacBook Air Laptop M1 chip",
        price:"69990",
        offerPrice:"65990",
       },
        {
        image:"https://m.media-amazon.com/images/I/51xKHE2Sc7L._SX300_SY300_QL70_FMwebp_.jpg",
        name:"ASUS TUF Gaming F15",
        price:"68990",
        offerPrice:"64990",
       },
        {
        image:"https://m.media-amazon.com/images/I/31gZSptUk1L._SY300_SX300_QL70_FMwebp_.jpg",
        name:"Acer Nitro V",
        price:"72990",
        offerPrice:"68990",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/61XsF-d1JVL._AC_UY218_.jpg",
        name:"Acer Swift 5 SF514-55TA",
        price:"72990",
        offerPrice:"68990",
       },
        {
        image:"https://m.media-amazon.com/images/I/51jUcRK69ML._AC_UY218_.jpg",
        name:"Dell G15 5520",
        price:"73990",
        offerPrice:"69990",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71h9nOTd93L._AC_UY218_.jpg",
        name:"HP Victus Gaming Laptop",
        price:"68990",
        offerPrice:"64990",
       },
        {
        image:"https://m.media-amazon.com/images/I/61hAJgfjrcL._AC_UY218_.jpg",
        name:"Lenovo IdeaPad Slim 5",
        price:"68990",
        offerPrice:"65990",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71c0GSxtEEL._AC_UY218_.jpg",
        name:"ASUS Vivobook 15",
        price:"60990",
        offerPrice:"56990",
       },
        {
        image:"https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY218_.jpg",
        name:"Lenovo ThinkPad E14",
        price:"70890",
        offerPrice:"66990",
       },
        {
        image:"https://m.media-amazon.com/images/I/714TjZtB+hL._AC_UY218_.jpg",
        name:"Fujitsu UH-X 13th Gen",
        price:"79990",
        offerPrice:"75990",
       },
        {
        image:"https://m.media-amazon.com/images/I/61YCWzjldDL._SY450_.jpg",
        name:"Apple 2023 MacBook Pro",
        price:"189900",
        offerPrice:"184990",
       },
        {
        image:"https://m.media-amazon.com/images/I/31E-xJTAshL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Samsung Galaxy Book3",
        price:"133990",
        offerPrice:"132990",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/71Dh450OVpL._AC_UY218_.jpg",
        name:"Samsung Galaxy Book3",
        price:"155990",
        offerPrice:"154990",
       },
        {
        image:"https://m.media-amazon.com/images/I/71bu0+r32yL._AC_UY218_.jpg",
        name:"Acer Swift X Intel",
        price:"97290",
        offerPrice:"95000",
       }, 
       {
        image:"https://m.media-amazon.com/images/I/61BZ2w3PzJL._AC_UY218_.jpg",
        name:"MSI Ryzon 7",
        price:"104990",
        offerPrice:"100000",
       },    
]



let CartArray = JSON.parse(localStorage.getItem("CartArray")) || [];



laptops.forEach(function(el){
    let card = document.createElement("div");
    card.setAttribute("id","Card");


    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","UpperDiv");
    upperdiv.style.height = "150px";
    upperdiv.style.width = "100%";
    upperdiv.style.display = "flex";
    let image = document.createElement("img");
    image.setAttribute("id","Img");
    image.src = el.image;
    image.style.width = "100%";
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
      addtocartlaptops(el);
      alert("Product added to cart !!");
    })



    card.append(upperdiv,lowerDiv,addtocartBtn);

    document.querySelector("#laptopDiv").append(card);
});


function addtocartlaptops(el){
  CartArray.push(el);
  localStorage.setItem("CartArray",JSON.stringify(CartArray));
}
