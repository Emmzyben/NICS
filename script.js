
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


  const imageContainer = document.getElementById('imageContainer');

  function slideImages() {
    // Calculate the width of a single image (assuming all images have the same width)
    const imageWidth = document.querySelector('.sliderImage').offsetWidth;

    // Move the image container to the left by the width of one image
    imageContainer.style.transform = `translateX(-${imageWidth}px)`;

    // After a delay, move the first image to the end of the container
    setTimeout(() => {
      const firstImage = document.querySelector('.sliderImage');
      imageContainer.appendChild(firstImage.cloneNode(true));
      firstImage.remove();
      imageContainer.style.transform = 'translateX(0)';
    }, 500); // Adjust the delay based on the transition duration
  }

  // Call the slideImages function at regular intervals to create a sliding effect
  setInterval(slideImages, 3000); 
