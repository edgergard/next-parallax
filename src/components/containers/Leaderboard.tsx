"use client";

import React from "react";
import { useLeaderboard } from "@/hooks";
import { Button, Table } from "../ui";

const Leaderboard: React.FC = () => {
  const { columns, shownRows, isLeaderboardExpanded, toggleShownRowsCount } =
    useLeaderboard();

  return (
    <div>
      <Button
        arrowDirection={isLeaderboardExpanded ? "up" : "down"}
        variant="arrow"
        onClick={toggleShownRowsCount}
      />
      <Table columns={columns} rows={shownRows} />
    </div>
  );
};

export default Leaderboard;
