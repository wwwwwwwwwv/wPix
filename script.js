const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const span = document.getElementsByClassName('close')[0];
const downloadLink = document.getElementById('download-link');

// Sample image data
const images = [
    '/foto/lera.jpg',
    'https://i.pinimg.com/236x/18/7a/c0/187ac03098ab622654e40dfe960f54ff.jpg',
    'https://i.pinimg.com/236x/35/4d/d7/354dd740dcc98696224b0a0ecb714617.jpg',
    '/foto/lerra.jpg',
    'https://i.pinimg.com/236x/27/d7/71/27d7711e6a88a4572b812a9596bc7f1d.jpg',
    'https://i.pinimg.com/originals/ed/f3/0b/edf30b7ad0f9a592e0385ab238da0f9d.gif',
    'https://i.pinimg.com/236x/3c/a0/1a/3ca01a6e3c12edbdd14861d96ba7a5f4.jpg',
];

function displayImages(images) {
    gallery.innerHTML = ''; // Clear the gallery

    images.forEach(image => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageContainer.innerHTML = `
            <img src="${image}" alt="Image">
            <div class="image-overlay">
            </div>
        `;

        // Add click event to open modal
        imageContainer.addEventListener('click', () => {
            modalImg.src = image;
            modal.style.display = 'block';
            downloadLink.setAttribute('href', image);
            downloadLink.setAttribute('download', 'image.jpg');
        });

        gallery.appendChild(imageContainer);
    });
}

// Close modal when clicking on <span> (x)
span.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

displayImages(images);