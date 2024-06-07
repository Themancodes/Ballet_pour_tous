const menuItems = document.getElementById('menuItems');
const content = document.getElementById('content');

function toggleMenu() {
    if (menuItems.style.display === 'flex') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'flex';
    }
}

function showPage(pageNumber) {
    const pageContent = `
        <div class="page">
            <video autoplay muted loop>
                <source src="videos/video${pageNumber}.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="page-text">
                <h1>Page ${pageNumber}</h1>
                <p>This is the content for page ${pageNumber}.</p>
            </div>
        </div>
    `;
    content.innerHTML = pageContent;
    toggleMenu(); // Hide the menu after selecting a page
}

// Initialize with the first page
showPage(1);
