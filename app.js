const inlineCss = require('inline-css')
const fs        = require('fs')
const concat    = require('concat')


// compile single file or undefined will compile all files
// let single_file = 'example_file.html'   /   undefined
let single_file = 'users_new_access.html'


if(single_file)
    one_at_a_time(single_file)
else
    all_at_once()







function one_at_a_time(file){

    concat([
        './template/partials/header.html',
        './template/' + file,
        './template/partials/footer.html'
    ]).then(result => {
        let data = result

        inlineCss(data, {url: 'file://' + __dirname + '/template/css/style.css'})
            .then(function(data) {
                fs.writeFile('./output/' + file, data, ()=>{})
            })
    })


}


function all_at_once(){
    console.log('all');
}
