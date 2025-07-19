"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useLeaderboard } from "@/hooks";
import { Button, Table } from "../ui";

const LeaderboardTable: React.FC = () => {
  const { columns, shownRows, isLeaderboardExpanded, toggleLeaderboardExpand } =
    useLeaderboard();

  const rowRef = useRef<HTMLTableRowElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!rowRef.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setShowButton(entry.isIntersecting);
    });

    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const shouldExpandShow = isLeaderboardExpanded || showButton;

  return (
    <div className="flex flex-col">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="overflow-hidden"
      >
        <Table
          columns={columns}
          ref={{ rowRef, rowIndex: 7 }}
          rows={shownRows}
        />
      </motion.div>

      <AnimatePresence>
        {shouldExpandShow && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end gap-x-8 w-full sticky bottom-0 right-0 py-8 bg-soft-black"
            exit={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {isLeaderboardExpanded && (
              <Button size="small" variant="text">
                View full leaderboard
              </Button>
            )}
            <Button
              arrowDirection={isLeaderboardExpanded ? "up" : "down"}
              variant="arrow"
              onClick={toggleLeaderboardExpand}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeaderboardTable;
