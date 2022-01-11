"use strict";


const replaceString = (value1, value2, base, replaced) => {
    replaced = base.repeat(value1)+replaced.repeat(value2 - value1)
    return replaced;
}


module.exports = replaceString