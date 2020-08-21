// function search_bar() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('about');

//     for (var i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";
//         }
//     }
// }
// function wait(ms) {
//   var start = new Date().getTime();
//   var end = start;
//   while (end < start + ms) {
//     end = new Date().getTime();
//   }
// }

// function checkInput(e) {
//   var query = document.getElementById("search").value;
//   window.find(query);
//   e.stopPropagation();
// }

// var sel = window.getSelection();
// sel.collapse(document.body, 0);
// document.body.offsetHeight;
var query = document.getElementById("search").value;
// if (window.find(query, true)) {
//   sel.collapseToEnd();
// }
var sel = window.getSelection();
sel.collapse(document.body, 0);
document.body.offsetHeight;
if (window.find(query, true)) {
  document.execCommand("hiliteColor", false, "FirstColor");
  while (window.find(query, true)) {
    document.execCommand("hiliteColor", false, "SecondColor");
  }
}
