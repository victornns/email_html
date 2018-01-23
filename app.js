const inlineCss = require('inline-css')
const fs = require('fs')


let html = fs.readFileSync('./teste/index.html', 'utf8', (err, data) => {
    if (err) throw err
    return data
})

inlineCss(html, {url: 'file://' + __dirname + '/teste/style.css'})
    .then(function(html) {
        console.log(html)
    })
