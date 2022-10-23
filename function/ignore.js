function toarr(str) {
  let temp = str;
  temp = str.replaceAll(/\@\{\((.*?)\)\}/g, "[[$1]]");
  return temp;
}
function ignore(str) {
  let temp = str;
  temp = str.replaceAll(/\[\[(.*?)\]\]/g, "{($1)}");
  return temp;
}
module.exports = { toarr, ignore };
