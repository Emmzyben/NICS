
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




  document.addEventListener('DOMContentLoaded', function () {
    var secondDiv = document.getElementById('secondDiv');

    // Listen for scroll events
    window.addEventListener('scroll', function () {
        // Check if the user has scrolled down a certain amount (adjust as needed)
        if (window.scrollY > 250) {
            // Slide down the sticky div by changing the 'top' property
            secondDiv.style.top = '0';
        } else {
            // Move the sticky div back above the viewport when scrolling up
            secondDiv.style.top = '-100px';
        }
    });
});


const imageUrls = [
  'images/Rectangle 2.png',
  'images/pic1.jpg',
  'images/pic.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic5.jpg',
 'images/inspection-services.png',




];

let currentIndex = 0;

function updateImage() {
  const rotatingImage = document.getElementById('rotating-image');
  rotatingImage.src = imageUrls[currentIndex];
}

function goToPrevious() {
  currentIndex = currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
  updateImage();
}

function goToNext() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  updateImage();
}

// Automatically rotate images every 3 seconds
setInterval(goToNext, 6000);

// Initial image update
updateImage();