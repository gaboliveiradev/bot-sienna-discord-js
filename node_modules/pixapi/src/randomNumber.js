"use strict";

const rn = (min, max) => {
    let e;
    if(min == null) {
        e = new Error();
        e.code = 400;
        e.message = 'Min value undefined';
    }
    if(max == null) {
        e = new Error();
        e.code = 400;
        e.message = 'Max value undefined';
    }
    if (e) {
		return new Promise(function (resolve, reject) {
			reject(e);
		});
	}
    
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = rn