(function ($) {
    "use strict";

   
 // Testimonials carousel
 $(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});


 // Service carousel
 $(".service-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  margin: 25,
  dots: true,
  loop: true,
  nav : false,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:1
      },
      992:{
          items:1
      },
      1200:{
          items:1
      }
  }
});


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
   
})(jQuery);





document.getElementById('themeSwitch').addEventListener('change', function (e) {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Load Theme Preference on Page Load
  window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('themeSwitch').checked = true;
    }
  });



  
  function show(elementID, button) {
    var ele = document.getElementById(elementID);
    if (!ele) {
      alert("No Such Page Found.");
      return;
    }
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
    ele.style.display = 'flex';
    
    // Hide the parent column
    button.closest('.col-lg-12').style.display = 'none';
  }


//   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/674957144304e3196aea36f1/1idr7ob0f';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();


function toggleTheme() {
  const icon = document.getElementById('themeIcon');
  const isChecked = document.getElementById('themeSwitch').checked;
  
  if (isChecked) {
    document.body.classList.add('dark-mode'); // Apply your dark mode class
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    document.body.classList.remove('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();   
  }, 2000); // 2000ms = 2 seconds
});


// Services DropDown in Services Form
document.addEventListener("DOMContentLoaded", function () {
  const modalElement = document.getElementById("exampleModal");
  const form = modalElement.querySelector("form");
  const selectService = document.getElementById("selectServiceDiv");
  const otherServiceDiv = document.getElementById("otherServiceDiv");
  const otherServiceInput = document.getElementById("otherService");

  // Reset form every time the modal opens
  modalElement.addEventListener('show.bs.modal', function () {
    form.reset();
    otherServiceDiv.style.display = "none";
    otherServiceInput.disabled = true;
    otherServiceInput.value = "";
  });

  // Handle "Other" service selection
  selectService.addEventListener("change", function () {
    if (this.value === "other") {
      otherServiceDiv.style.display = "block";
      otherServiceInput.disabled = false;
    } else {
      otherServiceDiv.style.display = "none";
      otherServiceInput.disabled = true;
      otherServiceInput.value = "";
    }
  });
});

