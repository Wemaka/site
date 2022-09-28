// var elem = document.querySelector('.grid');
// var iso = new Isotope( elem, {
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });

// // element argument can be a selector string
// //   for an individual element
// var iso = new Isotope( '.grid', {
//   // options
// });

// with Masonry & jQuery
// init Masonry
let $grid = $('.image-grid').masonry({
    // Masonry options...
    itemSelector: 'image-grid__item',
  });
  
  // get Masonry instance
  let msnry = $grid.data('masonry');
  
  // init Infinite Scroll
  $grid.infiniteScroll({
    // Infinite Scroll options...
    append: 'image-grid__item',
    outlayer: msnry,
  });
