import React, { ReactNode, useEffect, useState } from "react";

import { JavaScriptIcon } from "../icons";
import { title } from "../primitives";

function GreetingLg({ children }: { children: ReactNode }) {
  return (
    <div className="w-11/12 flex justify-center gap-2">
      <JavaScriptIcon className="rounded" height={200} width={200} />
      <div className="grid justify-between">
        <div className="w-full max-w-xl max-md:max-w-lg ">
          <h1 className={title()}>Do you know javascript?</h1>
          <p className="text-default-400 font-bold w-full">
            A regular express test of 20 questions with a choice of difficulty
            level from beginner to professional
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

function GreetingSm({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-max grid justify-center justify-items-center">
      <div className="flex gap-2 w-full justify-start">
        <JavaScriptIcon className="rounded h-max" height={115} width={115} />
        <h1 className={"text-4xl font-bold w-min"}>Do you know javascript?</h1>
      </div>
      <p className="text-default-400 font-bold text-left w-[300px]">
        A regular express test of 20 questions with a choice of difficulty level
        from beginner to professional
      </p>
      <div className="w-full flex flex-col-reverse gap-1 mt-2">{children}</div>
    </div>
  );
}

export const ResponsiveGreeting = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0 });

  useEffect(() => {
    setIsClient(true);

    setWindowSize({ width: window.innerWidth });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return windowSize.width >= 520 ? (
    <GreetingLg>{children}</GreetingLg>
  ) : (
    <GreetingSm>{children}</GreetingSm>
  );
};
