var modal = document.getElementsByClassName("modal-container")[0];
var modalInner = document.getElementsByClassName('modal')[0];

function toggleModal(){
    modal.classList.toggle('modal-hide');
    modalInner.classList.toggle('modal-scale')
}