(function () {

    function loadScript(src) { var scriptElem = document.createElement('SCRIPT'); scriptElem.setAttribute('src', src); document.head.appendChild(scriptElem) }
    function loadStyles(href) { var linkElem = document.createElement('LINK'); linkElem.setAttribute('rel', 'stylesheet'); linkElem.setAttribute('href', href); document.head.appendChild(linkElem) }

    window.adk = window.adk || {cmd: []}
    window.PUBLIC_ROOT = 'http://localhost:8080'

    loadScript('https://cdn.local-advisible.com/adk-1.1.6.js')
    loadScript(PUBLIC_ROOT + '/scripts/index.js')
    loadStyles(PUBLIC_ROOT + '/styles/native.css')

    var referenceElem = document.querySelector('.smallNewsLink:nth-of-type(4)')
    var containerElem = document.createElement('div')
    containerElem.setAttribute('data-adk-container', 'native-teaser')
    referenceElem.parentNode.replaceChild(containerElem, referenceElem)

    adk.cmd.push(function() {
        adk.attach()
    })

})()
