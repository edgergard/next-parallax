import type { ReactNode } from "react";
import { useState } from "react";
import { ArrowIcon, DashIcon } from "@/components/icons";
import { leaderboardRows as rows } from "@/mocks";
import type { LeaderboardColumnId, TableColumn } from "@/types";

type IconId = "dash" | "arrow_up" | "arrow_down";
type LeaderboardColumn = Omit<TableColumn, "id"> & { id: LeaderboardColumnId };

interface UseLeaderboard {
  columns: LeaderboardColumn[];
  shownRows: Record<LeaderboardColumnId, string>[];
  isLeaderboardExpanded: boolean;
  toggleLeaderboardExpand: () => void;
}

const INITIAL_SHOWN_ROWS_COUNT = 8;
const EXPANDED_SHOWN_ROWS_COUNT = 16;

const getIconComponent = (icon_id: IconId): ReactNode | null => {
  switch (icon_id) {
    case "arrow_down":
      return <ArrowIcon className="w-3 h-3.5 text-light-red rotate-180" />;
    case "arrow_up":
      return <ArrowIcon className="w-3 h-3.5 text-light-green" />;
    case "dash":
      return <DashIcon className="w-3 h-0.5 text-dark-gray" />;
    default:
      return null;
  }
};

const columns: LeaderboardColumn[] = [
  {
    id: "icon",
    name: "",
    columnStyle: "px-0",
    getCustomCell: (iconId: string) => getIconComponent(iconId as IconId),
  },
  { id: "id", name: "#", columnStyle: "px-3" },
  {
    id: "model_name",
    name: "Model Name",
    columnStyle: "font-family-inter pl-0 pr-12 text-left",
  },
  { id: "average", name: "Average" },
  { id: "arc", name: "ARC" },
  { id: "hella_swag", name: "HellaSwag" },
  { id: "mmlu", name: "MMLU" },
  { id: "truthful_qa", name: "TruthfulQA" },
  { id: "winogrande", name: "Winogrande" },
  { id: "gsm8k", name: "GSM8K" },
  { id: "usage", name: "Usage" },
];

const useLeaderboard = (): UseLeaderboard => {
  const [shownRowsCount, setShownRowsCount] = useState<number>(
    INITIAL_SHOWN_ROWS_COUNT,
  );

  const isLeaderboardExpanded = shownRowsCount === EXPANDED_SHOWN_ROWS_COUNT;
  const shownRows = rows.slice(0, shownRowsCount);

  const toggleLeaderboardExpand = (): void => {
    const payload = isLeaderboardExpanded
      ? INITIAL_SHOWN_ROWS_COUNT
      : EXPANDED_SHOWN_ROWS_COUNT;

    setShownRowsCount(payload);
  };

  return {
    columns,
    shownRows,
    isLeaderboardExpanded,
    toggleLeaderboardExpand,
  };
};

export default useLeaderboard;
