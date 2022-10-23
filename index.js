const print = require("./function/print");
const { toarr, ignore } = require("./function/ignore");
function compile(str, opt) {
  let temp = str;
  let func = [toarr, print, ignore];
  func.forEach((e) => {
    // console.log(e(str, opt));
    temp = e(temp, opt);
  });
  return temp;
}
module.exports = compile;
