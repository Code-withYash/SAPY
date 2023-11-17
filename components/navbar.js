const navbar = () => {
    return `
    <nav>
      <div class="navbar_logo">
        <a href="./"><img
          src="./images/SAPY.png"
          alt="logo" 
        /> </a>
      </div>
      <div class="middle_nav_links">
      <div><a href="./index.html">HOME</a></div>
      <div><a href="./category.html">CATEGORIES</a></div>
      <div><a href="./about.html">ABOUT</a></div>
      <div><a href="./payment.html">PAYMENT</a></div>
      </div>
      <div class="right_nav_links">
        <div id="login">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
            alt="user"
          />
        </div>
      <div id="user_logged">
        <p>X</p>
        <h2>Hi, you are already logged in.</h2>
        <button>Log Out</button>
      </div>
        <div id="cart_btn">
          <a href="./cart.html">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
              alt="cart"
            />
          </a>
        </div>
      </div>
    </nav>
    
  
    <div id="login_popup">
    <div>
      <p class="close_login">X</p>
      <div class="login_logo">
        <img
          src="./images/SAPY.png"
          alt="logo"
        />
      </div>
      <div class="login_input">
        <span>+91</span>
        <input type="Number" placeholder="Enter your phone number" />
      </div>
      <button disabled>CONTINUE</button>
      
      <p class="social">
        OR CONNECT WITH
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/login/google-login-white.svg"
          alt="google"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/login/fb-login-white.svg"
          alt="fb"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/login/email-rounded.svg"
          alt="mail"
        />
      </p>
      <div class="conditions">
        * By Continuing you agree to the Terms of Services and Privacy policy.
      </div>
    </div>
    <div class="enter_otp">
    <p class="backToLogin">&loarr;</p>
    <h1>Enter Your OTP</h1>
    <div class="otp">Your otp is</div>
    <div>
      <input type="number" placeholder="Enter OTP here" />
      <p class="otp_message"></p>
    </div>
    <button disabled>CONFIRM</button>
  </div>
  </div> 
    `;
  };
  
  export default navbar;
  