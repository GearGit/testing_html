(function() {
    // Build a string containing all meta tags and the document title.
    var metaTags = `
      <!-- HTML Meta Tags -->
      <title>Fastform - The best alternative to Google Forms and Typeform</title>
      <meta name="description" content="Fastform is the best alternative to Google Forms and Typeform. Auto-optimized for speed and delight.">
    
      <!-- Facebook Meta Tags -->
      <meta property="og:url" content="https://fastform.in">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Fastform - The best alternative to Google Forms and Typeform">
      <meta property="og:description" content="Fastform is the best alternative to Google Forms and Typeform. Auto-optimized for speed and delight.">
      <meta property="og:image" content="https://fastform.in/og-image.png">
    
      <!-- Twitter Meta Tags -->
      <meta name="twitter:card" content="summary_large_image">
      <meta property="twitter:domain" content="fastform.in">
      <meta property="twitter:url" content="https://fastform.in">
      <meta name="twitter:title" content="Fastform - The best alternative to Google Forms and Typeform">
      <meta name="twitter:description" content="Fastform is the best alternative to Google Forms and Typeform. Auto-optimized for speed and delight.">
      <meta name="twitter:image" content="https://fastform.in/og-image.png">
    `;
  
    // Build the body content
    var bodyContent = `
      <div id="content">
        <h1>Welcome to Fastform</h1>
        <p>This page dynamically injects meta tags and builds the complete HTML before the first render.</p>
      </div>
    `;
  
    // Write the complete document to the browser.
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          ${metaTags}
        </head>
        <body>
          ${bodyContent}
        </body>
      </html>
    `);
    document.close();
  })();
  