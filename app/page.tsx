"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";

import { useDifficultyContext } from "./contexts/difficultyContext";

import { ResponsiveGreeting } from "@/components/ui/greeting";
import { Difficulty } from "@/types";
export default function Home() {
  const { setDifficulty, difficulty } = useDifficultyContext();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <ResponsiveGreeting>
        <Button className="font-bold text-white" color="primary">
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
          <Tab key="intermediate" title="intermediate" />
          <Tab key="expert" title="expert" />
        </Tabs>
      </ResponsiveGreeting>
    </section>
  );
}
