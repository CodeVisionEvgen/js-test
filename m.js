const r = [{
    id: "f2e1b8d5-a624-4eax-bffs-4d3d8e5f7c2q",
    title: "What will this function display on the screen?",
    code: `
funtion run(a = 2) {
  return a ? 1 : 0
}
run(4)
      `,
    answers: ["1", "0", "2", "4"],
    correctIndex: 0,
  },
  {
    id: "d3a7e4b2-a7e5-4b8a-b4d8-5d7e4c6a3e5d",
    title: "What is the result of the function?",
    code: `
function multiply(a, b = 5) {
  return a * b;
}
multiply(3);
    `,
    answers: ["15", "3", "5", "0"],
    correctIndex: 0,
  },
  {
    id: "a5d6e4b9-a3d4-4f8e-b2d4-3f5d8c7a9e2d",
    title: "What is the output of the function?",
    code: `
function divide(a, b) {
  if (b === 0) {
    return 'Infinity';
  }
  return a / b;
}
divide(6, 2);
    `,
    answers: ["2", "6", "3", "Infinity"],
    correctIndex: 2,
  },
  {
    id: "a7e6d3b4-c7d8-4e2a-b4f5-6c8e5a9d3e2b",
    title: "What is the result of the function?",
    code: `
function add(a, b = 10) {
  return a + b;
}
add(7);
    `,
    answers: ["17", "7", "10", "0"],
    correctIndex: 0,
  },
  {
    id: "b5d6e8f4-a7c4-4f9d-b6e4-7f8a5c9b2e3a",
    title: "What is the output of the function?",
    code: `
function subtract(a, b = 3) {
  return a - b;
}
subtract(10);
    `,
    answers: ["7", "10", "3", "0"],
    correctIndex: 0,
  },
  {
    id: "c8f7e3d4-a9e5-4b6a-b3f2-5d8e6a9c4e7b",
    title: "What is the result of the function?",
    code: `
function power(a, b = 2) {
  return a ** b;
}
power(4);
    `,
    answers: ["16", "4", "2", "8"],
    correctIndex: 0,
  },
  {
    id: "d9a8e6b3-c5f4-4b7d-b8a6-7f9d3e2c4a5e",
    title: "What is the output of the function?",
    code: `
function modulo(a, b) {
  return a % b;
}
modulo(10, 3);
    `,
    answers: ["1", "3", "10", "0"],
    correctIndex: 0,
  },
  {
    id: "e6d5b8a4-c7e2-4a3f-b6a5-7c8f9d3e2a4b",
    title: "What is the result of the function?",
    code: `
function square(a) {
  return a * a;
}
square(5);
    `,
    answers: ["25", "5", "10", "0"],
    correctIndex: 0,
  },
  {
    id: "f3b8d6a5-e7c4-4a9f-b7e6-8d2f3c4b5e9a",
    title: "What is the output of the function?",
    code: `
function sqrt(a) {
  return Math.sqrt(a);
}
sqrt(16);
    `,
    answers: ["4", "16", "2", "8"],
    correctIndex: 0,
  },
  {
    id: "g2d9e7a6-b5c4-4f3d-a6e7-9f8a2b3c4e5d",
    title: "What is the result of the function?",
    code: `
function cube(a) {
  return a ** 3;
}
cube(3);
    `,
    answers: ["27", "3", "9", "0"],
    correctIndex: 0,
  },
  {
    id: "h5a8d7c9-e6b4-4a2f-b3d5-7e9f6c4d3a2e",
    title: "What is the output of the function?",
    code: `
function abs(a) {
  return Math.abs(a);
}
abs(-5);
    `,
    answers: ["5", "0", "-5", "1"],
    correctIndex: 0,
  },
  {
    id: "i4b9e8a7-c5d6-4f2a-b7c8-9a3f4d5e6b7a",
    title: "What is the result of the function?",
    code: `
function ceil(a) {
  return Math.ceil(a);
}
ceil(4.2);
    `,
    answers: ["5", "4", "4.2", "0"],
    correctIndex: 0,
  },
  {
    id: "j3c7d9b8-e6f5-4a2d-b4e7-8d9f3c6a5b4e",
    title: "What is the output of the function?",
    code: `
function floor(a) {
  return Math.floor(a);
}
floor(5.8);
    `,
    answers: ["5", "6", "5.8", "0"],
    correctIndex: 0,
  },
  {
    id: "k6a8e5d4-b7c9-4f2b-a3e6-9f4d8c3b5e7a",
    title: "What is the result of the function?",
    code: `
function round(a) {
  return Math.round(a);
}
round(4.5);
    `,
    answers: ["5", "4", "4.5", "0"],
    correctIndex: 0,
  },
  {
    id: "l7d9e6c8-a5b4-4f2a-b8e7-9c3d4b5e6f7a",
    title: "What is the output of the function?",
    code: `
function max(a, b) {
  return Math.max(a, b);
}
max(5, 10);
    `,
    answers: ["10", "5", "0", "15"],
    correctIndex: 0,
  },
  {
    id: "m8b7e5a4-c6d9-4a3f-b5e8-7d4c9f3b2e5a",
    title: "What is the result of the function?",
    code: `
function min(a, b) {
  return Math.min(a, b);
}
min(5, 10);
    `,
    answers: ["5", "10", "0", "15"],
    correctIndex: 0,
  },
  {
    id: "n9e8d7b6-a5c4-4f3a-b9e7-8d3c4b5a6f9a",
    title: "What is the output of the function?",
    code: `
function sign(a) {
  return Math.sign(a);
}
sign(-10);
    `,
    answers: ["-1", "0", "1", "-10"],
    correctIndex: 0,
  },
  {
    id: "o2d5e9c8-a6b7-4f3a-b4c9-8d3f4b5a7e6b",
    title: "What is the result of the function?",
    code: `
function trunc(a) {
  return Math.trunc(a);
}
trunc(4.9);
    `,
    answers: ["4", "4.9", "5", "0"],
    correctIndex: 0,
  },
  {
    id: "p4b7e6a9-c5d8-4a3f-b9c6-8d4f3e2a5b7c",
    title: "What is the output of the function?",
    code: `
function random() {
  return Math.random();
}
random();
    `,
    answers: ["A random number between 0 and 1", "0", "1", "Undefined"],
    correctIndex: 0,
  },
  {
    id: "q6d8b9e7-a5c4-4f2a-b7d9-8c3e4a5f6b7a",
    title: "What is the result of the function?",
    code: `
function isInteger(a) {
  return Number.isInteger(a);
}
isInteger(5.5);
    `,
    answers: ["false", "true", "undefined", "null"],
    correctIndex: 0,
  },
  {
    id: "r9b8e5a6-c4d7-4a2f-b6e9-8f3d4c5b7a6e",
    title: "What is the output of the function?",
    code: `
function parseIntExample(a) {
  return parseInt(a);
}
parseIntExample("10.5");
    `,
    answers: ["10", "10.5", "0", "NaN"],
    correctIndex: 0,
  },
  {
    id: "s2d5e8c9-a6b4-4f3a-b5d9-8e4c3a5f6b7a",
    title: "What is the result of the function?",
    code: `
function parseFloatExample(a) {
  return parseFloat(a);
}
parseFloatExample("10.5");
    `,
    answers: ["10.5", "10", "0", "NaN"],
    correctIndex: 0,
  },
  {
    id: "t4b9e6a8-c5d7-4f2a-b8d9-8d3f4a5c7b6e",
    title: "What is the output of the function?",
    code: `
function toFixedExample(a) {
  return a.toFixed(2);
}
toFixedExample(10.567);
    `,
    answers: ["10.57", "10.56", "10.567", "10.5"],
    correctIndex: 0,
  },
  {
    id: "u6d8b7e9-a5c4-4a2f-b7e9-8c4d3f5b6a7e",
    title: "What is the result of the function?",
    code: `
function toStringExample(a) {
  return a.toString();
}
toStringExample(123);
    `,
    answers: ["'123'", "123", "undefined", "null"],
    correctIndex: 0,
  },
  {
    id: "v8b6e9a7-c5d4-4f3a-b9c8-8d2f4e3b7a6e",
    title: "What is the output of the function?",
    code: `
function charAtExample(str, index) {
  return str.charAt(index);
}
charAtExample("hello", 1);
    `,
    answers: ["'e'", "'h'", "'l'", "'o'"],
    correctIndex: 0,
  },
  {
    id: "w2d7e6b8-a5c4-4f3a-b7d9-8c4e3f5a6b7e",
    title: "What is the result of the function?",
    code: `
function toUpperCaseExample(str) {
  return str.toUpperCase();
}
toUpperCaseExample("hello");
    `,
    answers: ["'HELLO'", "'hello'", "'Hello'", "'H'"],
    correctIndex: 0,
  },
  {
    id: "x4b8e9a6-c5d4-4a2f-b9e8-8d3f4c5b7a6e",
    title: "What is the output of the function?",
    code: `
function toLowerCaseExample(str) {
  return str.toLowerCase();
}
toLowerCaseExample("HELLO");
    `,
    answers: ["'hello'", "'HELLO'", "'Hello'", "'H'"],
    correctIndex: 0,
  },
  {
    id: "y6d9b7e8-a5c4-4f3a-b7e9-8c4e3f5b6a7e",
    title: "What is the result of the function?",
    code: `
function splitExample(str) {
  return str.split(' ');
}
splitExample("hello world");
    `,
    answers: [
      "['hello', 'world']",
      "['hello world']",
      "['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']",
      "['h', 'w']",
    ],
    correctIndex: 0,
  },
  {
    id: "z8b6e5a9-c5d4-4f3a-b7e9-8d2f4e3b6a7e",
    title: "What is the output of the function?",
    code: `
function joinExample(arr) {
  return arr.join(' ');
}
joinExample(['hello', 'world']);
    `,
    answers: [
      "'hello world'",
      "['hello', 'world']",
      "'helloworld'",
      "'h e l l o w o r l d'",
    ],
    correctIndex: 0,
  },
  {
    id: "aa9d7e6b-a5c4-4a2f-b8e9-8c3f4d5b6e7a",
    title: "What is the result of the function?",
    code: `
function reverseExample(arr) {
  return arr.reverse();
}
reverseExample([1, 2, 3]);
    `,
    answers: ["[3, 2, 1]", "[1, 2, 3]", "[2, 1, 3]", "[1, 3, 2]"],
    correctIndex: 0,
  },
  {
    id: "bb8e5a7c-c5d4-4f2a-b7e9-8d3f4c5b6a7e",
    title: "What is the output of the function?",
    code: `
function concatExample(arr1, arr2) {
  return arr1.concat(arr2);
}
concatExample([1, 2], [3, 4]);
    `,
    answers: ["[1, 2, 3, 4]", "[1, 2]", "[3, 4]", "[1, 2, 3]"],
    correctIndex: 0,
  },
  {
    id: "cc9d8b6e-a5c4-4a2f-b7e9-8c4e3d5a6b7e",
    title: "What is the result of the function?",
    code: `
function includesExample(arr, value) {
  return arr.includes(value);
}
includesExample([1, 2, 3], 2);
    `,
    answers: ["true", "false", "undefined", "null"],
    correctIndex: 0,
  },
  {
    id: "dd8b6e5a-c5d4-4f2a-b7e9-8c3f4d5a6b7e",
    title: "What is the output of the function?",
    code: `
function findIndexExample(arr, value) {
  return arr.findIndex(el => el === value);
}
findIndexExample([1, 2, 3], 2);
    `,
    answers: ["1", "2", "0", "-1"],
    correctIndex: 0,
  },
  {
    id: "ee7b6d8a-c5d4-4a2f-b7e9-8d3f4c5e6a7e",
    title: "What is the result of the function?",
    code: `
function filterExample(arr) {
  return arr.filter(el => el > 2);
}
filterExample([1, 2, 3, 4]);
    `,
    answers: ["[3, 4]", "[1, 2, 3, 4]", "[1, 2]", "[2, 3, 4]"],
    correctIndex: 0,
  },
  {
    id: "ff8e7b6d-c5d4-4a2f-b8e9-8c3f4d5a6b7e",
    title: "What is the output of the function?",
    code: `
function mapExample(arr) {
  return arr.map(el => el * 2);
}
mapExample([1, 2, 3]);
    `,
    answers: ["[2, 4, 6]", "[1, 2, 3]", "[2, 3, 4]", "[1, 4, 9]"],
    correctIndex: 0,
  },
  {
    id: "gg8b7e6a-c5d4-4a2f-b7e9-8c3f4d5a6b7e",
    title: "What is the result of the function?",
    code: `
function reduceExample(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}
reduceExample([1, 2, 3]);
    `,
    answers: ["6", "0", "1", "3"],
    correctIndex: 0,
  },
  {
    id: "hh7b6e8d-c5d4-4a2f-b7e9-8d3f4c5a6e7a",
    title: "What is the output of the function?",
    code: `
function everyExample(arr) {
  return arr.every(el => el > 0);
}
everyExample([1, 2, 3]);
    `,
    answers: ["true", "false", "undefined", "null"],
    correctIndex: 0,
  },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
r.forEach((e) => {
  const ans = e.answers[e.correctIndex];
  const sh = shuffle(e.answers);

  console.log({
    ...e,
    answers: sh,
    correctIndex: sh.indexOf(ans),
  });
});