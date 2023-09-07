const navItems = document.querySelectorAll('.notclicked');
function setActiveItembtn(event){
    navItems.forEach(item => item.classList.remove('clicked'));
    event.target.classList.add('clicked');
}

navItems.forEach(item => item.addEventListener('click', setActiveItembtn));


const selectionNav = document.querySelectorAll('.inactive');
function setActiveItem(event){
    selectionNav.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}

selectionNav.forEach(item => item.addEventListener('click', setActiveItem));


const selectAdven = document.querySelectorAll('.noAdven');
function setActiveAdven(event){
    selectAdven.forEach(item => item.classList.remove('selectAdven'));
    event.target.classList.add('selectAdven');
}

selectAdven.forEach(item => item.addEventListener('click', setActiveAdven));