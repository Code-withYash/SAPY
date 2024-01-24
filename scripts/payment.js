var cartItemLS = JSON.parse(localStorage.getItem("CartArray"));

var totalPrice = cartItemLS.reduce(function (acc, el) {
    return acc + parseInt(el.offerPrice.replace(/,/ , ''));
  }, 0);

document.querySelector("#showTotal").innerText = `₹ ${totalPrice}`;

document.querySelector("#placeYourOrder").addEventListener("click",function(){
  let fnameofPerson = document.querySelector("#fname").value;
  let lnameofPerson = document.querySelector("#lname").value;
  let countryofPerson = document.querySelector("#country").value;
  let street = document.querySelector("#street").value;
  let city = document.querySelector("#city").value;
  let state = document.querySelector("#state").value;
  let pincode = document.querySelector("#pincode").value;
  let Pnumber = document.querySelector("#number").value;
  let emailid = document.querySelector("#email").value;
  if(fnameofPerson == ""){
    alert("Please fill the details First!");
  }else if(lnameofPerson == ""){
    alert("Please fill the details First!");
  }else if(countryofPerson == ""){
    alert("Please fill the details First!");
  }else if(street == ""){
    alert("Please fill the details First!");
  }else if(city == ""){
    alert("Please fill the details First!");
  }else if(state == ""){
    alert("Please fill the details First!");
  }else if(pincode == ""){
    alert("Please fill the details First!");
  }else if(Pnumber == ""){
    alert("Please fill the details First!");
  }else if(emailid==""){
    alert("Please fill the details First!");
  }else{
    alert(`Thanks For Ordering. Your Order for ₹${totalPrice}/- has been Placed Successfully!`);
  }
});