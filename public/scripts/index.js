adk.cmd.push(function() {

    var advisibleID = '10122804'

    adk.config()
        .addTemplate('native-teaser', adk.template.url((window.PUBLIC_ROOT || '') + '/templates/native-teaser.html'))
        .addContainer('native-teaser-desktop', adk.container.config()
            .provider('adk.native.teaser')
            .template('native-teaser')
            .params('aid', advisibleID))
        .apply()
        .init()

    function onReady() {
        adk.cmd.push(function() {
            adk.container.attach()
        })
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady)
    } else {
        onReady()
    }

})
