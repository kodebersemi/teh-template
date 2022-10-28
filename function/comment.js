function comment(str) {
  let temp = str;
  temp = temp.replaceAll(/\{\(\#/g, "<!--");
  temp = temp.replaceAll(/\#\)\}/g, "-->");
  return temp;
}

module.exports = comment;
