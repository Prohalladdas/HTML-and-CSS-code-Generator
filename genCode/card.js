function generateCard() {
    //css code
    let cssCodeElement = document.getElementById('YourCssCode');
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

    cssCodeElement.innerText = cssCode;

    // html code
    let htmlcode = document.getElementById('YourHtmlCode')
    let showhtml = `<div id="create-Card" class="ContainerCard">
    <div class="imagebor">
    <img src="profilePhoto.jpg" alt="Profile Photo" id="image">
    </div>
    <h2 class="Title">Walter White</h2>
    <p class="paraGraph">Details, Walter White, a high school chemistry teacher turned methamphetamine manufacturer, adopts the alias Heisenberg as he descends into a world of crime, driven by
    ambition and desperation. Tragic follow.</p>
    <button id="Viewbtn">View Profile</button>
    </div>`
    htmlcode.innerText = showhtml;
}
generateCard()
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