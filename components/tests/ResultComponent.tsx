"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import { JavaScriptIcon } from "../icons";

export default function ResultComponent({ score }: { score: number }) {
  const shareRef = useRef<HTMLDivElement | null>(null);

  function getPhrase(score: number) {
    if (score == 10) {
      return `Wow, you're a pro! You scored ${score} points`;
    } else if (score >= 8) {
      return `You are well done, ${score} points is a great result`;
    } else if (score >= 5) {
      return `${score} points is not so bad`;
    } else if (score == 0) {
      return `Try better`;
    } else {
      return `Don't worry, ${score} points is a normal result`;
    }
  }
  const router = useRouter();

  return (
    <div>
      <div
        ref={shareRef}
        className=" w-max flex h-max absolute top-[-10000px] rounded-lg bg-white p-5 gap-2"
      >
        <JavaScriptIcon className="rounded mt-1" height={100} width={100} />
        <div className="relative">
          <h1 className="text-left text-xl font-bold">JavaScript test</h1>
          <p className="mb-5 max-w-[120px]">{getPhrase(score)}</p>
        </div>
      </div>
      <div className=" flex justify-end pb-2 w-full ">
        <Button
          color="success"
          variant="flat"
          onClick={() => {
            if (!shareRef.current) {
              alert("Error");
            } else {
              html2canvas(shareRef.current).then((canvas) => {
                const a = document.createElement("a");

                a.href = canvas.toDataURL();
                a.download = "result.png";
                a.click();
              });
            }
          }}
        >
          Share
        </Button>
      </div>
      <span className="flex justify-between mb-4">
        <h2 className=" text-2xl text-right">Result</h2>
        <h2 className=" text-2xl text-right">{score} / 10</h2>
      </span>
      <p className="">{getPhrase(score)}</p>
      <Button
        className="w-full mt-4"
        color="primary"
        onClick={() => {
          router.replace("/");
        }}
      >
        Go back
      </Button>
    </div>
  );
}
