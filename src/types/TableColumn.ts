import type { ReactNode } from "react";

export interface TableColumn {
  id: string;
  name: string;
  columnStyle?: string;
  getCustomCell?: (value: string) => ReactNode;
}
