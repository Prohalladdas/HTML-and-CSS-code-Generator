let Firstfooter = document.getElementById('Firstfooter')
Firstfooter.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('showHtmlContainer')
    let showHtml = ` 
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <footer>
  <div class="footer-container">
      <div class="footer-content1">
          <div class="footer-item">
              <a href="#"><h3>Content 1</h3></a>
              <div class="text">
                  <a href=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam corrupti quam magni impedit odit vitae optio culpa nesciunt saepe. Beatae nobis expedita delectus dolore voluptatem, sint deserunt! Deserunt, ipsa!</p></a>
              </div>
          </div>
          <div class="footer-item">
              <a href="#"><h3>Content 2</h3></a>
              <div class="text">
                  <a href="#">Link 1 Lorem ipsum dlo</a>
                  <a href="#">Link 2 Lorem ipsum dolo</a>
                  <a href="#">Link 3 Lorem ipsm dolo</a>
                  <a href="#">Link 4 Lorem im dolo</a>
              </div>
          </div>
          <div class="footer-item">
              <a href="#"><h3>Content 3</h3></a>
              <div class="text">
                  <a href="#">Link 1 Lorem ipsum </a>
                  <a href="#">Link 2 Lorem ipsum dolt</a>
                  <a href="#">Link 3 Lorem ipsum d</a>
                  <a href="#">Link 4 Lorem ipsu</a>
              </div>
          </div>
          <div class="footer-item">
              <a href="#"><h3>Content 4</h3></a>
              <div class="text">
                  <a href="#">Link 1 ipsum dolor sit</a>
                  <a href="#">Link 2 ipsum dolor sit </a>
                  <a href="#">Link 3 ipsum dolor sit</a>
                  <a href="#">Link 4 ipsum dolor sit </a>
              </div>
          </div>
      </div>
      <div class="footer-contentLogo2">
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-instagram' ></i></a>
          <a href="#"><i class='bx bxl-youtube' ></i></a>
          <a href="#"><i class='bx bxl-linkedin' ></i></a>
          <a href="#"><i class='bx bxl-github' ></i></a>
      </div>
  </div>
  <div class="Lastfooter">© 2024 Copyright : ABCD.com</div>
 </footer>`;

    showHtmlContainer.innerText = showHtml;

    let showCssContainer = document.getElementById('showCssContainer')
    let showCss = `@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
 footer{
     top: 100px;
     position: relative;
 }
 .footer-container{
     width: 100%;
     height: 340px;
     background-color: #291c46;
 }
 .footer-content1{
     display: flex;
     justify-content: space-evenly;
 }
 .footer-item{
    width: 270px;
    display: flex;
    flex-direction: column;
    padding: 14px 0px 0px 0px;
    height: 265px;
    /* border: 2px solid red; */
}
.footer-item a{
    color: #ffffff;
    text-decoration: none;
}
.footer-item a p{
   line-height: 1.3rem;
   margin-top: 0px;
}
.footer-item a h3{
    text-transform: uppercase;

}
.text{
    /* margin-top: 12px; */
    display: flex;
    flex-direction: column;
}
.text a{
    margin-top: 20px;
}
.footer-contentLogo2{
    width: 100%;
    display: flex;
    justify-content: center;
}
.footer-contentLogo2 a{
   margin: 18px;
   font-size: 21px;
   color: #ffffff;
   
}
.Lastfooter{
    color: #ffffff;
    background-color: #161616;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
}`
    showCssContainer.innerText = showCss;

})
// Blur or blur hatane ke liya
function popup() {
    let bgBlur = document.querySelector('.all')
    bgBlur.classList.toggle('active')
    let CodeContainer = document.querySelector('.code')
    CodeContainer.classList.toggle('AfterClick')

    let clsbody = document.querySelector('.closeBody')
    clsbody.classList.toggle('clsBodyClick')
}
// Code copy karne ke liya
function CopyHtmlCode() {
    let showHtmlContainer = document.getElementById('showHtmlContainer');
    let range = document.createRange();
    range.selectNode(showHtmlContainer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
function CopyCssCode() {
    let showCssContainer = document.getElementById('showCssContainer');
    let range = document.createRange();
    range.selectNode(showCssContainer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
//Html code copy button  after click

let CopyCodeHtmlBtn = document.getElementById('CopyCodeHtmlBtn');
CopyCodeHtmlBtn.addEventListener('click', function () {
    CopyCodeHtmlBtn.textContent = 'Copied ✓';

    setTimeout(function () {
        CopyCodeHtmlBtn.textContent = 'Copy Code 📋';
    }, 3000);
});
let CopyCodeBtnCss = document.getElementById('CopyCodeBtnCss');
CopyCodeBtnCss.addEventListener('click', function () {
    CopyCodeBtnCss.textContent = 'Copied ✓';

    setTimeout(function () {
        CopyCodeBtnCss.textContent = 'Copy Code 📋';
    }, 3000);
});


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let Secondfooter = document.getElementById('Secondfooter')
Secondfooter.addEventListener('click', function () {
    let showHtmlContainer = document.getElementById('showHtmlContainer')
    let showHtml = ` 
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <footer>
  <div class="footer-container">
      <div class="footer-content1">
          <div class="footer-item">
              <a href="#">
                  <h3>Content Heading</h3>
              </a>
              <div class="text">
                  <a href="">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam corrupti quam
                          magni impedit odit vitae optio culpa nesciunt saepe. Beatae nobis expedita delectus
                          dolore voluptatem, sint deserunt! Deserunt, ipsa! Uzumaki</p>
                  </a>
              </div>
          </div>
      </div>
      <div class="footer-contentLogo2" >
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-instagram'></i></a>
          <a href="#"><i class='bx bxl-youtube'></i></a>
          <a href="#"><i class='bx bxl-linkedin'></i></a>
          <a href="#"><i class='bx bxl-github'></i></a>
      </div>
  </div>
  <div class="Lastfooter">
      <div style="font-size: 12px; margin-left: 12px;">
          © Copyright 2030 || <a href="#" class="FoUzuMaki">Uzumaki</a>
      </div>
      <div class="EndFooter" style="margin-right: 8px;">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
      </div>
  </div>
</footer>`;

    showHtmlContainer.innerText = showHtml;

    let showCssContainer = document.getElementById('showCssContainer')
    let showCss = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .footer-container {
        height: 250px;
        width: 100%;
        background-color: #1e1f21;
    }

    .footer-content1 {
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .footer-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 48%;
        margin-top: 20px;
    }

    .footer-item a {
        text-decoration: none;
        color: #ffffff;
    }

    .footer-item a h3 {
        font-size: 34px;
    }

    .text {
        text-align: center;
        line-height: 1.6rem;
        margin-top: 20px;
    }

    .text a {
        text-decoration: none;
        color: #ffffff;

    }

    .footer-contentLogo2 {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 30px;
        align-items: center;
        margin-top: 30px;

    }

    .footer-contentLogo2 a i {
        color: #dedede;
        font-size: 19px;
        padding: 12px;

    }
    .footer-contentLogo2 a i:hover {
        color: #c9c9c9;

    }

    .Lastfooter {
        display: flex;
        width: 100%;
        height: 24px;
        align-items: center;
        background-color: #000000;
        justify-content: space-between;
        color: #ffffff;
    }

    .EndFooter a{
        text-decoration: none;
        color: #ffffff;
        padding: 10px;
        font-size: 14px;
    }
    .EndFooter a:hover{
        color: #e4e4e4;
    }
    .FoUzuMaki {
        text-decoration: none;
        color: #ffff;
    }

    .FoUzuMaki:hover {
        text-decoration: underline;
    }`
    showCssContainer.innerText = showCss;
})




