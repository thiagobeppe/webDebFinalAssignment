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

function initiate() {
    var styleNow = document.getElementById("contrast");
    var bname = baseName(styleNow.href)

    if (bname.includes("contrast")) {
        bname = bname.split('_')[0]
        swapStyleSheet(`assets/css/${bname}.css`);
    } else {      
        swapStyleSheet(`assets/css/${bname}_contrast.css`);        
    }
    
    var styleNow = document.getElementById("contrast");
    
    window.localStorage.stylesheet = styleNow;
}
