document.addEventListener("DOMContentLoaded", function() {
    // Function to load a component into a placeholder
    function loadComponent(componentPath, placeholderId) {
      fetch(componentPath)
        .then(response => response.text())
        .then(data => {
          document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading the component: ${componentPath}`, error));
    }
  
    // Load each component
    loadComponent('components/header.html', 'header-placeholder');
    loadComponent('components/side-panel.html', 'side-panel-placeholder');
    loadComponent('components/footer.html', 'footer-placeholder');
  }); 
  