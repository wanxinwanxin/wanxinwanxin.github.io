// Theme toggle: explicit choice is stored; otherwise the site follows the
// system preference via CSS (prefers-color-scheme).
function toggleTheme() {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme');
    if (!current) {
        current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
        localStorage.setItem('theme', next);
    } catch (e) {}
}
