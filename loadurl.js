const Treasure = require('./promisecustom.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//usage of above implementation:::
function load(url) {
    return new Treasure(function(resolve, reject) {

        var request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = function() {
            if (request.status === 200) {

                //resolve(request.response)
                const responseCollection = { 'id': 12, 'name': 'max' };
                resolve(responseCollection)

            } else {
                reject(Error(request.statusText));
            }

        };

        request.onerror = function() {
            reject(Error('Network Error'));
        };

        request.send();



    })
}


load('http://dummy.restapiexample.com/api/v1/employee/41143')
    .then(function(response) {
        console.log(response);
        /* process your JSON further */
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function(result) {
        console.log(result);
    });