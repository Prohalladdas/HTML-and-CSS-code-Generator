
let firstCard = document.getElementById('firstCard')
firstCard.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = `<div id="create-Card" class="ContainerCard">
    <div class="imagebor">
    <img src="profilePhoto.jpg" alt="Profile Photo" id="image">
    </div>
    <h2 class="Title">Walter White</h2>
    <p class="paraGraph">Details, Walter White, a high school chemistry teacher turned methamphetamine manufacturer, adopts the alias Heisenberg as he descends into a world of crime, driven by
    ambition and desperation. Tragic follow.</p>
    <button id="Viewbtn">View Profile</button>
    </div>`

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = `#create-Card {
        min-height: 200px;
        max-width: 250px;
        background-color: #ffffff;
        border-radius: 12px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px -1px 12px -6px;
        position: relative;
    }
    
    .Title {
        color: #142468;
        padding: 0px;
        font-family: "Rubik", sans-serif;
    }
    
    .paraGraph {
        color: #535353;
        text-align: center;
        padding: 0px 12px 1px 12px;
        margin-top:-3px;
    }
    
    #image {
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: 3px solid #f3f3f3;
        position: relative;
    }
    
    .imagebor{
        border: 4px solid #605cb6;
        height: 105px;
        border-radius: 50%;
        position: relative;
        margin-top: 35px;
    }
    #Viewbtn {
        padding: 10px;
        width: 104px;
        border-radius: 18px;
        font-size: 10px;
        border: none;
        margin-bottom: 20px;
        margin-top: 6px;
        background-color: #605cb6;
        color: #ffffff;
        cursor: pointer;
        
    }
    
    #Viewbtn:hover {
        background-color: #726dcf;
        color: #f2f2f2;
        transition: 0.3s;
    
    }
    
    .ContainerCard::before {
        content: "";
        background-color: #605cb6;
        height: 114px;
        width: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        display: flex;
        justify-content: center;
        position: absolute;
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
//+++++++++++++++++++++++++
//Second Card add
let SecondCard = document.getElementById('SecondCard')
SecondCard.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = ` <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="container">
        <div class="box">
                <div class="imageCont">
                    <img src="https://i.pinimg.com/originals/1a/ee/8b/1aee8b8f59438747367f255edf1550ae.jpg" alt="Profile Photo" id="image">
                </div>
                <div class="details">
                    <div class="top">
                        <h2>Sauske Uchiha</h2>
                        <p>Side Hokage</p>
                    </div>
                    <div class="logo">
                        <a href=""><i class='bx bxl-meta'></i></a>
                        <a href=""><i class='bx bxl-instagram'></i></a>
                        <a href=""><i class='bx bxl-twitter'></i></a>
                    </div>
                    <a href="" style="text-decoration: none; color: #1e1e53;font-size: 15px;">/sauskeuchiha</a>
                    <button>Contact me</button>
            </div>
        </div>
    </div>`

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = `      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans", sans-serif;
    }

    .box {
        border-radius: 20px;
        height: 370px;
        width: 250px;
        background-image: linear-gradient(to bottom, #dfdfea, #d2d9f7);
    }

    #image {
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
    }

    .imageCont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 135px;
        padding: 12px;
    }

    .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .top {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    button {
        padding: 10px;
        width: 180px;
        border-radius: 19px;
        border: none;
        color: #FFFFFF;
        background-image: linear-gradient(to LEFT, #8181ff, #131f49);
        cursor: pointer;
        margin-top: 23px;
    }

    button:hover {
        color: #FFFFFF;
        background-image: linear-gradient(to LEFT, #9797fc, #02186a);
    }

    .logo {
        display: flex;
        width: 121px;
        justify-content: space-around;
        margin-top: 22px;
        margin-bottom: 6px;
    }

    .logo a {
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        height: 25px;
        width: 25px;
        padding: 2px;
        border-radius: 50%;
        background-image: linear-gradient(to LEFT, #9797fc, #02186a);
        color: #f3f3f3;
    }
    .logo a i:hover{
        color: #e7e6e6;
    }
    h2{
        color: #1e1e53;
        font-size: 22px;
    }
    p{
        color: #1e1e53;
    }`
    showCssContainer.innerText = cssCode;

})
//+++++++++++++++++++++++++++++++++
//Third Card add
let thirdCard = document.getElementById('thirdCard')
thirdCard.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = `<div class="container">
    <div class="item1">
        <div class="profilelogo">
            <img src="card in logo.jpeg" alt="" id="image">
        </div>
        <div style="margin-left: 15px;">
            <h4>Sundar Pichai</h4>
            <p style="font-size: 13px;color: #252525;">CEO of <span style="color: #0041ab;">Google</span></p>
        </div>
    </div>
    <div class="item2">
        <p>"Chennai-born Google CEO Sundar Pichai once revealed that his father spent money equivalent to his
            one-year salary on a flight ticket so that he could study at Stanford."</p>
    </div>
    <div class="item3 logo">
        <a href="" style="text-decoration: none;">
            <p><span style="color: #4285f4;">G</span><span style="color: #ea4335;">o</span><span
                    style="color: #fbbc05;">o</span><span style="color: #4285f4;">g</span><span
                    style="color: #34a853;">l</span><span style="color: #ea4335;">e</span>
            </p>
        </a>
    </div>
</div>`

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
        border-radius: 20px;
        min-height: 306px;
        width: 331px;
        background-image: linear-gradient(to left, #acf6fa, #c3ccf0);
    }


    h4 {
        color: #10283e;
        font-weight: 600;
    }

    #image {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
    }

    .item1 {
        display: flex;
        padding: 20px;
        width: 100%;
    }

    .item2 p {
        padding: 0px 20px 0px 20px
    }

    .logo {
        padding: 20px;
        margin-top: 13px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }`
    showCssContainer.innerText = cssCode;

})
//+++++++++++++++++++++++++++++++++
//Fourth Card add
let FourthCard = document.getElementById('FourthCard')
FourthCard.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('YourHtmlCode')
    let showhtml = ` <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="box">
        <div class="imageCont">
            <img src="https://i.pinimg.com/originals/44/95/f0/4495f0f136e70a532d7c02cf290e84ef.png"alt="Profile Photo" id="image">
        </div>
        <div class="details">
            <div class="top">
                <h2>Obito Uchiha</h2>
                <p>Ninja | Villain</p>
            </div>
            <div class="logo">
                <a href=""><i class='bx bxl-linkedin' ></i></a>
                <a href=""><i class='bx bxl-instagram'></i></a>
                <a href=""><i class='bx bxl-twitter'></i></a>
            </div>
        </div>
    </div>`

    showHtmlContainer.innerText = showhtml;

    let showCssContainer = document.getElementById('YourCssCode')
    let cssCode = `   @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans", sans-serif;
    }

    .box {
        border-radius: 20px;
        height: 260px;
        width: 250px;
        background: white;
        border: 1px solid gainsboro;
        box-shadow: 0px 0px 8px 0px #eeeeee;
    }

    #image {
        height: 86px;
        width: 86px;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
        filter: drop-shadow(1px 2px 2px rgb(174, 174, 174));
    }

    .imageCont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 135px;
        padding: 12px;
    }

    .details {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .top {
        margin-top: -12px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .logo {
        display: flex;
        margin-top: 22px;
        margin-bottom: 6px;
        width: 100px;
        height: 33px;
        border-radius: 12px;
        align-items: center;
        justify-content: space-evenly;
        background-color: #eeeeee;
    }

    .logo a {
        padding: 2px;
        color: #000000;
        font-size: 20px;
    }

    .logo a i:hover {
        color: #494949;
    }

    h2 {
        color: #1e1e53;
        font-size: 22px;
    }

    p {
        color: #1e1e53;
    }`
    showCssContainer.innerText = cssCode;

})