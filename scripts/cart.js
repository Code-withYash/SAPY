let cartItemLS = JSON.parse(localStorage.getItem("CartArray"));
displayItem(cartItemLS);

let totalPrice = cartItemLS.reduce(function (acc, el) {
  return acc + parseInt(el.offerPrice.replace(/,/ , ''));
}, 0);

document.querySelector("#totalPrice>span").innerText = `₹ ${totalPrice} only/- `;
document.querySelector("#totalItems>span").innerText = cartItemLS.length;

function displayItem(res){
  res.forEach(function(el, i){
    let card = document.createElement("div");
    card.setAttribute("id","skirtCard");


    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","skirtUpperDivCard");
    upperdiv.style.height = "350px";
    upperdiv.style.width = "90%";
    upperdiv.style.display = "flex";
    upperdiv.style.border = "2px solid green";
    let image = document.createElement("img");
    image.setAttribute("id","skirtImg");
    image.src = el.image;
    image.style.width = "100%";
    image.style.overflow = "hidden";
    upperdiv.append(image);



    let lowerDiv = document.createElement("div");
    lowerDiv.setAttribute("id","skirtLowerDiv");

    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id","skirtNameDiv");
    let name = document.createElement("p");
    name.setAttribute("id","skirtName");
    name.innerText = el.name;
    nameDiv.append(name);

    let priceDiv = document.createElement("p");
    priceDiv.setAttribute("id","skirtPriceDiv");

    let priceDiv1 = document.createElement("p");
    priceDiv1.setAttribute("id","skirtPriceDiv1");
    let pr = document.createElement("p");
    pr.style.fontFamily = "Bebas Neue";
    pr.innerText = "Price";
    let Price = document.createElement("p");
    Price.setAttribute("id","skirtPrice");
    Price.innerText = `₹ ${el.price}`;
    priceDiv1.append(pr,Price);

    let priceDiv2 = document.createElement("p");
    priceDiv2.setAttribute("id","skirtPriceDiv2");
    let offerPr = document.createElement("p");
    offerPr.style.fontFamily = "Bebas Neue";
    offerPr.innerText = `Offer Price`;
    let offerPrice = document.createElement("p");
    offerPrice.setAttribute("id","skirtOfferPrice");
    offerPrice.innerText = `₹ ${el.offerPrice}`;
    priceDiv2.append(offerPr,offerPrice);

    priceDiv.append(priceDiv1,priceDiv2);



    lowerDiv.append(nameDiv,priceDiv);

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function(event){
      event.target.parentNode.remove();
    deleteItem(i);
    });

    card.append(upperdiv,lowerDiv,btn);

    document.querySelector("#newCont").append(card);
});
}

function deleteItem(i) {
  cartItemLS.splice(i,1);
  localStorage.setItem("CartArray",JSON.stringify(cartItemLS));
  window.location.reload(); 
  //  Or You Can Use:-
  // displayItem(cartItemLS);
};