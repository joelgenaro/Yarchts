

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

export const temp = [
  {
    "id": 14,
    "name": "Aluminum",
    "userId": 1,
    "createdAt": "2024-08-23T01:20:27.000Z",
    "updatedAt": "2024-08-23T01:20:30.000Z",
    "styles": [
      {
        "id": 8,
        "name": "2 Rails Regular Spaced",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:22:52.000Z",
        "updatedAt": "2024-08-23T01:22:54.000Z"
      },
      {
        "id": 9,
        "name": "Commerical Extra Picket",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:23:18.000Z",
        "updatedAt": "2024-08-23T01:23:20.000Z"
      },
      {
        "id": 10,
        "name": "Commercial Regular Spaced",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:23:58.000Z",
        "updatedAt": "2024-08-23T01:24:00.000Z"
      },
      {
        "id": 11,
        "name": "Extra Picket",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:24:47.000Z",
        "updatedAt": "2024-08-23T01:24:50.000Z"
      },
      {
        "id": 12,
        "name": "Puppy Picket",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:25:08.000Z",
        "updatedAt": "2024-08-23T01:25:10.000Z"
      },
      {
        "id": 13,
        "name": "Regular Spaced",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:25:39.000Z",
        "updatedAt": "2024-08-23T01:25:42.000Z"
      }
    ],
    "colors": [
      {
        "id": 10,
        "name": "Black",
        "image": null,
        "categoryId": 14,
        "createdAt": "2024-08-23T01:51:23.000Z",
        "updatedAt": "2024-08-23T01:51:26.000Z"
      }
    ],
    "heights": [],
    "lengths": [],
    "fences": []
  },
  {
    "id": 15,
    "name": "Cedar",
    "userId": 1,
    "createdAt": "2024-08-23T01:20:53.000Z",
    "updatedAt": "2024-08-23T01:20:55.000Z",
    "styles": [
      {
        "id": 14,
        "name": "1 3/4\" Spaced",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:26:23.000Z",
        "updatedAt": "2024-08-23T01:26:25.000Z"
      },
      {
        "id": 15,
        "name": "1\" Spaced",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:26:48.000Z",
        "updatedAt": "2024-08-23T01:26:50.000Z"
      },
      {
        "id": 16,
        "name": "2 3/4\" Spaced",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:27:49.000Z",
        "updatedAt": "2024-08-23T01:27:52.000Z"
      },
      {
        "id": 17,
        "name": "Lattice",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:28:39.000Z",
        "updatedAt": "2024-08-23T01:28:41.000Z"
      },
      {
        "id": 18,
        "name": "Pool Code BOB",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:29:07.000Z",
        "updatedAt": "2024-08-23T01:29:09.000Z"
      },
      {
        "id": 19,
        "name": "Regular BOB",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:29:32.000Z",
        "updatedAt": "2024-08-23T01:29:35.000Z"
      },
      {
        "id": 20,
        "name": "Solid",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:30:04.000Z",
        "updatedAt": "2024-08-23T01:30:06.000Z"
      }
    ],
    "colors": [
      {
        "id": 11,
        "name": "Cedar",
        "image": null,
        "categoryId": 15,
        "createdAt": "2024-08-23T01:51:47.000Z",
        "updatedAt": "2024-08-23T01:51:48.000Z"
      }
    ],
    "heights": [],
    "lengths": [],
    "fences": []
  },
  {
    "id": 16,
    "name": "Chain Link",
    "userId": 1,
    "createdAt": "2024-08-23T01:21:18.000Z",
    "updatedAt": "2024-08-23T01:21:20.000Z",
    "styles": [
      {
        "id": 21,
        "name": "Pool Code",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:34:04.000Z",
        "updatedAt": "2024-08-23T01:34:06.000Z"
      },
      {
        "id": 22,
        "name": "Pool Code With Bottom Rail",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:34:40.000Z",
        "updatedAt": "2024-08-23T01:34:42.000Z"
      },
      {
        "id": 23,
        "name": "Pool Code With Bottom Wire",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:35:11.000Z",
        "updatedAt": "2024-08-23T01:35:13.000Z"
      },
      {
        "id": 24,
        "name": "Regular",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:35:32.000Z",
        "updatedAt": "2024-08-23T01:35:38.000Z"
      },
      {
        "id": 25,
        "name": "Regular With Bottom Rail",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:36:06.000Z",
        "updatedAt": "2024-08-23T01:36:08.000Z"
      },
      {
        "id": 26,
        "name": "Regular With Bottom Wire",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:36:53.000Z",
        "updatedAt": "2024-08-23T01:36:55.000Z"
      }
    ],
    "colors": [
      {
        "id": 12,
        "name": "Green",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:52:15.000Z",
        "updatedAt": "2024-08-23T01:52:17.000Z"
      },
      {
        "id": 13,
        "name": "Grey",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T01:52:46.000Z",
        "updatedAt": "2024-08-23T01:52:48.000Z"
      },
      {
        "id": 16,
        "name": "Tan",
        "image": null,
        "categoryId": 16,
        "createdAt": "2024-08-23T02:08:23.000Z",
        "updatedAt": "2024-08-23T02:08:25.000Z"
      }
    ],
    "heights": [],
    "lengths": [],
    "fences": []
  },
  {
    "id": 17,
    "name": "Preasure Treated",
    "userId": 1,
    "createdAt": "2024-08-23T01:21:43.000Z",
    "updatedAt": "2024-08-23T01:21:45.000Z",
    "styles": [
      {
        "id": 27,
        "name": "BOB",
        "image": null,
        "categoryId": 17,
        "createdAt": "2024-08-23T01:37:31.000Z",
        "updatedAt": "2024-08-23T01:37:33.000Z"
      },
      {
        "id": 28,
        "name": "Dog Ear",
        "image": null,
        "categoryId": 17,
        "createdAt": "2024-08-23T01:37:53.000Z",
        "updatedAt": "2024-08-23T01:37:55.000Z"
      },
      {
        "id": 29,
        "name": "Split Rail With Wire",
        "image": null,
        "categoryId": 17,
        "createdAt": "2024-08-23T01:38:15.000Z",
        "updatedAt": "2024-08-23T01:38:17.000Z"
      },
      {
        "id": 30,
        "name": "Split Rail Without Wire",
        "image": null,
        "categoryId": 17,
        "createdAt": "2024-08-23T01:38:42.000Z",
        "updatedAt": "2024-08-23T01:38:44.000Z"
      }
    ],
    "colors": [
      {
        "id": 15,
        "name": "Pressure Treated",
        "image": null,
        "categoryId": 17,
        "createdAt": "2024-08-23T02:07:44.000Z",
        "updatedAt": "2024-08-23T02:07:47.000Z"
      }
    ],
    "heights": [],
    "lengths": [],
    "fences": []
  },
  {
    "id": 18,
    "name": "Vinyl",
    "userId": 1,
    "createdAt": "2024-08-23T01:22:00.000Z",
    "updatedAt": "2024-08-23T01:22:02.000Z",
    "styles": [
      {
        "id": 31,
        "name": "Aluminum Spindle Top",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:39:30.000Z",
        "updatedAt": "2024-08-23T01:39:33.000Z"
      },
      {
        "id": 32,
        "name": "Baltimore",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:40:10.000Z",
        "updatedAt": "2024-08-23T01:40:13.000Z"
      },
      {
        "id": 33,
        "name": "Brandywine",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:40:36.000Z",
        "updatedAt": "2024-08-23T01:40:38.000Z"
      },
      {
        "id": 34,
        "name": "Chestertown",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:41:01.000Z",
        "updatedAt": "2024-08-23T01:41:03.000Z"
      },
      {
        "id": 35,
        "name": "Chestertown with Aluminum",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:41:32.000Z",
        "updatedAt": "2024-08-23T01:41:33.000Z"
      },
      {
        "id": 36,
        "name": "Georgetown",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:41:58.000Z",
        "updatedAt": "2024-08-23T01:42:00.000Z"
      },
      {
        "id": 37,
        "name": "Lattice",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:42:44.000Z",
        "updatedAt": "2024-08-23T01:42:47.000Z"
      },
      {
        "id": 38,
        "name": "Picket",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:43:04.000Z",
        "updatedAt": "2024-08-23T01:43:06.000Z"
      },
      {
        "id": 39,
        "name": "Privacy",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:43:27.000Z",
        "updatedAt": "2024-08-23T01:43:30.000Z"
      },
      {
        "id": 40,
        "name": "Richmond and New Bedford",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:43:57.000Z",
        "updatedAt": "2024-08-23T01:43:59.000Z"
      },
      {
        "id": 41,
        "name": "Searsport",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:44:22.000Z",
        "updatedAt": "2024-08-23T01:44:23.000Z"
      },
      {
        "id": 42,
        "name": "Spindle Top",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:44:45.000Z",
        "updatedAt": "2024-08-23T01:44:47.000Z"
      },
      {
        "id": 43,
        "name": "Split Rail",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:45:06.000Z",
        "updatedAt": "2024-08-23T01:45:08.000Z"
      },
      {
        "id": 44,
        "name": "Wharton Creek",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:45:31.000Z",
        "updatedAt": "2024-08-23T01:45:33.000Z"
      },
      {
        "id": 45,
        "name": "Wilmington",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:46:03.000Z",
        "updatedAt": "2024-08-23T01:46:05.000Z"
      }
    ],
    "colors": [
      {
        "id": 8,
        "name": "Adobe",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:50:36.000Z",
        "updatedAt": "2024-08-23T01:50:39.000Z"
      },
      {
        "id": 9,
        "name": "Almond",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:51:00.000Z",
        "updatedAt": "2024-08-23T01:51:03.000Z"
      },
      {
        "id": 14,
        "name": "Khaki",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T01:53:10.000Z",
        "updatedAt": "2024-08-23T01:53:13.000Z"
      },
      {
        "id": 17,
        "name": "White",
        "image": null,
        "categoryId": 18,
        "createdAt": "2024-08-23T02:08:55.000Z",
        "updatedAt": "2024-08-23T02:08:57.000Z"
      }
    ],
    "heights": [],
    "lengths": [],
    "fences": []
  }
]