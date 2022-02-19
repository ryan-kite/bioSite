let stateOpen = false
function toggleNav() {

  if (stateOpen == true) {
    console.log("open")
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    document.getElementById("side-bar").style.marginLeft = "0";
    document.getElementById("main").style.marginLeft = "225px";
    document.getElementById("masthead").style.marginLeft = "225px";
    stateOpen = false

  } 
  else {
    console.log("close")
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    document.getElementById("side-bar").style.marginLeft = "-185px";
    document.getElementById("main").style.marginLeft = "30px";
    document.getElementById("masthead").style.marginLeft = "40px";
    stateOpen = true
  }
    
  
}

  console.log("loaded cd.js")