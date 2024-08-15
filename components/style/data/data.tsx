

import { ChevronDown, ChevronRight, ChevronUp, CheckCircle2, XCircle, HelpCircle, Timer } from 'lucide-react';
export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CheckCircle2,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ChevronRight,
  },
  {
    label: "High",
    value: "high",
    icon: ChevronUp,
  },
]

export const styles = {
  'Aluminum': ['panel', 'post', 'lft', '3feet', '4feet', '5feet', '8feet', '10feet', 'heavy duty end posts'],
  'Cedar': ['panel', 'post', 'lft', '3feet', '4feet', '5feet', '8feet', '10feet'],
  'Chain Link': ['panel', 'post', 'lft', '3feet', '4feet', '5feet', '8feet', '10feet', 'end posts', 'corner posts'],
  'Preasure Treated': ['panel', 'post', 'lft', '3feet', '4feet', '5feet', '8feet', '10feet'],
  'Vinyl': ['panel', 'post', 'lft', '3feet', '4feet', '5feet', '8feet', '10feet', 'flat cap', 'gothic cap', 'new england cap', 'federation cap'],
}