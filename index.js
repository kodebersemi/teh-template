const print = require("./function/print");
const comment = require("./function/comment");
const { toarr, ignore } = require("./function/ignore");
function compile(str, opt) {
  let temp = str;
  let func = [comment, toarr, print, ignore];
  func.forEach((e) => {
    // console.log(e(str, opt));
    temp = e(temp, opt);
  });
  return temp;
}
module.exports = compile;
