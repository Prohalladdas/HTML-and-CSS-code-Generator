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