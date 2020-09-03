function changeFontSize(value) {
    txt = document.body;
    css_font_size = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    font_size = parseFloat(css_font_size);
    newSize = (font_size + value) + 'px';
    txt.style.fontSize = (font_size + value) + 'px';
    localStorage.setItem('font-size', newSize)
}

function swapStyleSheet(sheet) {
    document.getElementById("contrast").setAttribute("href", sheet); 
}

function baseName(str)
{
    var base = new String(str).substring(str.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1)       
        base = base.substring(0, base.lastIndexOf("."));
        
    return base;
}

window.onload = initTheme()
function initTheme() {
    if (!localStorage.getItem('stylesheet')) {
        console.log("First access!")
    }
    else {
        var theme = localStorage.getItem('stylesheet')
        swapStyleSheet(`/assets/css/${theme}.css`)
    }
}

function initiate() {
    var styleNow = document.getElementById("contrast");
    var bname = baseName(styleNow.href)
        
    if (bname.includes("contrast")) {
        console.log(bname)
        bname = bname.split('_')[0]
        var prefered = `${bname}`
        console.log(bname)
        swapStyleSheet(`/assets/css/${bname}.css`);
    } else {      
        var prefered = `${bname}_contrast`
        swapStyleSheet(`/assets/css/${bname}_contrast.css`);        
    }
    
    var styleNow = document.getElementById("contrast");
    localStorage.setItem('stylesheet', prefered);
}
