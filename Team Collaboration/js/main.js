// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: 'vendor/lib/js/classList.js', condition: function() { return !document.body.classList; } },

        // Interpret Markdown in <section> elements
        { src: 'vendor/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'vendor/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Syntax highlight for <code> elements
        { src: 'vendor/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Zoom in and out with Alt+click
        //{ src: 'vendor/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

        // Speaker notes
        { src: 'vendor/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }

        // Remote control your reveal.js presentation using a touch device
        //{ src: 'vendor/plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});

Reveal.addEventListener('ready', function(event) {
    var logoTemplate = '<div class="logo"><a class="image" href="http://coffeeandcode.com" target="_blank"><img alt="Coffee and Code logo" src="images/logo.png" /></a></div>';
    var conferenceTemplate = '<div class="conference"><a class="image" href="http://codemash.org" target="_blank"><img alt="CodeMash" src="images/events/codemash.png" /></a></div>';
    var $controls = $('aside.controls').after(logoTemplate).after(conferenceTemplate);
    var $logo = $controls.next();
});
