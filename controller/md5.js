const crypto = require('crypto')

let md5 = crypto.createHash('md5');

module.exports = (str) => {
    md5.update(str);
    return md5.digest('hex')
}