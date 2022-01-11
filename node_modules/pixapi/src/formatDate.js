"use strict";

const formatDate = (template, date) => {
  let e;
  if(template == null || date == null) {
    e = new Error();
    e.code = 400;
    e.message = 'Template or Date is Undefined';
  }
  if (e) {
		return new Promise(function (resolve, reject) {
			reject(e);
		});
	}
	var specs = 'YYYY:MM:DD:HH:mm:ss:ms'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
}

module.exports = formatDate


