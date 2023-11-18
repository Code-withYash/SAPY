import navbar from "../components/navbar.js";
const header = document.querySelector("#navbar");

// navbar section
header.innerHTML = navbar();

// sticky navbar
let lastScrollTop = 0;
let sticky_navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    sticky_navbar.style.transform = "translateY(-70px)";
  } else {
    sticky_navbar.style.transform = "translateY(0px)";
  }
  lastScrollTop = scrollTop;
});

var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }



// login popup
const login = document.querySelector("#login");
const close_login = document.querySelector(".close_login");

login.addEventListener("click", () => {
  show_login_form();
});

close_login.addEventListener("click", () => {
  const login_popup = document.querySelector("#login_popup");
  login_popup.style.display = "none";
});

const show_login_form = () => {
  const login_popup = document.querySelector("#login_popup");
  const logged = localStorage.getItem("login") || 0;
  const user_logged = document.querySelector("#user_logged");
  const logout = document.querySelector("#user_logged > button");
  const close_user = document.querySelector("#user_logged>p");
  if (logged == 1) {
    user_logged.style.display = "block";
    close_user.addEventListener("click", () => {
      user_logged.style.display = "none";
    });
    logout.addEventListener("click", () => {
      localStorage.setItem("login", 0);
      window.location.reload();
    });
  } else {
    login_popup.style.display = "grid";
  }
};

//login validation
const number = document.querySelector(".login_input > input");
const check_btn = document.querySelector("#login_popup > div > button");

number.addEventListener("input", () => {
  if (number.value.trim().length == 10) {
    check_btn.disabled = false;
    check_btn.style.cursor = "pointer";
    check_btn.style.opacity = "100%";
  } else {
    check_btn.disabled = true;
    check_btn.style.cursor = "not-allowed";
    check_btn.style.opacity = "50%";
  }
});

check_btn.addEventListener("click", () => {
  check_valid_num();
});

const check_valid_num = () => {
  const login_form = document.querySelector("#login_popup > div:nth-child(1)");
  const otp_form = document.querySelector("#login_popup > .enter_otp");
  login_form.style.display = "none";
  otp_form.style.display = "flex";

  const otp_field = document.querySelector("#login_popup > .enter_otp > .otp");
  let otp = Math.floor(Math.random() * 900000) + 100000;
  localStorage.setItem("otp", otp);
  let time = 1 * 60;
  otp_field.innerHTML = `Your otp is ${otp} and it is valid for <span class="countDown"><span>`;
  startTimer(time, otp);

  const backToLogin = document.querySelector(".backToLogin");
  backToLogin.addEventListener("click", () => {
    login_form.style.display = "flex";
    otp_form.style.display = "none";
  });

  const otp_input = document.querySelector(".enter_otp > div > input ");
  const otp_btn = document.querySelector(".enter_otp > button ");

  otp_input.addEventListener("input", () => {
    if (otp_input.value.trim().length == 6) {
      otp_btn.disabled = false;
      otp_btn.style.cursor = "pointer";
      otp_btn.style.opacity = "100%";
    } else {
      otp_btn.disabled = true;
      otp_btn.style.cursor = "not-allowed";
      otp_btn.style.opacity = "50%";
    }
  });

  otp_btn.addEventListener("click", () => {
    let gene_otp = localStorage.getItem("otp");
    const otp_message = document.querySelector(".otp_message");
    if (otp_input.value == gene_otp) {
      otp_message.innerHTML = "Login Successful";
      localStorage.setItem("login", 1);
      window.location.reload();
    } else {
      otp_message.innerHTML = "Wrong otp";
    }
    otp_input.value = "";
  });
};

let minutes;
let seconds;

const startTimer = (time, otp) => {
  const countDown = document.querySelector(".enter_otp > .otp>.countDown");
  setInterval(() => {
    if (time >= 0) {
      minutes = Math.floor(time / 60);
      seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;
      countDown.innerText = `${minutes}:${seconds}s`;
      time--;
    } else {
      countDown.innerText = `otp expired`;
      otp = Math.floor(Math.random() * 900000) + 100000;
      localStorage.setItem("otp", otp);
    }
  }, 1000);
};


const cart = document.querySelector("#cart_btn>img");

cart.addEventListener("click",function(){
  window.location.href = "../cart.html"
});