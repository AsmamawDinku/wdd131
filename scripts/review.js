document.addEventListener('DOMContentLoaded', () => {
    // Get or initialize review counter
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display count
    document.getElementById('reviewCount').textContent = reviewCount;
    
    // Footer year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});