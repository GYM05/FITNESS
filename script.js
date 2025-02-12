// Funksioni për hapjen e modalit
function openModal(src) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = src;
}

// Funksioni për mbylljen e modalit
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Mbyll modalin kur klikohet jashtë fotos
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};