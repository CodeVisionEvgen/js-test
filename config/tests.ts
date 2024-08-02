import { Difficulty } from "@/types";

export type TestType = {
  title: string;
  code: string;
  answers: string[];
  correctIndex: number;
};
export const tests: Record<Difficulty, TestType[]> = {
  beginner: [
    {
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
    {
      title: "What will this function display on the screen",
      code: `
funtion start(b = 2) {
  return a ? 1 : 0
}
start(4)
      `,
      answers: ["1", "0", "2", "4"],
      correctIndex: 0,
    },
  ],
  intermediate: [
    {
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
