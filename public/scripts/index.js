adk.cmd.push(function() {

    var advisibleID = '10122709'

    adk.configure()

        // Load the teaser template
        .template(adk.defineTemplate('native-teaser')
            .url((window.PUBLIC_ROOT || '') + '/templates/native-teaser.html'))

        // Define a container that will load the teasers
        .container(adk.defineContainer('native-teaser')
            .provider('adk.native.teaser')
            .param('aid', advisibleID)
            .param('template', 'native-teaser')
            .param('accept', {
                aspectRatio: 270 / 115,
            })
            .replace())

        // Apply the configuration and initialize ADK
        .apply()
        .init()
})
