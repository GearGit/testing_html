(function() {
    // Function to merge meta tags and title from the template into the current document
    function mergeHeadContent(templateHtml) {
      // Create a temporary container to parse the fetched HTML
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = templateHtml;
      
      // Assume the fetched template contains a complete <head>
      var templateHead = tempDiv.querySelector('head');
      if (templateHead) {
        // Grab meta tags and title
        var elements = templateHead.querySelectorAll('meta, title');
        elements.forEach(function(el) {
          // Clone and append to the current document head
          document.head.appendChild(el.cloneNode(true));
        });
      }
    }
    
    // Fetch the secondary template HTML from the server
    fetch('/template.html')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(function(templateHtml) {
        mergeHeadContent(templateHtml);
      })
      .catch(function(error) {
        console.error("Error fetching template.html:", error);
      });
  })();
  