"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import { useDifficultyContext } from "./contexts/difficultyContext";

import { ResponsiveGreeting } from "@/components/ui/greeting";
import { Difficulty } from "@/types";
export default function Home() {
  const { setDifficulty, difficulty } = useDifficultyContext();
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <ResponsiveGreeting>
        <Button
          className="font-bold text-white"
          onClick={() => {
            router.push(`/test?diff=${difficulty}`);
          }}
        >
          Start
        </Button>
        <Tabs
          aria-label="Difficulty"
          className=" text-black grid items-end"
          classNames={{
            tabList: "border-2 border-secondary",
            tabContent: "group-data-[selected=true]:text-white",
          }}
          color="primary"
          selectedKey={difficulty}
          variant={"bordered"}
          // @ts-expect-error
          onSelectionChange={(text: Difficulty) => setDifficulty(text)}
        >
          <Tab key="beginner" title="beginner" />
          <Tab key="intermediate" isDisabled title="intermediate" />
          <Tab key="expert" isDisabled title="expert" />
        </Tabs>
      </ResponsiveGreeting>
    </section>
  );
}
