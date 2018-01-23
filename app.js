const inlineCss = require('inline-css')
const fs = require('fs')


one_at_a_time('users_new_access.html')



function one_at_a_time(file){
    let data = fs.readFileSync('./template/' + file, 'utf8', (err, data) => {
        if (err) throw err
    })

    inlineCss(data, {url: 'file://' + __dirname + '/template/css/style.css'})
        .then(function(data) {
            console.log(data)
        })
}


// function all_at_once(file){
//
// }
