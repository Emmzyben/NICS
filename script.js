
function myFunction(x) {
    x.classList.toggle("change");
  }

  var open = false;

function openNav() {
    var sideNav = document.getElementById("mySidenav");
    
    if (sideNav.style.width === "0px" || sideNav.style.width === "") {
        sideNav.style.width = "250px";
        open = true;
    } else {
        sideNav.style.width = "0";
        open = false;
    }
}

  
function toggleHeight3() {
    var writeUpsDiv = document.getElementById('droping');
    var currentHeight = writeUpsDiv.offsetHeight;
  
    if (currentHeight === 0 ) {
      writeUpsDiv.style.height = 'auto'; 
     document.getElementById("inner").innerText="-";
    } else {
      writeUpsDiv.style.height = '0px'; 
      document.getElementById("inner").innerText="+";
    }
  }

  function toggleHeight4() {
    var writeUpsDiv = document.getElementById('droping1');
    var currentHeight = writeUpsDiv.offsetHeight;
  
    if (currentHeight === 0 ) {
      writeUpsDiv.style.height = 'auto'; 
     document.getElementById("inner").innerText="-";
    } else {
      writeUpsDiv.style.height = '0px'; 
      document.getElementById("inner").innerText="+";
    }
  }
