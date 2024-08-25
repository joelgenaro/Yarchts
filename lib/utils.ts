import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";
import { Style } from "@/lib/interfaces";
import { categories } from "@/db/schemas/categories";
import { CreatableSelectionOptions } from "@/lib/interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isLocationMatch = (
  targetLocation: any,
  locationName: any
): boolean => {
  return (
    locationName === targetLocation ||
    locationName.startsWith(`${targetLocation}/`)
  );
};

export const RGBToHex = (r: number, g: number, b: number): string => {
  const componentToHex = (c: number): string => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const redHex: string = componentToHex(r);
  const greenHex: string = componentToHex(g);
  const blueHex: string = componentToHex(b);

  return "#" + redHex + greenHex + blueHex;
};

export function hslToHex(hsl: string): string {
  // Remove "hsla(" and ")" from the HSL string
  let hslValues = hsl.replace("hsla(", "").replace(")", "");

  // Split the HSL string into an array of H, S, and L values
  const [h, s, l] = hslValues.split(" ").map((value) => {
    if (value.endsWith("%")) {
      // Remove the "%" sign and parse as a float
      return parseFloat(value.slice(0, -1));
    } else {
      // Parse as an integer
      return parseInt(value);
    }
  });

  // Function to convert HSL to RGB
  function hslToRgb(h: number, s: number, l: number): string {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    // Convert RGB values to integers
    const rInt = Math.round(r * 255);
    const gInt = Math.round(g * 255);
    const bInt = Math.round(b * 255);

    // Convert RGB values to a hex color code
    const rgbToHex = (value: number): string => {
      const hex = value.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${rgbToHex(rInt)}${rgbToHex(gInt)}${rgbToHex(bInt)}`;
  }

  // Call the hslToRgb function and return the hex color code
  return hslToRgb(h, s, l);
}


export const hexToRGB = (hex: string, alpha?: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const formatTime = (time: number | Date | string): string => {
  if (!time) return "";

  const date = new Date(time);
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedTime;
};

// object check
export function isObjectNotEmpty(obj: any): boolean {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return Object.keys(obj).length > 0;
}

export const formatDate = (date: string | number | Date | null): string => {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};



// random word
export function getWords(inputString: string): string {
  // Remove spaces from the input string
  const stringWithoutSpaces = inputString.replace(/\s/g, "");

  // Extract the first three characters
  return stringWithoutSpaces.substring(0, 3);
}


// for path name
export function getDynamicPath(pathname: any): any {
  const prefixes = ["en", "bn", "ar"];

  for (const prefix of prefixes) {
    if (pathname.startsWith(`/${prefix}/`)) {
      return `/${pathname.slice(prefix.length + 2)}`;
    }
  }

  return pathname;
}

// translate

interface Translations {
  [key: string]: string;
}

export const translate = (title: string, trans: Translations): string => {
  const lowercaseTitle = title.toLowerCase();

  if (trans?.hasOwnProperty(lowercaseTitle)) {
    return trans[lowercaseTitle];
  }

  return title;
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
}

export const createSelectionOption = (label: string) => ({
  id: undefined,
  label,
  value: label,
});

export const styles = [
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

export const getCategoryOptions = (styles: Style[]): CreatableSelectionOptions[] => {
  return styles.map((category) => ({
    id: category.id,
    value: category.name,
    label: category.name,
  }));
};

export const getStyleOptions = (styles: Style[], categoryId: number) => {
  const data = styles.find((category) => category.id === categoryId);

  const styleOption = data?.styles.map((style) => ({
    id: style.id,
    value: style.name,
    label: style.name,
  })) || [];

  const colorOption = data?.colors.map((color) => ({
    id: color.id,
    value: color.name,
    label: color.name,
  })) || [];

  const heightOption = data?.heights.map((height) => ({
    id: height.id,
    value: height.name,
    label: height.name,
  })) || [];

  const lengthOption = data?.lengths.map((length) => ({
    id: length.id,
    value: length.name,
    label: length.name,
  })) || [];

  return { styleOption, colorOption, heightOption, lengthOption };

};

export const getFences = (styles: Style[]) => {
  return styles;
}






