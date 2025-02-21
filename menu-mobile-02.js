<!DOCTYPE html>
<html lang="en">

<head>

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

    body {
      line-height: 1.5;
      font-family: "Oswald", serif;
      overflow-x: hidden;
    }

    * {
      margin: 0;
      box-sizing: border-box;
    }

    :before,
    :after {
      box-sizing: border-box;
    }

   .header-02 .container-02 {
      max-width: 100%;
      min-width: 100%;
      margin: 0;
    }

    .header-02 .row-02 {
      display: flex;
      flex-wrap: wrap;
    }

    .header-02 .v-center {
      align-items: center;
    }

    .header-02 ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .header-02 a {
      text-decoration: none;
    }

    /* header */
    .header-02 {
      display: block;
      width: 100%;
      position: relative;
      z-index: 99;
      padding: 15px 5%;
      background-color: rgb(255, 255, 255);
      display: none;
      border-bottom: 1px solid gainsboro;
    }

    .header-02 .item-left {
      flex: 0 0 10%;
    }

    .header-02 .logo a{
      display: flex;
      align-items: center;
    }

    .header-02 .logo img {
      max-width: 5rem;
    }

    .header-02 .item-center {
      flex: 0 0 63%;
    }

    .header-02 .item-right {
      flex: 0 0 20%;
      display: flex;
      justify-content: flex-end;
    }

    .header-02 .item-right a {
      text-decoration: none;
      font-size: 16px;
      color: #ffffff;
      display: inline-block;
      margin-left: 10px;
      background-color: #000000;
      padding: .5rem 2rem;
      border-radius: 2rem;
      transition: color 0.3s ease;
    }

    .header-02 .menu>ul>li {
      display: inline-block;
      line-height: 50px;
      margin-left: 25px;
    }

    .header-02 .menu>ul>li>a {
      font-size: 15px;
      font-weight: 500;
      color: #000000;
      position: relative;
      text-transform: capitalize;
      transition: color 0.3s ease;
    }

    .header-02 .menu>ul>li .sub-menu {
      position: absolute;
      z-index: 500;
      background-color: #ffffff;
      box-shadow: -2px 2px 70px -25px rgba(0, 0, 0, 0.3);
      padding: 20px 30px;
      transition: all 0.5s ease;
      margin-top: 25px;
      opacity: 0;
      visibility: hidden;
    }

    @media(min-width: 992px) {
      .header-02 .menu>ul>li.menu-item-has-children:hover .sub-menu {
        margin-top: 0;
        visibility: visible;
        opacity: 1;
      }
    }

    .header-02 .menu>ul>li .sub-menu>ul>li {
      line-height: 1;
    }

    .header-02 .menu>ul>li .sub-menu>ul>li>a {
      display: inline-block;
      padding: 10px 0;
      font-size: 15px;
      color: #555555;
      transition: color 0.3s ease;
      text-decoration: none;
      text-transform: capitalize;
    }

    .header-02 .menu>ul>li .single-column-menu {
      min-width: 280px;
      max-width: 350px;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu>.list-item>ul>li {
      line-height: 1;
      display: block;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu>.list-item>ul>li>a {
      padding: 10px 0;
      display: inline-block;
      font-size: 15px;
      color: #555555;
      transition: color 0.3s ease;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu {
      left: 50%;
      transform: translateX(-50%);
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu-column-4 {
      max-width: 1100px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 20px 15px;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item {
      flex: 0 0 25%;
      padding: 0 15px;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item .title {
      font-size: 16px;
      color: #ea4636;
      font-weight: 500;
      line-height: 1;
      padding: 10px 0;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item.text-center .title {
      text-align: center;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item img {
      max-width: 100%;
      width: 100%;
      vertical-align: middle;
      margin-top: 10px;
      height: 300px;
      object-fit: cover;
    }

    .header-02 .menu>ul>li .sub-menu.mega-menu>.list-item>ul>li>a:hover,
    .header-02 .menu>ul>li .sub-menu>ul>li>a:hover,
    .header-02 .item-right a:hover,
    .header-02 .menu>ul>li:hover>a {
      color: #000000;
      background-color: whitesmoke;
    }

    /* banner section */
    .banner-section {
      background-image: url('../img/banner.jpg');
      background-size: cover;
      background-position: center;
      height: 700px;
      width: 100%;
      display: block;
    }

    .mobile-menu-head,
    .mobile-menu-trigger {
      display: none;
    }

    /*responsive*/
    @media(max-width: 991px) {

      .header-02{
        display: block;
      }

      .header-02 .item-center {
        order: 3;
        flex: 0 0 100%;
      }

      .header-02 .item-left,
      .header-02 .item-right {
        flex: 0 0 auto;
      }

      .v-center {
        justify-content: space-between;
      }

      .header-02 .mobile-menu-trigger {
        display: flex;
        height: 30px;
        width: 30px;
        margin-left: 15px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
      }

      .header-02 .mobile-menu-trigger span {
        display: block;
        height: 2px;
        background-color: #333333;
        width: 24px;
        position: relative;
      }

      .header-02 .mobile-menu-trigger span:before,
      .header-02 .mobile-menu-trigger span:after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #333333;
      }

      .header-02 .mobile-menu-trigger span:before {
        top: -6px;
      }

      .header-02 .mobile-menu-trigger span:after {
        top: 6px;
      }

      .header-02 .item-right {
        align-items: center;
      }

      .header-02 .menu {
        position: fixed;
        width: 90%;
        background-color: #ffffff;
        left: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
        transform: translate(-100%);
        transition: all 0.5s ease;
        z-index: 1099;
      }

      .header-02 .menu.active {
        transform: translate(0%);
      }

      .header-02 .menu>ul>li {
        line-height: 1;
        margin: 0;
        display: block;
      }

      .header-02 .menu>ul>li>a {
        line-height: 50px;
        height: 50px;
        padding: 0 50px 0 15px;
        display: block;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .header-02 .menu>ul>li>a i {
        position: absolute;
        height: 50px;
        width: 50px;
        top: 0;
        right: 0;
        text-align: center;
        line-height: 50px;
        transform: rotate(-90deg);
      }

      .header-02 .menu .mobile-menu-head {
        display: flex;
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 501;
        position: sticky;
        background-color: #ffffff;
        top: 0;
      }

      .header-02 .menu .mobile-menu-head .go-back {
        height: 50px;
        width: 50px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
        line-height: 50px;
        text-align: center;
        color: #000000;
        font-size: 16px;
        display: none;
      }

      .header-02 .menu .mobile-menu-head.active .go-back {
        display: block;
      }

      .header-02 .menu .mobile-menu-head .current-menu-title {
        font-size: 15px;
        font-weight: 500;
        color: #000000;
      }

      .header-02 .menu .mobile-menu-head .mobile-menu-close {
        height: 50px;
        width: 50px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
        line-height: 50px;
        text-align: center;
        color: #000000;
        font-size: 25px;
      }

      .header-02 .menu .menu-main {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }

      .header-02 .menu>ul>li .sub-menu.mega-menu,
      .header-02 .menu>ul>li .sub-menu {
        visibility: visible;
        opacity: 1;
        position: absolute;
        box-shadow: none;
        margin: 0;
        padding: 15px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-top: 65px;
        max-width: none;
        min-width: auto;
        display: none;
        transform: translateX(0%);
        overflow-y: auto;
      }

      .header-02 .menu>ul>li .sub-menu::-webkit-scrollbar, 
      .header-02 .menu>ul>li .sub-menu.mega-menu::-webkit-scrollbar,
      .header-02 .menu .menu-main::-webkit-scrollbar{
        display: none;
      }

      .header-02 .menu>ul>li .sub-menu.active {
        display: block;
      }

      @keyframes slideLeft {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }

        100% {
          opacity: 1;
          transform: translateX(0%);
        }
      }

      @keyframes slideRight {
        0% {
          opacity: 1;
          transform: translateX(0%);
        }

        100% {
          opacity: 0;
          transform: translateX(100%);
        }
      }

      .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item img {
        margin-top: 0;
      }

      .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item.text-center .title {
        margin-bottom: 20px;
      }

      .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item.text-center:last-child .title {
        margin-bottom: 0px;
      }

      .header-02 .menu>ul>li .sub-menu.mega-menu-column-4>.list-item {
        flex: 0 0 100%;
        padding: 0px;
      }

      .header-02 .menu>ul>li .sub-menu>ul>li>a,
      .header-02 .menu>ul>li .sub-menu.mega-menu>.list-item>ul>li>a {
        display: block;
      }

      .header-02 .menu>ul>li .sub-menu.mega-menu>.list-item>ul {
        margin-bottom: 15px;
      }

      .menu-overlay {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1098;
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s ease;
      }

      .menu-overlay.active {
        visibility: visible;
        opacity: 1;
      }
    }
  </style>

</head>

<body>
  <!-- header start -->
  <header class="header-02">
    <div class="container-02">
      <div class="row-02 v-center">
        <div class="header-item item-left">
          <div class="logo">
            <a href="#">LOGO.</a>
          </div>
        </div>
        <!-- menu start here -->
        <div class="header-item item-center">
          <div class="menu-overlay"></div>
          <nav class="menu">
            <div class="mobile-menu-head">
              <div class="go-back"><i class="fa fa-angle-left"></i></div>
              <div class="current-menu-title"></div>
              <div class="mobile-menu-close">&times;</div>
            </div>
            <ul class="menu-main">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="menu-item-has-children">
                <a href="#">New <i class="fa fa-angle-down"></i></a>
                <div class="sub-menu mega-menu mega-menu-column-4">
                  <div class="list-item text-center">
                    <a href="#">
                      <img
                        src="https://th.bing.com/th/id/R.ce8de1adaa3fcc169f0d97c436b8274b?rik=6W1qX6Qp03lNWg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1504633273314-6a929fcd7090%3fixlib%3drb-0.3.5%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9%26s%3de8e0ff2cce3792a276fa84086113a17c&ehk=chx16tzqSRzpfA6BYM4FNaZZ%2fMJwEtxaqHPW1FZb9FI%3d&risl=&pid=ImgRaw&r=0"
                        alt="Fashion" />
                      <h4 class="title">Fashion</h4>
                    </a>
                  </div>
                  <div class="list-item text-center">
                    <a href="#">
                      <img
                        src="https://img.freepik.com/free-photo/male-technician-repairing-computer-motherboard-wooden-desk_23-2147923493.jpg?w=740&t=st=1671765056~exp=1671765656~hmac=4c8dffc9558819b4c21b126aaa394150f48adc3be9c8004c0b65d0420709ec00"
                        alt="Electronics" />
                      <h4 class="title">Electronics</h4>
                    </a>
                  </div>
                  <div class="list-item text-center">
                    <a href="#">
                      <img
                        src="https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt="Mobiles" />
                      <h4 class="title">Mobiles</h4>
                    </a>
                  </div>
                  <div class="list-item text-center">
                    <a href="#">
                      <img
                        src="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                        alt="Appliances" />
                      <h4 class="title">Appliances</h4>
                    </a>
                  </div>
                </div>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Shop <i class="fa fa-angle-down"></i></a>
                <div class="sub-menu mega-menu mega-menu-column-4">
                  <div class="list-item">
                    <h4 class="title">Men's Fashion</h4>
                    <ul>
                      <li><a href="#">T-Shirts</a></li>
                      <li><a href="#">Jeans</a></li>
                      <li><a href="#">Suit</a></li>
                      <li><a href="#">Kurta</a></li>
                      <li><a href="#">Watch</a></li>
                    </ul>
                    <h4 class="title">Beauty</h4>
                    <ul>
                      <li><a href="#">Moisturizer</a></li>
                      <li><a href="#">Face powder</a></li>
                      <li><a href="#">Lipstick</a></li>
                    </ul>
                  </div>
                  <div class="list-item">
                    <h4 class="title">Women's Fashion</h4>
                    <ul>
                      <li><a href="#">Sarees</a></li>
                      <li><a href="#">Sandals</a></li>
                      <li><a href="#">Watchs</a></li>
                      <li><a href="#">Shoes</a></li>
                    </ul>
                    <h4 class="title">Furniture</h4>
                    <ul>
                      <li><a href="#">Chairs</a></li>
                      <li><a href="#">Tables</a></li>
                      <li><a href="#">Doors</a></li>
                      <li><a href="#">Bed</a></li>
                    </ul>
                  </div>
                  <div class="list-item">
                    <h4 class="title">Home, Kitchen</h4>
                    <ul>
                      <li><a href="#">Kettle</a></li>
                      <li><a href="#">Toaster</a></li>
                      <li><a href="#">Dishwasher</a></li>
                      <li><a href="#">Microw-02ave oven</a></li>
                      <li><a href="#">Pitcher</a></li>
                      <li><a href="#">Blender</a></li>
                      <li><a href="#">Colander</a></li>
                      <li><a href="#">Tureen</a></li>
                      <li><a href="#">Cookware</a></li>
                    </ul>
                  </div>
                  <div class="list-item">
                    <img
                      src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                      alt="Chair" />
                  </div>
                </div>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Blog <i class="fas fa-angle-down"></i></a>
                <div class="sub-menu single-column-menu">
                  <ul>
                    <li><a href="#">Standard Layout</a></li>
                    <li><a href="#">Grid Layout</a></li>
                    <li><a href="#">single Post Layout</a></li>
                  </ul>
                </div>
              </li>
              <li class="menu-item-has-children">
                <a href="#">Pages <i class="fas fa-angle-down"></i></a>
                <div class="sub-menu single-column-menu">
                  <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">404 Page</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Brochure</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- menu end here -->
        <div class="header-item item-right">
          <!-- <a href="#">Login</a>
          <a href="#">Brochure</a>
          <a href="#">Shop</a> -->
          <!-- mobile menu trigger -->
          <div class="mobile-menu-trigger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- header end -->

</body>



<script>
  const menu = document.querySelector(".menu");
  const menuMain = menu.querySelector(".menu-main");
  const goBack = menu.querySelector(".go-back");
  const menuTrigger = document.querySelector(".mobile-menu-trigger");
  const closeMenu = menu.querySelector(".mobile-menu-close");
  let subMenu;
  menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener("click", () => {
    hideSubMenu();
  })
  menuTrigger.addEventListener("click", () => {
    toggleMenu();
  })
  closeMenu.addEventListener("click", () => {
    toggleMenu();
  })
  document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
  })
  function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  }
  function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
  }

  function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }

  window.onresize = function () {
    if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
        toggleMenu();
      }

    }
  }
</script>

</html>
