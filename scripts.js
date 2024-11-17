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

  function loadNavigation(leftLink, rightLink) {
    fetch('navigationbar.html')
      .then(response => response.text())
      .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html); // Insert at the top of the body
        document.getElementById('leftArrow').href = leftLink;
        document.getElementById('rightArrow').href = rightLink;
      });
  }

  // Call this function with the desired URLs
  window.onload = function() {
    loadNavigation('toc.html', 'camaleoa.htm');
  };
 // Function to get the value of a query parameter from the URL
 function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLParams:" + urlParams)
    console.log(urlParams.get('poem'))

    return urlParams.get(param);
  }

  // Load content based on the provided parameter
  function loadContent(param) {
    if (!param) return;

    const ptContentFile = param + '_pt.txt';
    const engContentFile = param + '_en.txt';

    // Load the content for Portuguese
    fetch(ptContentFile)
      .then(response => response.text())
      .then(data => {
        document.getElementById('pt-content').innerText = data;
      })
      .catch(err => {
        document.getElementById('pt-content').innerText = 'Error loading content.';
      });

    // Load the content for English
    fetch(engContentFile)
      .then(response => response.text())
      .then(data => {
        document.getElementById('eng-content').innerText = data;
      })
      .catch(err => {
        document.getElementById('eng-content').innerText = 'Error loading content.';
      });
  }

// Show Portuguese content on load
window.onload = function () {
    // showContent('portuguese', null);
    // document.querySelector('.tab').classList.add('active');
};