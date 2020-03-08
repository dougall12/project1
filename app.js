let tab = document.querySelectorAll('.vertical-title');
const list = document.querySelector('.tab-container');
let start = document.getElementById('list').firstElementChild;
let tabs = document.getElementById('list').childNodes;

//Tab Event
list.addEventListener('click', e => {
  let tabSelected = e.target;
  list.insertBefore(tabSelected, list.childNodes[0]);

  for (i = 0; i < tab.length; i++) {
    if (tab[i].classList.contains('active') == true) {
      tab[i].classList.toggle('active');
    }
  }
  e.target.classList.toggle('active');
});
