function getval(str, opt) {
  str = str.trim();
  let key = Object.keys(opt).join();
  let val = JSON.stringify(Object.values(opt));
  let txt = `
  let [${key}] = ${val};
  `;
  let func = new Function(
    "a",
    `
      ${txt}
      let data = ${str};
        return data;
        `
  );
  try {
    // func();
    return func();
  } catch (e) {
    throw e;
  }
}
function print(str, opt) {
  // console.log("print");
  let temp = str;
  temp = str.replaceAll(/\{\((.*?)\)\}/g, (m, p, q) => {
    try {
      return getval(p, opt);
    } catch (e) {
      throw e;
    }
  });
  return temp;
}
module.exports = print;
