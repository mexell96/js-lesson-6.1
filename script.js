/**
 * 1. Написать код, чтобы при нажатии на li его текст становился жирным, 
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */


const header = document.getElementById('header');
header.addEventListener('click', function (ev) {
   if (ev.target.nodeName === "LI") {
   ev.target.classList.add('beader');
   }
});


const veader = document.getElementById('veader');
veader.addEventListener('click', function (ev) {
   if (ev.target.nodeName !== "LI") {
   ev.target.classList.remove('beader');
   }
});
 



/**
 * 2. Написать код, чтобы при нажатии на li 
 *  2.1 его текст становился жирным 
 *  2.2 его текст (!) выводился в alert 
    
    при нажатии вне ul выделение слетает (на пустом месте страницы)
 */