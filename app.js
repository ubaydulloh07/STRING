// birinchi algaritm

const names = "helo world this is a new world";
const longname = names.split(" ").sort((a, b) => b.length - a.length)[0];
console.log("birinchi algaritm");
console.log(names);

console.log(" eng uzun soz -", longname);

const shortname = names.split(" ").sort((a, b) => a.length - b.length)[0];
console.log(" eng qisqa soz -", shortname);

// birinchi algaritm end

// ikkinchi algaritm

let b = "FRONTEND";

console.log("ikkinchi algaritm");

console.log("soz -", b);
console.log("sozni teskarisi -", b.split("").reverse().join(""));

// ikkinchi algaritm end

// uchinchi algaritm

let gap = "hello world this is a new world";

let teskari = gap
  .split(" ")
  .map((soz) => soz.split("").reverse().join(""))
  .join(" ");

console.log("uchinchi algaritm");
console.log(gap);

console.log("sozlarning teskarisi -", teskari);

// uchinchi algaritm end

// tortinchi algaritm4

let str = "hello world this is a new world";

let result = str.split(" ").pop().length;

console.log("tortinchi algaritm");

console.log(str);

console.log("oxirgi sozni uzunligi -", result);

// tortinchi algaritm end

// beshinchi algaritm

let arr = [1, 2, 3, 1, 4, 5, 2, 6, 7, 3, 8, 4];

let natija = arr
  .filter((item, i, array) => array.indexOf(item) !== i)
  .reduce((a, b) => {
    if (a.indexOf(b) === -1) a.push(b);
    return a;
  }, []);
console.log("beshinchi algaritm");

console.log(arr);

console.log("kop ishtirok etgan son -", natija);

// beshinchi algaritm end

// oltinchi algaritm

let str2 = "hello world this is a new world";

console.log("oltinchi algaritm");

console.log(str2);

console.log(str2.replace(/ /g, ""));

// oltinchi algaritm end

// yettinchi algaritm

let M = ["abc12wer34po45pf6q"];
const yigindi = (M) =>
  M.join("")
    .match(/\d/g)
    ?.map(Number)
    .reduce((a, b) => a + b, 0) || 0;

console.log("yettinchi algaritm");
console.log("so'z", M);

console.log("yigindisi -", yigindi(M));
// yettinchi algaritm end
