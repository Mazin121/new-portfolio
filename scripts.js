// JavaScript for handling the modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('fullscreen-modal');
    const fullscreenImg = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const close = document.getElementById('close');

    // Add click event to all "View" buttons
    document.querySelectorAll('.view-button').forEach(button => {
        button.onclick = function() {
            const imageSrc = button.getAttribute('data-image');
            const captionText = button.getAttribute('data-caption');
            modal.style.display = 'flex';
            fullscreenImg.src = imageSrc;
            fullscreenCaption.textContent = captionText;
        };
    });

    // Close modal when clicking on the close button
    close.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of the image
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
