function getopt(str, opt) {
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
    func();
    return func();
  } catch (e) {
    return `${str} is not defined`;
  }
}
function print(str, opt) {
  let temp = str;
  let match = str.match(/\{\((.*?)\)\}/g);
  match.forEach((e) => {
    let test = temp.replace(/\{\((.*?)\)\}/, (m, p) => {
      return getopt(p, opt);
    });
    temp = test;
  });
  return temp;
}
console.log(
  print("<h1>{( foo )}--{(Math.floor(Math.random() * 10))}</h1>", {
    foo: "semi",
    test: [1, 2, 4],
  })
);
