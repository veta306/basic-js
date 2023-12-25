const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  domains
    .map((x) => x.split("."))
    .map((y) => y.reverse())
    .forEach(function (element) {
      let property = "";
      for (let i = 0; i < element.length; i++) {
        property += "." + element[i];
        if (property in dns) dns[property]++;
        else dns[property] = 1;
      }
    });
  return dns;
}

module.exports = {
  getDNSStats,
};
