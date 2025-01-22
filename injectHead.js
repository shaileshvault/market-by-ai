document.addEventListener("DOMContentLoaded", function() {
    // Function to get the title from the data-title attribute and update the page title
    function setHeadContent() {
        // Get the title from the data-title attribute in the <body> tag
        const pageTitle = document.body.getAttribute('data-title');

        // Set the page title dynamically
        if (pageTitle) {
            document.title = pageTitle;

            // Setting other meta tags dynamically
            const headContent = `
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${pageTitle}</title>
                <link rel="icon" href="images/Logo.png" type="image/x-icon">
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="styles.css">
                <script src="script.js" defer></script>

                <!-- Open Graph Meta Tags -->
                <meta property="og:title" content="${pageTitle}">
                <meta property="og:description" content="Your AI Partner in Stock Market Success.">
                <meta property="og:image" content="https://www.marketbyai.in/images/Logo.png">
                <meta property="og:url" content="https://www.marketbyai.in/">
                <meta property="og:type" content="website">

                <!-- Twitter Cards -->
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="${pageTitle}">
                <meta name="twitter:description" content="Your AI Partner in Stock Market Success.">
                <meta name="twitter:image" content="https://www.marketbyai.in/images/Logo.png">
            `;

            // Injecting the head content into the document
            document.head.innerHTML = headContent + document.head.innerHTML;
        }
    }

    // Call the function to set the head content dynamically
    setHeadContent();
});
