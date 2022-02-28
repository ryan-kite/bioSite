let stateOpen = true;
document.getElementById("mobile-menu").style.display = "none";


function toggleNav() {  

  try {
    stateOpen =  window.localStorage.getItem("state")
    console.log("state (read) from storage: ", stateOpen)
    
  } catch (error) {
    console.log("state (read) from storage: ", error)
    stateOpen = true;
  }


  if (stateOpen === true || stateOpen === 'true')  {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    document.getElementById("side-bar").style.marginLeft = "0";
    document.getElementById("main").style.marginLeft = "225px";
    document.getElementById("masthead").style.marginLeft = "225px";
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
    stateOpen = false;
    window.localStorage.setItem("state", stateOpen)
    console.log("state if (set) ", stateOpen)
  } 
  else {
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    document.getElementById("side-bar").style.marginLeft = "-185px";
    document.getElementById("main").style.marginLeft = "40px";
    document.getElementById("masthead").style.marginLeft = "40px";    
    document.getElementById("mobile-menu").style.display = "block";
    document.getElementById("main-menu").style.display = "none";
    stateOpen = true;
    window.localStorage.setItem("state", stateOpen)
    console.log("state else (set) ", stateOpen)
  }
}

function signUp() {
  let emailVal = document.getElementById("userEmail")

  if (emailVal && emailVal.value) {
    alert(`Got it! Check your inbox at [${emailVal.value}] for further instructions`)
  }
  else {
    alert(`Whoa! Try entering your email first eager-beaver`)
  }
  
}


console.log("loaded cd.js")