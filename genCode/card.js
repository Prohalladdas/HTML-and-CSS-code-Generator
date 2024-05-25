let card = document.querySelector('.ContainerCard')
let H2 = document.getElementById('boxTitle')
let para = document.getElementById('paraGraph')
let heightCon = document.getElementById('height')
let widthCon = document.getElementById('width')
let Bgcolorr = document.getElementById('bgColor')
let h2fontcolor = document.getElementById('fontColor')
let DetailsFontColor = document.getElementById('DetalsFontColor')
let BoxborderRadius = document.getElementById('borderRadius')
let paddingBox = document.getElementById('boxPadding')
let displayflex = document.getElementById('displayflex')
let flexdirection = document.getElementById('flexdirection')
let justifyContent = document.getElementById('justifyContent')
let alignItems = document.getElementById('alignItems')
let titlepad = document.getElementById('titlepadding')
// imagee
let heightimage = document.getElementById('heightImage')
let widthimage = document.getElementById('widthImage')
let objectfit = document.getElementById('objectfit')
let imaBorderRadious = document.getElementById('imaBorderRadious')
let photoBorder = document.getElementById('photoBorder')
let photoBorderColor = document.getElementById('photoBorderColor')
// Image back containerPsudoBg
let imageback2Border = document.getElementById('imageback2Border')
let imageback2Bordercolor = document.getElementById('imageback2Bordercolor')
// button
let btnNamebox = document.getElementById('btnName')
let btnColorbox = document.getElementById('btnColor')
let btnBgColorbox = document.getElementById('btnBgColor')
let btnborderRadius = document.getElementById('btnborderRadius')
let btnWidthbox = document.getElementById('btnWidth')
let btnPaddingbox = document.getElementById('btnPadding')
let btnFontSizebox = document.getElementById('btnFontSize')
let btnHoverColorbox = document.getElementById('btnHoverColor')
let btnHoverBgColorbox = document.getElementById('btnHoverBgColor')
// Psudo
let containerPsudoBg = document.getElementById('containerPsudoBg')
let borderleftRbox = document.getElementById('borderleftR')
let borderRightRbox = document.getElementById('borderRightR')
let psudoBgHeightbox = document.getElementById('psudoBgHeight')
let psudoBgWidthbox = document.getElementById('psudoBgWidth')

card.addEventListener('input', generateCard)
H2.addEventListener('input', generateCard)
para.addEventListener('input', generateCard)
heightCon.addEventListener('input', generateCard)
widthCon.addEventListener('input', generateCard)
Bgcolorr.addEventListener('input', generateCard)
h2fontcolor.addEventListener('input', generateCard)
DetailsFontColor.addEventListener('input', generateCard)
BoxborderRadius.addEventListener('input', generateCard)
paddingBox.addEventListener('input', generateCard)
flexdirection.addEventListener('input', generateCard)
justifyContent.addEventListener('input', generateCard)
alignItems.addEventListener('input', generateCard)
titlepad.addEventListener('input', generateCard)
//image
heightimage.addEventListener('input', generateCard)
widthimage.addEventListener('input', generateCard)
objectfit.addEventListener('input', generateCard)
imaBorderRadious.addEventListener('input', generateCard)
photoBorder.addEventListener('input', generateCard)
photoBorderColor.addEventListener('input', generateCard)
// Btn
btnNamebox.addEventListener('input', generateCard)
btnColorbox.addEventListener('input', generateCard)
btnBgColorbox.addEventListener('input', generateCard)
btnWidthbox.addEventListener('input', generateCard)
btnPaddingbox.addEventListener('input', generateCard)
btnFontSizebox.addEventListener('input', generateCard)
btnHoverColorbox.addEventListener('input', generateCard)
btnHoverBgColorbox.addEventListener('input', generateCard)
btnborderRadius.addEventListener('input', generateCard)
// image bac
imageback2Border.addEventListener('input', generateCard)
imageback2Bordercolor.addEventListener('input', generateCard)
// Psudo
containerPsudoBg.addEventListener('input', generateCard)
borderleftRbox.addEventListener('input', generateCard)
borderRightRbox.addEventListener('input', generateCard)
psudoBgHeightbox.addEventListener('input', generateCard)
psudoBgWidthbox.addEventListener('input', generateCard)



function generateCard() {
    let GenCard = card.value
    let heading = H2.value
    let paraGraph = para.value
    let height = heightCon.value
    let width = widthCon.value
    let backgroundColor = Bgcolorr.value
    let TitleFontColor = h2fontcolor.value
    let borderRadius = BoxborderRadius.value
    let padding = paddingBox.value
    let display = displayflex.value
    let flexdirectioncolumn = flexdirection.value
    let justifyContentCenter = justifyContent.value
    let alignItemsCenter = alignItems.value
    let paraColor = DetailsFontColor.value
    let titlepadding = titlepad.value
    //image
    let heiightima = heightimage.value
    let widthima = widthimage.value
    let objecttfitcover = objectfit.value
    let borderRadiusimage = imaBorderRadious.value || '%';
    let photoBorderRadius = photoBorder.value
    let photoBorderRadiusColor = photoBorderColor.value
    let imageback2Border2 = imageback2Border.value
    let imageback2Bordercolor2 = imageback2Bordercolor.value
    // btn
    let btnNameboxlast = btnNamebox.value
    let btnColorboxItem = btnColorbox.value
    let btnBgColorboxItem = btnBgColorbox.value
    let btnWidthboxItem = btnWidthbox.value
    let btnPaddingboxItem = btnPaddingbox.value
    let btnFontSizeboxItem = btnFontSizebox.value
    let btnHoverColorItem = btnHoverColorbox.value
    let btnHoverBgColorItem = btnHoverBgColorbox.value
    let btnborderRadiusItem = btnborderRadius.value
    // Psudo
    let containerPsudoBgItem = containerPsudoBg.value
    let borderleftRboxitem = borderleftRbox.value
    let borderRightRboxitem = borderRightRbox.value
    let psudoBgHeightItem = psudoBgHeightbox.value
    let psudoBgWeightItem = psudoBgWidthbox.value


    let showCard = document.getElementById('showCard');
    let CardCSS = `<div id="create-Card" class="ContainerCard">${GenCard ? GenCard : ''}
    <div class="imagebor">
    <img src="profilePhoto.jpg" alt="Profile Photo" id="image">
    </div>
    <h2 class="Title">${heading}</h2>
    <p class="paraGraph">${paraGraph}</p>
    <button id="Viewbtn">${btnNameboxlast ? btnNameboxlast : 'View Profile'}</button>
    </div>`;

    showCard.innerHTML = CardCSS;

    // Styling
    let style = document.createElement('style')
    style.textContent = `#create-Card{
        background-color: ${backgroundColor};
        min-height: ${height}px;
        max-width: ${width}px;
        border-radius: ${borderRadius}px;
        display: ${display};
        flex-direction: ${flexdirectioncolumn};
        align-items: ${alignItemsCenter};
        padding: ${padding}px;
        position:relative;
        
        .Title{
            color: ${TitleFontColor};
            padding: ${titlepadding}px;
        }
        .paraGraph{
            color: ${paraColor};
        }
        #image{
            height: ${heiightima}px;
            width: ${widthima}px;
            object-fit: ${objecttfitcover};
            border-radius: ${borderRadiusimage}%;
            border: ${photoBorderRadius}px solid ${photoBorderRadiusColor};
        }
      
        .imagebor{
            border: ${imageback2Border2}px solid ${imageback2Bordercolor2};
        }
        #Viewbtn {
            color: ${btnColorboxItem};
            background-color: ${btnBgColorboxItem};
            padding: ${btnPaddingboxItem}px;
            font-size: ${btnFontSizeboxItem}px;
            width: ${btnWidthboxItem}px;
            border-radius:${btnborderRadiusItem}px;
            border:none;
        }
        #Viewbtn:hover{
            color: ${btnHoverColorItem};
            background-color: ${btnHoverBgColorItem};
            transition: 0.3s;
        }
    }`
    // Ye psudo selector styling le liye alag code likhna pada
    let psudoselector =
        `.ContainerCard::before {
        background-color: ${containerPsudoBgItem};
        height: ${psudoBgHeightItem}px;
        width: ${psudoBgWeightItem}%;
        border-top-right-radius: ${borderleftRboxitem}px;
        border-top-left-radius: ${borderRightRboxitem}px;
    }`

    document.head.appendChild(style);
    // Ye psudo selector styling le liye alag code likhna pada
    let styleSheet = style.sheet;
    styleSheet.insertRule(psudoselector, styleSheet.psudoselectors);

    // show css code
    let cssCode = `#create-Card{
            background-color: ${backgroundColor};
            min-height: ${height}px;
            max-width: ${width}px;
            border-radius: ${borderRadius}px;
            display: ${display};
            flex-direction: ${flexdirectioncolumn};
            align-items: ${alignItemsCenter};
            padding: ${padding}px;
            box-shadow: 1px -1px 12px -6px;
            position:relative;
    }
            
            .Title{
                color: ${TitleFontColor};
                padding: ${titlepadding}px;
            }
            .paraGraph{
                color: ${paraColor};
                text-align: center;
                padding: 0px 12px 1px 12px;
            }
            #image{
                height: ${heiightima}px;
                width: ${widthima}px;
                object-fit: ${objecttfitcover};
                border-radius: ${borderRadiusimage}%;
                border: ${photoBorderRadius}px solid ${photoBorderRadiusColor};
                position: relative;
            }
          
            .imagebor{
                border: ${imageback2Border2}px solid ${imageback2Bordercolor2};
                height: 108px;
                border-radius: 50%;
                position: relative;
                margin-top: 35px;
            }
            #Viewbtn {
                color: ${btnColorboxItem};
                background-color: ${btnBgColorboxItem};
                padding: ${btnPaddingboxItem}px;
                font-size: ${btnFontSizeboxItem}px;
                width: ${btnWidthboxItem}px;
                border-radius:${btnborderRadiusItem}px;
                border: none;
                margin-bottom: 20px;
                margin-top: 20px;
                cursor:pointer;
            }
            #Viewbtn:hover{
                color: ${btnHoverColorItem};
                background-color: ${btnHoverBgColorItem};
                transition: 0.3s;
            }
    
            #create-Card.ContainerCard::before {
                content: "";
                background-color: ${containerPsudoBgItem};
                height: ${psudoBgHeightItem}px;
                width: ${psudoBgWeightItem}%;
                border-top-right-radius: ${borderleftRboxitem}px;
                border-top-left-radius: ${borderRightRboxitem}px;
                position:absolute;
            }`

    let cssCodeElement = document.getElementById('YourCssCode');
    cssCodeElement.textContent = cssCode;

    // html code
    let showhtml = `<div id="create-Card" class="ContainerCard">${GenCard ? GenCard : ''}
    <div class="imagebor">
    <img src="profilePhoto.jpg" alt="Profile Photo" id="image">
    </div>
    <h2 class="Title">${heading}</h2>
    <p class="paraGraph">${paraGraph}</p>
    <button id="Viewbtn">${btnNameboxlast ? btnNameboxlast : 'View Profile'}</button>
    </div>`
    let htmlcode = document.getElementById('YourHtmlCode')
    htmlcode.textContent = showhtml;
}
generateCard()
// function copyCode() {
//     let copiedsucc = document.getElementById('copiedsucc')
//     let copied = cssCode;
//     copiedsucc.addEventListener('click', () => {
//         copied.select();
//         document.execCommand('copy');
//     })
// } 

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
        Htmlcopiedsucced.textContent = 'Copy HTML Code';
    }, 3000);
});
let copyCodeButton = document.getElementById('copiedsucc');
copyCodeButton.addEventListener('click', function () {
    copyCodeButton.textContent = 'Copied ✓';

    setTimeout(function () {
        copyCodeButton.textContent = 'Copy CSS Code';
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