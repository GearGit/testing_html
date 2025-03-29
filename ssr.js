(function() {
    // Helper function to create and append meta tags
    function addMetaTag(attrName, attrValue, content) {
      var meta = document.createElement('meta');
      meta.setAttribute(attrName, attrValue);
      if(content) {
        meta.setAttribute('content', content);
      }
      document.head.appendChild(meta);
    }
  
    // HTML Meta Tags
    document.title = "Fastform - The best alternative to Google Forms and Typeform";
    addMetaTag("name", "description", "Fastform is the best alternative to Google Forms and Typeform. Auto-optimized for speed and delight.");
  
    // Facebook Meta Tags
    addMetaTag("property", "og:url", "https://fastform.in");
    addMetaTag("property", "og:type", "website");
    addMetaTag("property", "og:title", "Fastform - The best alternative to Google Forms and Typeform");
    addMetaTag("property", "og:description", "Fastform is the best alternative to Google Forms and Typeform. Auto-optimized for speed and delight.");
    addMetaTag("property", "og:image", "https://fastform.in/og-image.png");
  
    // Twitter Meta Tags
    addMetaTag("name", "twitter:card", "summary_large_image");
    addMetaTag("property", "twitter:domain", "fastform.in");
    addMetaTag("property", "twitter:url", "https://fastform.in");
    addMetaTag("name", "twitter:title", "Fastform - The best alternative to Google Forms and Typeform");
    addMetaTag("name", "twitter:description", "Fastform is the best alternative to Google Forms and Typeform. Auto-optimized for speed and delight.");
    addMetaTag("name", "twitter:image", "https://fastform.in/og-image.png");
  })();
  