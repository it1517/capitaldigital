// Buttons functions
let profileBtn = document.querySelector('#profileBtn');
let carritpBtn = document.querySelector('#carritoBtn');

profileBtn.onclick = function() {
  let profileDiv = document.querySelector('#profileDiv');
  showHide(profileDiv);
}

carritoBtn.onclick = function() {
  let carritoDiv = document.querySelector('#carritoDiv');
  showHide(carritoDiv);
}


function showHide(element) {
  if(element.classList.contains('hidden')){
    element.classList.remove('hidden');

  } else {
    element.classList.add('hidden');
  }
}


// Show Hide sidebar
let sidebarBtn = document.querySelector('#sidebarBtn');
sidebarBtn.onclick = function() {

  let sidebar = document.querySelector('aside');
  let sidebarMobile = document.querySelector('#sidebarMobile');

  if(sidebar.classList.contains('sm:block')) {
    sidebar.classList.replace('sm:block', 'sm:hidden');

  } else {
    sidebar.classList.replace('sm:hidden', 'sm:block');
  }

  if(sidebarMobile.classList.contains('hidden')) {
    sidebarMobile.classList.remove('hidden');

  } else {
    sidebarMobile.classList.add('hidden');
  }
}



// Change sidebar color
function setColor(color) {
  let sidebar = document.querySelector('aside');
  let sidebarMobile = document.querySelector('#sidebarMobile');

  localStorage.setItem('color', color);
  sidebar.className = color + ' relative w-72 md:w-64 hidden sm:block shadow-xl';
  sidebarMobile.className = color + ' w-full py-5 px-6 hidden sm:hidden';
}

if(localStorage.getItem('color') === 'null'){
  var colorStg = 'bg-gray-900';

} else {
  var colorStg = localStorage.getItem('color');
}

setColor(colorStg);


// ----------

//SUBMENU SIDEBAR

$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
    } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
    }
});
$("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
});
