function swapStyleSheet(sheet) {
    console.log("CALLED SWAPSTYLE")
    document.getElementById("contrast").setAttribute("href", sheet); 
    
}

function initiate() {
    console.log("CALLED INITIATE")
    var styleNow = document.getElementById("contrast");
    var button = document.getElementById("changeCSS");

    console.log(styleNow.href);
    console.log(button)
    if (!styleNow.href.includes("contrast")) {
        // if (styleNow.href == "file:///home/romulofff/Documents/ufc/s9/webdev/webDevFinalAssignment/front-end/views/assets/css/dashboard.css") {
        console.log("I ENTERED")
        swapStyleSheet("assets/css/dashboard_contrast.css");
    } else {
        console.log("LETS DO IT")
        swapStyleSheet("assets/css/dashboard.css");
        
    }
    
    var styleNow = document.getElementById("contrast");
    
    window.localStorage.stylesheet = styleNow;
}
