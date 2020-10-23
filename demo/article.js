(function () {

    function loadScript(src) { var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('src', src); document.head.appendChild(scriptElem) }
    function loadStyles(href) { var linkElem = document.createElement('LINK'); linkElem.setAttribute('rel', 'stylesheet'); linkElem.setAttribute('href', href); document.head.appendChild(linkElem) }

    window.adk = window.adk || {cmd: []}
    window.PUBLIC_ROOT = 'http://localhost:8080'

    loadScript('https://cdn.advisible.com/adk-1.1.6.js')
    loadScript(PUBLIC_ROOT + '/scripts/article.js')
    loadStyles(PUBLIC_ROOT + '/styles/native.css')

    var referenceElem = document.querySelector('.newsContainer')
    var containerElem = document.createElement('div')
    referenceElem.parentNode.replaceChild(containerElem, referenceElem)

    adk.cmd.push(function() {
        adk.native.article({
            aid: '10122709',
            elem: containerElem,
            replace: true,
            template: 'native-article',
            accept: {
                aspectRatio: 528 / 300,
            },
            onDone: function(native, err) {
                native && !err && (window.document.title = native.headline)
            }
        })
    })

})()
