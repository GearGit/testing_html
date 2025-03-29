// Immediately invoked function to run before the rest of the DOM is fully parsed.
(function() {
    // Create a custom meta tag
    var metaCustom = document.createElement('meta');
    metaCustom.setAttribute('name', 'custom-meta');
    metaCustom.setAttribute('content', 'This is a custom meta tag for SSR simulation.');
    
    // Append the custom meta tag to the document head
    document.head.appendChild(metaCustom);
  })();
  