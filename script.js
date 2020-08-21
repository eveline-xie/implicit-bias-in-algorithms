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

function checkInput() {
  var query = document.getElementById("search").value;
  return window.find(query)
}
