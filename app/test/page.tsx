"use client";
import { Button } from "@nextui-org/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SyntaxHighlight from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Difficulty } from "@/types";
import { tests, TestType } from "@/config/tests";
import ResultComponent from "@/components/tests/ResultComponent";
import { BugIcon } from "@/components/icons";
function getRandomTests(len = 20, currentTestList: TestType[]): TestType[] {
  let arr: TestType[] = [];
  let usedIndices: Set<number> = new Set();

  while (arr.length < len && arr.length < currentTestList.length) {
    const randomIndex = Math.floor(Math.random() * currentTestList.length);

    if (!usedIndices.has(randomIndex)) {
      arr.push(currentTestList[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return arr;
}
export default function Page() {
  const params = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [testList, setTestList] = useState<TestType[]>([]);
  const [score, setScore] = useState<number[]>([]);

  useEffect(() => {
    const diff = params.get("diff");

    if (!diff) {
      return router.replace("/");
    }
    if (!tests[diff as Difficulty]) {
      return router.replace("/");
    }
    setTestList(getRandomTests(2, tests[diff as Difficulty]));
  }, []);

  return (
    <section className="flex flex-col items-start justify-start p-4 shadow rounded-md bg-white">
      <div className="w-full">
        {testList[step] ? (
          <>
            <span className="w-full flex justify-end mb-2">
              <Button
                isIconOnly
                size="sm"
                startContent={<BugIcon />}
                variant="light"
              />
            </span>
            <span className="w-full flex justify-between mb-2">
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(
                (element, i) => {
                  return (
                    <div
                      key={i}
                      className={`bg-default-200 rounded-full w-[6px] h-[6px] max-md:w-1 max-md:h-1 ${i == step ? "bg-default-500" : ""} ${score[i] === 1 ? "bg-green-500" : score[i] === 0 ? "bg-red-500" : ""}`}
                    />
                  );
                },
              )}
            </span>
            <h1 className="text-lg font-bold">{step + 1} Question</h1>
            <p className=" text-default-500">{testList[step].title}</p>
            <div className="mt-5">
              <SyntaxHighlight language="javascript" style={docco}>
                {testList[step].code}
              </SyntaxHighlight>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {testList[step].answers.map((answer, i) => {
                return (
                  <Button
                    key={i}
                    color="default"
                    onClick={() => {
                      if (i == testList[step].correctIndex) {
                        setScore((prev) => [...prev, 1]);
                      } else {
                        setScore((prev) => [...prev, 0]);
                      }
                      setStep((prev) => prev + 1);
                    }}
                  >
                    {answer}
                  </Button>
                );
              })}
            </div>
          </>
        ) : testList.length ? (
          <ResultComponent score={score.reduce((a, c) => a + c)} />
        ) : (
          "Loading"
        )}
      </div>
    </section>
  );
}
