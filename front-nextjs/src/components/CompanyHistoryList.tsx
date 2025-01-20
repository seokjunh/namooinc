"use client";

import { useRef, useState } from "react";
import CompanyHistoryTab from "./CompanyHistoryTab";
import CompanyHistoryItems from "./CompanyHistoryItems";

const CompanyHistoryList = () => {
  const scrollRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div>
      <CompanyHistoryTab scrollRef={scrollRef} activeSection={activeSection} />
      <div className="mx-auto mt-14 flex max-w-[30rem]">
        <CompanyHistoryItems
          scrollRef={scrollRef}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};
export default CompanyHistoryList;
