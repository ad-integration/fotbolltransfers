adk.cmd.push(function() {

    var advisibleID = '10122804'

    adk.config()
        .addBreakpoint('mobile', 125)
        .addBreakpoint('tablet', 768)
        .addBreakpoint('desktop', 1025)

        .addTemplate('native-teaser', adk.template.url((window.PUBLIC_ROOT || '') + '/templates/native-teaser.html'))

        .addContainer('native-teaser', adk.container.config()
            .abstract()
            // .mode('dev').formats([300,300])
            .provider('adk.native.teaser'))

        .addContainer('native-teaser-desktop', adk.container.config()
            .extends('native-teaser')
            .breakpoints('mobile', 'desktop')
            // .param('category')
            // .param('props', {
            //     'device': 'desktop',
            // })
            // .replace()
            .template('native-teaser')
            // .templateValues({
            //     foo: 'bar',
            // })
            .params('aid', advisibleID))
            // .params('keyValues', {
            //     d: 4,
            // }))
            // aspectRatio: 270 / 115,
            // allowFallback: true,
            // aspectRatioVariance: 2,

        // .addContainer('native-teaser-mobile', adk.container.config()
        //     .extends('native-teaser')
        //     .breakpoints('mobile')
        //     // .param('tag', 'mobile')
        //     .params('aid', advisibleID)
        //     .template('native-teaser')
        //     .params('_accept', {
        //         aspectRatio: 270 / 115,
        //         allowFallback: true,
        //     }))

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
