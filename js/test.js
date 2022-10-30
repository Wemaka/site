$(function() {
  var swords = ['Likes', 'Comments', 'Views'];
  for (let index = 0; index < 3; index++) {
    var toremove = $(`.post-info-active-info span:contains(${swords[index]})`);
    console.log(swords[index])
    toremove.remove();
  }
});