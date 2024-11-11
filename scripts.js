function showContent(language) {
    if (language === 'portuguese') {
      document.title = "Caderno de Poemas de uma Garota Apaixonada"; // Change to the Portuguese title
    } else if (language === 'english') {
      document.title = "Poetry Notebook of a Girl in Love"; // Change to the English title
    }
    document.querySelectorAll('.content').forEach(function(content) {
        content.classList.remove('active');
      });
    document.querySelectorAll('.tab').forEach(function(tab) {
          tab.classList.remove('active');
      });
    document.getElementById(language).classList.add('active');
      this.classList.add('active');
  }
  		// Show Portuguese content on load
          window.onload = function() {
            showContent('portuguese');
            document.querySelector('.tab').classList.add('active');
        };