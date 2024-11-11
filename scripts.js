function showContent(language, event = null) {
    if (language === 'portuguese') {
        document.getElementById('portuguese').style.display = 'block';
        document.getElementById('english').style.display = 'none';
        document.title = "Caderno de Poemas de uma Garota Apaixonada"; // Change to the Portuguese title
    } else if (language === 'english') {
        document.getElementById('portuguese').style.display = 'none';
        document.getElementById('english').style.display = 'block';
        document.title = "Poetry Notebook of a Girl in Love"; // Change to the English title
    }
    document.querySelectorAll('.content').forEach(function (content) {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(function (tab) {
        tab.classList.remove('active');
    });
    document.getElementById(language).classList.add('active');
        // Check if event is provided to avoid error
        if (event) {
            event.target.classList.add('active');
        }
}
// Show Portuguese content on load
window.onload = function () {
    showContent('portuguese', null);
    document.querySelector('.tab').classList.add('active');
};