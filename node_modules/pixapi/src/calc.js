"use strict";

const math = require('mathjs');


const calc = (calcs) => {
    let e;
    if(calcs == null) {
        e = new Error();
        e.code = 400;
        e.message = 'Calcs is not defined';
        return new Promise(function (resolve, reject) { reject(e); });
    }
    let resp;

    try {
        resp = math.evaluate(calcs)
        return resp;
    } catch (e) {
        e = new Error();
        e.code = 400;
        e.message = 'Invalid calc ask';
        return new Promise(function (resolve, reject) { reject(e); });
    }
}


module.exports = calc
