import { Difficulty } from "@/types";

export type TestType = {
  id: string;
  title: string;
  code: string;
  answers: string[];
  correctIndex: number;
};
export const tests: Record<Difficulty, TestType[]> = {
  beginner: [
    {
      id: "f2e1b8d5-a624-4eax-bffs-4d3d8e5f7c2q",
      title: "What will this function display on the screen?",
      code: "\nfunсtion run(a = 2) {\n  return a ? 1 : 0\n}\nrun(4)\n      ",
      answers: ["4", "1", "2", "0"],
      correctIndex: 1,
    },
    {
      id: "d3a7e4b2-a7e5-4b8a-b4d8-5d7e4c6a3e5d",
      title: "What is the result of the function?",
      code: "\nfunction multiply(a, b = 5) {\n  return a * b;\n}\nmultiply(3);\n    ",
      answers: ["0", "5", "3", "15"],
      correctIndex: 3,
    },
    {
      id: "a5d6e4b9-a3d4-4f8e-b2d4-3f5d8c7a9e2d",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function divide(a, b) {\n" +
        "  if (b === 0) {\n" +
        "    return 'Infinity';\n" +
        "  }\n" +
        "  return a / b;\n" +
        "}\n" +
        "divide(6, 2);\n" +
        "    ",
      answers: ["3", "2", "6", "Infinity"],
      correctIndex: 0,
    },
    {
      id: "a7e6d3b4-c7d8-4e2a-b4f5-6c8e5a9d3e2b",
      title: "What is the result of the function?",
      code: "\nfunction add(a, b = 10) {\n  return a + b;\n}\nadd(7);\n    ",
      answers: ["0", "7", "10", "17"],
      correctIndex: 3,
    },
    {
      id: "b5d6e8f4-a7c4-4f9d-b6e4-7f8a5c9b2e3a",
      title: "What is the output of the function?",
      code: "\nfunction subtract(a, b = 3) {\n  return a - b;\n}\nsubtract(10);\n    ",
      answers: ["3", "10", "7", "0"],
      correctIndex: 2,
    },
    {
      id: "c8f7e3d4-a9e5-4b6a-b3f2-5d8e6a9c4e7b",
      title: "What is the result of the function?",
      code: "\nfunction power(a, b = 2) {\n  return a ** b;\n}\npower(4);\n    ",
      answers: ["16", "4", "8", "2"],
      correctIndex: 0,
    },
    {
      id: "d9a8e6b3-c5f4-4b7d-b8a6-7f9d3e2c4a5e",
      title: "What is the output of the function?",
      code: "\nfunction modulo(a, b) {\n  return a % b;\n}\nmodulo(10, 3);\n    ",
      answers: ["0", "10", "1", "3"],
      correctIndex: 2,
    },
    {
      id: "e6d5b8a4-c7e2-4a3f-b6a5-7c8f9d3e2a4b",
      title: "What is the result of the function?",
      code: "\nfunction square(a) {\n  return a * a;\n}\nsquare(5);\n    ",
      answers: ["10", "25", "5", "0"],
      correctIndex: 1,
    },
    {
      id: "f3b8d6a5-e7c4-4a9f-b7e6-8d2f3c4b5e9a",
      title: "What is the output of the function?",
      code: "\nfunction sqrt(a) {\n  return Math.sqrt(a);\n}\nsqrt(16);\n    ",
      answers: ["16", "2", "8", "4"],
      correctIndex: 3,
    },
    {
      id: "g2d9e7a6-b5c4-4f3d-a6e7-9f8a2b3c4e5d",
      title: "What is the result of the function?",
      code: "\nfunction cube(a) {\n  return a ** 3;\n}\ncube(3);\n    ",
      answers: ["27", "9", "0", "3"],
      correctIndex: 0,
    },
    {
      id: "h5a8d7c9-e6b4-4a2f-b3d5-7e9f6c4d3a2e",
      title: "What is the output of the function?",
      code: "\nfunction abs(a) {\n  return Math.abs(a);\n}\nabs(-5);\n    ",
      answers: ["0", "5", "1", "-5"],
      correctIndex: 1,
    },
    {
      id: "i4b9e8a7-c5d6-4f2a-b7c8-9a3f4d5e6b7a",
      title: "What is the result of the function?",
      code: "\nfunction ceil(a) {\n  return Math.ceil(a);\n}\nceil(4.2);\n    ",
      answers: ["4", "0", "4.2", "5"],
      correctIndex: 3,
    },
    {
      id: "j3c7d9b8-e6f5-4a2d-b4e7-8d9f3c6a5b4e",
      title: "What is the output of the function?",
      code: "\nfunction floor(a) {\n  return Math.floor(a);\n}\nfloor(5.8);\n    ",
      answers: ["5.8", "0", "5", "6"],
      correctIndex: 2,
    },
    {
      id: "k6a8e5d4-b7c9-4f2b-a3e6-9f4d8c3b5e7a",
      title: "What is the result of the function?",
      code: "\nfunction round(a) {\n  return Math.round(a);\n}\nround(4.5);\n    ",
      answers: ["4", "0", "4.5", "5"],
      correctIndex: 3,
    },
    {
      id: "l7d9e6c8-a5b4-4f2a-b8e7-9c3d4b5e6f7a",
      title: "What is the output of the function?",
      code: "\nfunction max(a, b) {\n  return Math.max(a, b);\n}\nmax(5, 10);\n    ",
      answers: ["15", "0", "5", "10"],
      correctIndex: 3,
    },
    {
      id: "m8b7e5a4-c6d9-4a3f-b5e8-7d4c9f3b2e5a",
      title: "What is the result of the function?",
      code: "\nfunction min(a, b) {\n  return Math.min(a, b);\n}\nmin(5, 10);\n    ",
      answers: ["15", "0", "5", "10"],
      correctIndex: 2,
    },
    {
      id: "n9e8d7b6-a5c4-4f3a-b9e7-8d3c4b5a6f9a",
      title: "What is the output of the function?",
      code: "\nfunction sign(a) {\n  return Math.sign(a);\n}\nsign(-10);\n    ",
      answers: ["0", "-1", "1", "-10"],
      correctIndex: 1,
    },
    {
      id: "o2d5e9c8-a6b7-4f3a-b4c9-8d3f4b5a7e6b",
      title: "What is the result of the function?",
      code: "\nfunction trunc(a) {\n  return Math.trunc(a);\n}\ntrunc(4.9);\n    ",
      answers: ["4.9", "0", "4", "5"],
      correctIndex: 2,
    },
    {
      id: "p4b7e6a9-c5d8-4a3f-b9c6-8d4f3e2a5b7c",
      title: "What is the output of the function?",
      code: "\nfunction random() {\n  return Math.random();\n}\nrandom();\n    ",
      answers: ["0", "A random number between 0 and 1", "1", "Undefined"],
      correctIndex: 1,
    },
    {
      id: "q6d8b9e7-a5c4-4f2a-b7d9-8c3e4a5f6b7a",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function isInteger(a) {\n" +
        "  return Number.isInteger(a);\n" +
        "}\n" +
        "isInteger(5.5);\n" +
        "    ",
      answers: ["false", "undefined", "true", "null"],
      correctIndex: 0,
    },
    {
      id: "r9b8e5a6-c4d7-4a2f-b6e9-8f3d4c5b7a6e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function parseIntExample(a) {\n" +
        "  return parseInt(a);\n" +
        "}\n" +
        'parseIntExample("10.5");\n' +
        "    ",
      answers: ["10", "10.5", "NaN", "0"],
      correctIndex: 0,
    },
    {
      id: "s2d5e8c9-a6b4-4f3a-b5d9-8e4c3a5f6b7a",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function parseFloatExample(a) {\n" +
        "  return parseFloat(a);\n" +
        "}\n" +
        'parseFloatExample("10.5");\n' +
        "    ",
      answers: ["10", "0", "NaN", "10.5"],
      correctIndex: 3,
    },
    {
      id: "t4b9e6a8-c5d7-4f2a-b8d9-8d3f4a5c7b6e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function toFixedExample(a) {\n" +
        "  return a.toFixed(2);\n" +
        "}\n" +
        "toFixedExample(10.567);\n" +
        "    ",
      answers: ["10.56", "10.567", "10.5", "10.57"],
      correctIndex: 3,
    },
    {
      id: "u6d8b7e9-a5c4-4a2f-b7e9-8c4d3f5b6a7e",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function toStringExample(a) {\n" +
        "  return a.toString();\n" +
        "}\n" +
        "toStringExample(123);\n" +
        "    ",
      answers: ["123", "undefined", "null", "'123'"],
      correctIndex: 3,
    },
    {
      id: "v8b6e9a7-c5d4-4f3a-b9c8-8d2f4e3b7a6e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function charAtExample(str, index) {\n" +
        "  return str.charAt(index);\n" +
        "}\n" +
        'charAtExample("hello", 1);\n' +
        "    ",
      answers: ["'l'", "'e'", "'h'", "'o'"],
      correctIndex: 1,
    },
    {
      id: "w2d7e6b8-a5c4-4f3a-b7d9-8c4e3f5a6b7e",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function toUpperCaseExample(str) {\n" +
        "  return str.toUpperCase();\n" +
        "}\n" +
        'toUpperCaseExample("hello");\n' +
        "    ",
      answers: ["'Hello'", "'H'", "'HELLO'", "'hello'"],
      correctIndex: 2,
    },
    {
      id: "x4b8e9a6-c5d4-4a2f-b9e8-8d3f4c5b7a6e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function toLowerCaseExample(str) {\n" +
        "  return str.toLowerCase();\n" +
        "}\n" +
        'toLowerCaseExample("HELLO");\n' +
        "    ",
      answers: ["'HELLO'", "'H'", "'hello'", "'Hello'"],
      correctIndex: 2,
    },
    {
      id: "y6d9b7e8-a5c4-4f3a-b7e9-8c4e3f5b6a7e",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function splitExample(str) {\n" +
        "  return str.split(' ');\n" +
        "}\n" +
        'splitExample("hello world");\n' +
        "    ",
      answers: [
        "['h', 'w']",
        "['hello world']",
        "['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']",
        "['hello', 'world']",
      ],
      correctIndex: 3,
    },
    {
      id: "z8b6e5a9-c5d4-4f3a-b7e9-8d2f4e3b6a7e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function joinExample(arr) {\n" +
        "  return arr.join(' ');\n" +
        "}\n" +
        "joinExample(['hello', 'world']);\n" +
        "    ",
      answers: [
        "'hello world'",
        "'h e l l o w o r l d'",
        "['hello', 'world']",
        "'helloworld'",
      ],
      correctIndex: 0,
    },
    {
      id: "aa9d7e6b-a5c4-4a2f-b8e9-8c3f4d5b6e7a",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function reverseExample(arr) {\n" +
        "  return arr.reverse();\n" +
        "}\n" +
        "reverseExample([1, 2, 3]);\n" +
        "    ",
      answers: ["[3, 2, 1]", "[1, 3, 2]", "[2, 1, 3]", "[1, 2, 3]"],
      correctIndex: 0,
    },
    {
      id: "bb8e5a7c-c5d4-4f2a-b7e9-8d3f4c5b6a7e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function concatExample(arr1, arr2) {\n" +
        "  return arr1.concat(arr2);\n" +
        "}\n" +
        "concatExample([1, 2], [3, 4]);\n" +
        "    ",
      answers: ["[3, 4]", "[1, 2]", "[1, 2, 3, 4]", "[1, 2, 3]"],
      correctIndex: 2,
    },
    {
      id: "cc9d8b6e-a5c4-4a2f-b7e9-8c4e3d5a6b7e",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function includesExample(arr, value) {\n" +
        "  return arr.includes(value);\n" +
        "}\n" +
        "includesExample([1, 2, 3], 2);\n" +
        "    ",
      answers: ["false", "null", "undefined", "true"],
      correctIndex: 3,
    },
    {
      id: "dd8b6e5a-c5d4-4f2a-b7e9-8c3f4d5a6b7e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function findIndexExample(arr, value) {\n" +
        "  return arr.findIndex(el => el === value);\n" +
        "}\n" +
        "findIndexExample([1, 2, 3], 2);\n" +
        "    ",
      answers: ["0", "-1", "1", "2"],
      correctIndex: 2,
    },
    {
      id: "d3f3c3e1-a7c8-42d6-bfd5-0c7a07f987e5",
      title: "What is the output of the following code?",
      code: `
let x = 5;
x += 3;
console.log(x);
    `,
      answers: ["5", "3", "8", "undefined"],
      correctIndex: 2,
    },
    {
      id: "f3d2a1c4-b2b8-46f4-a5d8-5f2c7f3e2d1b",
      title: "What is the output of the following code?",
      code: `
console.log(typeof null);
    `,
      answers: ["string", "null", "undefined", "object"],
      correctIndex: 3,
    },
    {
      id: "e3d2a1c4-b5d8-46f4-a7b2-2c1f5a6d3e4b",
      title: "What is the output of the following code?",
      code: `
let obj = {a: 1, b: 2};
console.log(obj['a']);
    `,
      answers: ["1", "2", "undefined", "null"],
      correctIndex: 0,
    },
    {
      id: "ee7b6d8a-c5d4-4a2f-b7e9-8d3f4c5e6a7e",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function filterExample(arr) {\n" +
        "  return arr.filter(el => el > 2);\n" +
        "}\n" +
        "filterExample([1, 2, 3, 4]);\n" +
        "    ",
      answers: ["[1, 2, 3, 4]", "[1, 2]", "[2, 3, 4]", "[3, 4]"],
      correctIndex: 3,
    },
    {
      id: "ff8e7b6d-c5d4-4a2f-b8e9-8c3f4d5a6b7e",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function mapExample(arr) {\n" +
        "  return arr.map(el => el * 2);\n" +
        "}\n" +
        "mapExample([1, 2, 3]);\n" +
        "    ",
      answers: ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "[2, 3, 4]"],
      correctIndex: 0,
    },
    {
      id: "d4e5c3b6-a7f2-4d8b-9c5d-3f2a1b7e4c5a",
      title: "What is the output of the following code?",
      code: `
let bool = true;
console.log(typeof bool);
    `,
      answers: ["boolean", "string", "number", "object"],
      correctIndex: 0,
    },
    {
      id: "f4d6a7b8-e5c3-4d9e-b2d1-1f0a6b5c3d4e",
      title: "What is the output of the following code?",
      code: `
let arr = ["apple", "banana", "cherry"];
console.log(arr[1]);
    `,
      answers: ["banana", "apple", "cherry", "undefined"],
      correctIndex: 0,
    },
    {
      id: "e3f4a5b6-c7d8-4a9e-9b2d-1f5d6e7c3b4a",
      title: "What is the output of the following code?",
      code: `
let isHappy = false;
console.log(isHappy);
    `,
      answers: ["false", "true", "undefined", "null"],
      correctIndex: 0,
    },
    {
      id: "e3f4a5b6-c7d8-4a9e-9b2d-1f5d6e7c3b4a",
      title: "What is the output of the following code?",
      code: `
let string = "4";
console.log(+string);
    `,
      answers: ['"4"', "4", "number", "boolean"],
      correctIndex: 1,
    },
    {
      id: "gg8b7e6a-c5d4-4a2f-b7e9-8c3f4d5a6b7e",
      title: "What is the result of the function?",
      code:
        "\n" +
        "function reduceExample(arr) {\n" +
        "  return arr.reduce((acc, el) => acc + el, 0);\n" +
        "}\n" +
        "reduceExample([1, 2, 3]);\n" +
        "    ",
      answers: ["3", "1", "0", "6"],
      correctIndex: 3,
    },
    {
      id: "hh7b6e8d-c5d4-4a2f-b7e9-8d3f4c5a6e7a",
      title: "What is the output of the function?",
      code:
        "\n" +
        "function everyExample(arr) {\n" +
        "  return arr.every(el => el > 0);\n" +
        "}\n" +
        "everyExample([1, 2, 3]);\n" +
        "    ",
      answers: ["true", "null", "false", "undefined"],
      correctIndex: 0,
    },
    {
      id: "c4d5e6a7-b8d9-4c1e-9a2b-1f5a7e6d3b4a",
      title: "What is the output of the following code?",
      code: `
let arr = [1, 2, 3];
console.log(arr.pop());
    `,
      answers: ["3", "1", "2", "undefined"],
      correctIndex: 0,
    },
    {
      id: "a2b3c4d5-e6f7-4a9e-b8d9-2c1a5e4d6b7a",
      title: "What is the output of the following code?",
      code: `
let str = "JavaScript";
console.log(str.length);
    `,
      answers: ["10", "9", "11", "undefined"],
      correctIndex: 0,
    },
    {
      id: "d5e6a7b8-c9f2-4a1d-9b3c-1f4e5a7d6b2a",
      title: "What is the output of the following code?",
      code: `
let obj = {a: 1, b: 2};
delete obj.a;
console.log(obj);
    `,
      answers: ["{b: 2}", "{a: 1, b: 2}", "{}", "undefined"],
      correctIndex: 0,
    },
    {
      id: "a1b2c3d4-e5f6-4a9e-b7d8-2c1f3e4d5b6a",
      title: "What is the output of the following code?",
      code: `
let x = 7;
let y = 3;
console.log(x > y);
    `,
      answers: ["true", "false", "undefined", "null"],
      correctIndex: 0,
    },
    {
      id: "d3f3c3e1-a7c8-42d6-bfd5-0c7a07f987e5",
      title: "What is the output of the following code?",
      code: `
let x = 5;
x += 3;
console.log(x);
    `,
      answers: ["8", "5", "3", "undefined"],
      correctIndex: 0,
    },
  ],
  intermediate: [
    {
      id: "fqwdb8d5-a6c4-4e88-b8f5-sfooijgeioe",

      title: "What will this function display on the screen",
      code: `
funtion start(a = 2) {
  return a ? 1 : 0
}
start(4)
      `,
      answers: ["1", "0", "2", "4"],
      correctIndex: 0,
    },
  ],
  expert: [
    {
      id: "f2k1h8j5-q6c4-4v88-bqqs-jgoeijoicxa",

      title: "What will this function display on the screen",
      code: `
funtion start(a = 2) {
  return a ? 1 : 0
}
start(4)
      `,
      answers: ["1", "0", "2", "4"],
      correctIndex: 0,
    },
  ],
};
