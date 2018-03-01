var big = require('./../assets/big.jpg')
var small = require('./../assets/small.jpg')

function component() {
    var element = document.createElement('div');
    var element2 = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    var myBig = new Image();
    myBig.src = big;
    var mySmall = new Image();
    mySmall.src = small;
    element2.appendChild(mySmall);
    return element;
}

document.body.appendChild(component());