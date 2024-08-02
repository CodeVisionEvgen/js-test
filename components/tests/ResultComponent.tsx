import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function ResultComponent({ score }: { score: number }) {
  function getPhrase(score: number) {
    if (score == 20) {
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
      <span className="flex justify-between mb-4">
        <h2 className=" text-2xl text-right">Result</h2>
        <h2 className=" text-2xl text-right">{score} / 10</h2>
      </span>
      <p>{getPhrase(score)}</p>
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
