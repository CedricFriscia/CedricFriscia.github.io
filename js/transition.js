const titleWho = document.querySelector('.title-who');
const titleI = document.querySelector('.title-i');
const titleAm = document.querySelector('.title-am');

setTimeout(function() {
    titleWho.style.display = "none";
}, 1100);

setTimeout(function() {
    titleI.classList.remove('hidden')
}, 1100);


setTimeout(function() {
    titleI.classList.add('hidden')
}, 2400);

setTimeout(function() {
    titleAm.classList.remove('hidden')
}, 2400);


