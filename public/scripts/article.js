adk.cmd.push(function() {

    // Adds a tiny provider that injects the native marking
    adk.container.addProvider('native-marking', {
        load: function({elem}) {
            elem.innerHTML = '<div class="native-article-marking">HELA DENNA ARTIKEL ÄR EN ANNONS</div>'
        }
    })

    adk.config()

        // Load the article template
        .addTemplate('native-article', adk.template.config()
            .url((window.PUBLIC_ROOT || '') + '/templates/native-article.html'))

        // Define a container for the sticky ad marking
        .addContainer('native-marking', adk.container.config()
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
