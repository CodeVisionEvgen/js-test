import React, { Suspense } from "react";

import TestJsPage from "@/components/tests/TestPage";

export default function Page() {
  return (
    <Suspense>
      <TestJsPage />
    </Suspense>
  );
}
