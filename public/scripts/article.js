adk.cmd.push(function() {

    // Adds a tiny provider that injects the native marking
    adk.addProvider('native-marking', {
        load: function({elem}) {
            elem.innerHTML = '<div class="native-article-marking">HELA DENNA ARTIKEL ÄR EN ANNONS</div>'
        }
    })

    adk.configure()

        // Load the article template
        .template(adk.defineTemplate('native-article')
            .url((window.PUBLIC_ROOT || '') + '/templates/native-article.html'))

        // Define a container for the sticky ad marking
        .container(adk.defineContainer('native-marking')
            .provider('native-marking')
            .fullWidth()
            .zIndex(1)
            .marginBottom(10)
            .sticky()
            .stickyZIndex(100))

        // Apply the configuration and initialize ADK
        .apply()
        .init()
})
