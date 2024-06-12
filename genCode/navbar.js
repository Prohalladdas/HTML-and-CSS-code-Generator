let firstNavbar = document.getElementById('firstNavbar')
firstNavbar.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = `<div class="navberContainer">
        <div class="navberr">
            <a href="#">Logo.</a>
            <div class="hamburgerr" id="hamburger-click-containerrrr">
                <ul>
                    <li><a href="./index.html">Link 1</a></li>
                    <li><a href="./navber.html">Link 2</a></li>
                    <li><a href="./button.html">Link 3</a></li>
                    <li><a href="./card.html">Link 4</a></li>
                    <li><a href="./footer.html">Link 5</a></li>
                </ul>
            </div>
        </div>
    </div> `

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navberContainer{
    position: absolute;
    color: black;
    height: 70px;
    width: 100%;
    background-color: #5c98b6;
    font-family: "Teachers", sans-serif;
    box-shadow: 1px 3px 10px -8px;
    z-index: 2;
}

.navberr {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.navberr ul {
    display: flex;
    list-style: none;
    padding: 0px 11px 0px 0px;
}

.navberr ul a {
    text-decoration: none;
    padding: 16px 18px;
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
}

.navberr ul a:hover {
    color: #111111;
}

.containerrrr {
    display: none;
}
.navberr a{
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    color: #ffff;
    margin-left: 30px;
}`
    showCssContainer.innerText = cssCode;

})
// Code copy 
function copyCode() {
    let YourCssCode = document.getElementById('YourCssCode');
    let range = document.createRange();
    range.selectNode(YourCssCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
function copyCodeHtml() {
    let yourHtmlCode = document.getElementById('YourHtmlCode');
    let range = document.createRange();
    range.selectNode(yourHtmlCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
//Html code copy button  after click
let Htmlcopiedsucced = document.getElementById('Htmlcopiedsucced');
Htmlcopiedsucced.addEventListener('click', function () {
    Htmlcopiedsucced.textContent = 'Copied ✓';

    setTimeout(function () {
        Htmlcopiedsucced.textContent = 'Copy Code';
    }, 3000);
});
let copyCodeButton = document.getElementById('copiedsucc');
copyCodeButton.addEventListener('click', function () {
    copyCodeButton.textContent = 'Copied ✓';

    setTimeout(function () {
        copyCodeButton.textContent = 'Copy Code';
    }, 3000);
});

// Popup, Isme Container ki class add karke then button per click karke  bg blur hoga css ki madad se or Undo hoga
function popup() {
    let bgBlur = document.querySelector('.all')
    bgBlur.classList.toggle('active')
    let CodeContainer = document.querySelector('#Code-Container')
    CodeContainer.classList.toggle('AfterClick')

    let clsbody = document.querySelector('.closeBody')
    clsbody.classList.toggle('clsBodyClick')
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Second Navbar
let secondNavbar = document.getElementById('secondNavbar')
secondNavbar.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = ` <nav>
        <div class="container">
            <div class="logo">
                <a href="#">UI Logo</a>
            </div>
            <div class="link">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Contact Us</a>
                <a href="#">About</a>
            </div>
            <div class="button">
                <button class="signbtn">Sign In</button>
                <button class="registerbtn">Register</button>
            </div>
        </div>
    </nav> `

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = ` @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Noto Sans", sans-serif;
        }

        .container {
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f0f8ff;
            background-color: #ffffff;
            box-shadow: 0px -34px 50px 1px #80808096; 
        }

        .logo a {
            text-decoration: none;
            margin-left: 55px;
            font-weight: 800;
            font-size: 19px;
            color: #175992;
        }

        .link a {
            text-decoration: none;
            padding: 30px 0px 0px 40px;
            font-size: 15px;
            font-weight: 500;
            color: #000000;
        }

        .link a:hover {
            color: #1509c4;
        }

        .button {
            margin-right: 55px;
        }

        .signbtn {
            padding: 3px;
            width: 84px;
            border-radius: 18px;
            border: 1px solid blue;
            background: #ffffff;
            color: blue;
            font-weight: 600;
            cursor: pointer;
        }
        .signbtn:hover {
            border: 1px solid blue;
            background: blue;
            color: rgb(255, 255, 255);
            transition: 0.2s;
        }

        .registerbtn {
            padding: 3px;
            width: 84px;
            border-radius: 18px;
            border: none;
            background: #e9ab48;
            color: rgb(255, 255, 255);
            font-weight: 600;
            cursor: pointer;
        }
        .registerbtn:hover {
            border: 1px solid #e9ab48;
            background: #ffffff;
            color: #e9ab48;
            transition: 0.2s;
        }`
    showCssContainer.innerText = cssCode;

})
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Third Navbar
let ThirdNavbar = document.getElementById('ThirdNavbar')
ThirdNavbar.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = `  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <nav>
        <div class="container">
            <div style="width: auto;display: flex;">
                <div class="logo">
                    <a href="#">UI Logo</a>
                </div>
                <div class="link">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Contact Us</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>

                    <select class="examples">
                        <option value="Examles">Examles</option>
                        <option value="Examles2">Examles2</option>
                        <option value="Examles3">Examles3</option>
                        <option value="Examles4">Examles4</option>
                    </select>

                </div>
            </div>
            <div class="button">
                <div class="socialLogo">
                    <a href=""><i class='bx bxl-facebook-circle'></i></a>
                    <a href=""><i class='bx bxl-linkedin-square'></i></a>
                    <a href=""><i class='bx bxl-instagram-alt'></i></a>
                </div>
                <button class="Downloadbtn">Download</button>
            </div>
        </div>
    </nav> `

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = ` @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Noto Sans", sans-serif;
        }

        .container {
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f0f8ff;
            background-color: #000000;
            box-shadow: 0px -34px 50px 1px #80808096;
        }

        .logo a {
            text-decoration: none;
            margin-left: 55px;
            font-weight: 800;
            font-size: 19px;
            color: #1509c4;
        }

        .link a {
            text-decoration: none;
            padding: 30px 0px 0px 40px;
            font-size: 15px;
            font-weight: 500;
            color: #ffffff;
        }

        .link a:hover {
            color: #1509c4;
        }

        .button {
            margin-right: 55px;
            display: flex;
        }

        .Downloadbtn {
            padding: 2px;
            width: 84px;
            border-radius: 5px;
            border: 1px solid blue;
            background: #ffffff;
            color: blue;
            font-weight: 500;
            cursor: pointer;
        }

        .Downloadbtn:hover {
            border: 1px solid blue;
            background: blue;
            color: rgb(255, 255, 255);
            transition: 0.2s;
        }

        .socialLogo {
            border-right: 1px solid #ffffff;
            margin-right: 11px;
        }

        .socialLogo i {
            color: rgb(255, 255, 255);
            cursor: pointer;
            font-size: 20px;
            padding: 7px;
        }

        .examples{
            margin-left: 32px;
        }`
    showCssContainer.innerText = cssCode;

})
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Fourth Navbar
let FourthNavbar = document.getElementById('FourthNavbar')
FourthNavbar.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = `  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <nav>
        <div class="container">
            <div class="contact">
                <a href="#"><i class='bx bx-phone-call'></i> +91 7438469106</a>
            </div>
            <div class="sale">
                <h4 style="color: #ffffff;display: flex;align-items: center;">OCTOBER SALE : </h4><span
                    style="font-size: 12px;margin-top: 2px; display: flex; align-items: center;"> Save Upto $1,69 Apply
                    Coupon Code
                </span><span class="topsale">TOP SALE</span>
            </div>
            <div class="aboutLogo">
                <a href="#"> <i class='bx bx-message-dots'></i><span>Chat</span></a>
                <a href="#"><i class='bx bx-error-circle'></i><span>Fags</span></a>
                <a href="#"><i class='bx bx-bolt-circle'></i><span>Support</span></a>
            </div>
        </div>
        <div class="SecondNavcontainer">
            <div class="secondBox" style="display: flex;">
                <div class="logo">
                    <a href="#">UI Logo</a>
                </div>
                <div class="link">
                    <a href="#">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Contact Us</a>
                    <a href="#">About</a>
                    <a href="#">Collection</a>
                </div>
            </div>
            <div class="button">
                <div class="sea">
                    <input type="search" placeholder="Search..."><i class='bx bx-search-alt-2 ' id="search"></i>
                </div>
                <div class="register">
                    <button class="signbtn">Login</button>
                    <button class="registerbtn">Sign Up</button>
                </div>
            </div>
        </div>
    </nav> `

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = ` @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Noto Sans", sans-serif;
        }

        .container {
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #6dff6a;
            background-color: #351065;
            box-shadow: 0px -34px 50px 1px #80808096;
        }

        .contact a {
            text-decoration: none;
            margin-left: 55px;
            font-weight: 500;
            font-size: 13px;
            color: #ffffff;
        }

        .sale {
            display: flex;
        }

        .sale a {
            text-decoration: none;
            padding: 30px 0px 0px 40px;
            font-size: 15px;
            font-weight: 500;
            color: #000000;
        }

        .aboutLogo {
            margin-right: 15px;
            display: flex;
            align-items: center;
        }

        .aboutLogo a {
            text-decoration: none;
            padding: 6px;
            font-size: 13px;
            display: flex;
            align-items: center;
        }

        .aboutLogo a i {
            color: #ffffff;
            padding: 0px 7px 0px 0px
        }

        span {
            color: #ffffff;
        }


        .topsale {
            display: flex;
            justify-content: center;
            font-size: 12px;
            padding: 5px;
            background-color: #e9ab48;
            cursor: pointer;
            border-radius: 8px;
            border-radius: 3px;
            margin-left: 10px;
        }

        /*  */
        .SecondNavcontainer {
            height: 70px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f0f8ff;
            background-color: #ffffff;
            box-shadow: 0px -34px 50px 1px #80808096;
        }

        .logo a {
            text-decoration: none;
            margin-left: 55px;
            font-weight: 800;
            font-size: 19px;
            color: #175992;
        }

        .link a {
            text-decoration: none;
            padding: 30px 0px 0px 40px;
            font-size: 15px;
            font-weight: 500;
            color: #000000;
        }

        .link a:hover {
            color: #1509c4;
        }

        .button {
            margin-right: 10px;
            display: flex;
            align-items: center;
        }

        .signbtn {
            padding: 3px;
            width: 100px;
            height: 32px;
            border-radius: 18px;
            border: 1px solid blue;
            background: #ffffff;
            color: blue;
            font-weight: 600;
            cursor: pointer;
        }

        .signbtn:hover {
            border: 1px solid blue;
            background: blue;
            color: rgb(255, 255, 255);
            transition: 0.2s;
        }

        .registerbtn {
            padding: 3px;
            width: 100px;
            height: 32px;
            border-radius: 18px;
            border: none;
            background: #e9ab48;
            color: rgb(255, 255, 255);
            font-weight: 600;
            cursor: pointer;
        }

        .registerbtn:hover {
            border: 1px solid #e9ab48;
            background: #ffffff;
            color: #e9ab48;
            transition: 0.2s;
        }

        .sea {
            padding: 0px 32px 0px 0px;
            display: flex;
        }

        input {
            width: 131px;
            height: 30px;
        }

        #search {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 30px;
            background: #472a6b;
            color: white;
            cursor: pointer;
        }
        #search:hover{
            background: #6c42a0;
        }

        .register {
            width: 209px;
            display: flex;
            justify-content: space-around;
        }`
    showCssContainer.innerText = cssCode;

})