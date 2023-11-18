let cartItemLS = JSON.parse(localStorage.getItem("CartArray"));

let totalPrice = cartItemLS.reduce(function (acc, el) {
    return acc + parseInt(el.offerPrice.replace(/,/ , ''));
  }, 0);

document.querySelector("#showTotal").innerText = `₹ ${totalPrice}`;

