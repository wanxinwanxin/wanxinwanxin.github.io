// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Initialize Dark Mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this data to a server
    // For now, we'll just log it
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

// Citation Handler
function copyBibtex(paper) {
    const bibtexEntries = {
        'unichain': `@article{adams2024unichain,
            title={Unichain: A Unified Framework for Decentralized Exchange},
            author={Adams, Hayden and Toda, Mark and others},
            year={2024}
        }`,
        // Add more papers as needed
    };
    
    const bibtex = bibtexEntries[paper];
    if (bibtex) {
        navigator.clipboard.writeText(bibtex);
        alert('Citation copied to clipboard!');
    }
}

// Share Handlers
function shareOnTwitter(title, url) {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnLinkedIn(url) {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // Replace with your Google Analytics ID 