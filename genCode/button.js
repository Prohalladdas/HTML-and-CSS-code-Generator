// Value
let btn = document.getElementById('nameBtn')
let buttonFontColor = document.getElementById('colorBtn')
let buttonBGColor = document.getElementById('BGColorBtn')
let buttonBorderRadious = document.getElementById('BorderRadiousBtn')
let buttonBorderRadiouSize = document.getElementById('BorderSizeBtn')
let fontSize = document.getElementById('fontSizeBtn')
let ButtonSize = document.getElementById('SizeBtn')
let fontWeightButton = document.getElementById('fontWeighBtn')
let btnHeight = document.getElementById('heightBtn')
let widthButton = document.getElementById('widthBtn')
let buttonHover = document.getElementById('btnHover')
let buttonFontHover = document.getElementById('btnFontHover')
let BorderBtnColor = document.getElementById('BorderSizeBtnColor')
// addEvntListner
btn.addEventListener('input', generateBtn);
buttonFontColor.addEventListener('input', generateBtn);
buttonBGColor.addEventListener('input', generateBtn);
buttonBorderRadious.addEventListener('input', generateBtn);
buttonBorderRadiouSize.addEventListener('input', generateBtn);
fontSize.addEventListener('input', generateBtn);
ButtonSize.addEventListener('input', generateBtn);
fontWeightButton.addEventListener('input', generateBtn);
btnHeight.addEventListener('input', generateBtn);
widthButton.addEventListener('input', generateBtn);
buttonHover.addEventListener('input', generateBtn);
buttonFontHover.addEventListener('input', generateBtn);
BorderBtnColor.addEventListener('input', generateBtn);

function generateBtn() {
    let nameBtn = btn.value;
    let colorBtn = buttonFontColor.value;
    let BGColorBtn = buttonBGColor.value;
    let BorderRadiousBtn = buttonBorderRadious.value;
    let BorderSizeBtn = buttonBorderRadiouSize.value;
    let fontSizeBtn = fontSize.value;
    let SizeBtn = ButtonSize.value;
    let fontWeightBtn = fontWeightButton.value || 600;
    let heightBtn = btnHeight.value;
    let widthBtn = widthButton.value;
    let cursorPointer = 'pointer'; // Default cursor style
    let btnHover = buttonHover.value;
    let btnFontHover = buttonFontHover.value;
    let BorderSizeColor = BorderBtnColor.value;

    let showBtn = document.getElementById('showBtn');
    let ButtonCSS = `<button id="create-Button">${nameBtn ? nameBtn : 'Button'}</button>`;


    showBtn.innerHTML = ButtonCSS;
    let cssCode = `#create-Button {
     color: ${colorBtn};
     background-color: ${BGColorBtn};
     border-radius: ${BorderRadiousBtn}px;
     border: ${BorderSizeBtn} ${BorderSizeColor};
     font-size: ${fontSizeBtn}px;
     padding: ${SizeBtn}px;
     font-weight: ${fontWeightBtn};
     height: ${heightBtn}px;
     width: ${widthBtn}px;
     cursor: ${cursorPointer};
     box-shadow:  0 1px 1px 0 rgba(0,0,0,0.5),
      0 6px 20px 0 rgba(0,0,0,0.1) ;
     transition: background-color 0.2s ease;
    }

    #create-Button:hover {
    background-color: ${btnHover};
    color: ${btnFontHover};
    }`;

    let styleElement = document.createElement('style'); // here
    styleElement.textContent = `#create-Button {
      ${cssCode}
      color: ${colorBtn};
      background-color: ${BGColorBtn};
      border-radius: ${BorderRadiousBtn}px;
      border: ${BorderSizeBtn} ${BorderSizeColor};
      font-size: ${fontSizeBtn}px;
      padding: ${SizeBtn}px;
      font-weight: ${fontWeightBtn};
      height: ${heightBtn}px;
      width: ${widthBtn}px;
      cursor: ${cursorPointer};
      box-shadow:  0 1px 1px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.1) ;
      transition: background-color 0.2s ease;
    }
    #create-Button:hover {
        background-color: ${btnHover};
        color: ${btnFontHover};
    }
    `; //end
    document.head.appendChild(styleElement);

    // Show CSS code to display the current style
    let cssCodeElement = document.getElementById('YourCssCode');
    cssCodeElement.textContent = cssCode;
    // show Html code onn display
    let htmlCode = `<button id="create-Button">${nameBtn ? nameBtn : 'Button'}</button>`
    let htmlCodeElement = document.getElementById('YourHtmlCode');
    htmlCodeElement.textContent = htmlCode;
}
generateBtn();
// Function to copy CSS code
function copyCode() {
    let yourCssCode = document.getElementById('YourCssCode');
    let range = document.createRange();
    range.selectNode(yourCssCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
};
//Html code copy code
function copyCodeHtml() {
    let yourHtmlCode = document.getElementById('YourHtmlCode');
    let range = document.createRange();
    range.selectNode(yourHtmlCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

// Add event listener to the copy button after click event
let copyCodeButton = document.getElementById('copiedsucc');
copyCodeButton.addEventListener('click', function () {
    copyCodeButton.textContent = 'Copied ✓';

    setTimeout(function () {
        copyCodeButton.textContent = 'Copy CSS Code';
    }, 3000);
});
//Html code copy button  after click
let Htmlcopiedsucced = document.getElementById('Htmlcopiedsucced');
Htmlcopiedsucced.addEventListener('click', function () {
    Htmlcopiedsucced.textContent = 'Copied ✓';

    setTimeout(function () {
        Htmlcopiedsucced.textContent = 'Copy HTML Code';
    }, 3000);
});


// Popup, Isme Container ki class add karke then button per click karke  bg blur hoga css ki madad se or Undo hoga
function popup(){
    let bgBlur = document.querySelector('.all')
    bgBlur.classList.toggle('active')
    let CodeContainer = document.querySelector('#Code-Container')
    CodeContainer.classList.toggle('AfterClick')
}

// hamburger
window.onload = function  (){
    window.addEventListener('scroll',function (e){
        if(window.pageYOffset > 100){
            document.querySelector("div").classList.add('is-scrolling');
        }else{
            document.querySelector("div").classList.remove('is-scrolling');
        }
    })

    const menu_btn = document.querySelector('.humbergar');
    const mobile_menu = document.querySelector('#hamburger-click-containerrr');
    const mobile_cont = document.querySelector('#click-cont');

    menu_btn.addEventListener('click',function(){ // iss-active wohi per  hi hoga jahaper click event hoga matlab hamburger and content ki container
        menu_btn.classList.toggle('iss-active');
        mobile_menu.classList.toggle('iss-active');
        mobile_cont.classList.toggle('iss-active');
    })
}