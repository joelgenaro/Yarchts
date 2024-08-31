import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";
import { Style } from "@/lib/interfaces";
import { categories } from "@/db/schemas/categories";
import { CreatableSelectionOptions } from "@/lib/interfaces";
import { StyleTableColumn } from "@/lib/types";

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

export const getCategoryOptions = (styles: Style[]): CreatableSelectionOptions[] => {
  return styles.map((category) => ({
    id: category.id,
    value: category.name,
    label: category.name,
  }));
};

export const getCategories = (styles: Style[]) => {
  return styles.map((category) => ({
    value: category.name,
    label: category.name,
  }));
};

export const getStyleOptions = (styles: Style[], categoryId: number | undefined) => {
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

export const getFences = (styles: Style[]): StyleTableColumn[] => {
  let fences = styles.flatMap((style) => {
    return style.fences.map((fence) => {
      return {
        id: fence.id,
        category: style.name,
        style: style.styles.find((s) => s.id === fence.styleId)?.name ?? '',
        height: style.heights.find((h) => h.id === fence.heightId)?.name ?? '',
        color: style.colors.find((c) => c.id === fence.colorId)?.name ?? '',
        length: style.lengths.find((l) => l.id === fence.lengthId)?.name ?? '',
        panelPrice: fence.panelPrice?.toString() ?? '',
        postPrice: fence.postPrice?.toString() ?? '',
        lftPrice: fence.lftPrice?.toString() ?? '',
        thirdFeetGatePrice: fence.thirdFeetGatePrice?.toString() ?? '',
        foruthFeetGatePrice: fence.foruthFeetGatePrice?.toString() ?? '',
        fifthFeetGatePrice: fence.fifthFeetGatePrice?.toString() ?? '',
        eighthFeetGatePrice: fence.eighthFeetGatePrice?.toString() ?? '',
        tenthFeetGatePrice: fence.tenthFeetGatePrice?.toString() ?? '',
        heavyDutyEndPostPrice: fence.heavyDutyEndPostPrice?.toString() ?? '',
        endPostPrice: fence.endPostPrice?.toString() ?? '',
        cornerPostPrice: fence.cornerPostPrice?.toString() ?? '',
        flatCapPrice: fence.flatCapPrice?.toString() ?? '',
        gothicCapPrice: fence.gothicCapPrice?.toString() ?? '',
        newEnglandCapPrice: fence.newEnglandCapPrice?.toString() ?? '',
        federationCapPrice: fence.federationCapPrice?.toString() ?? '',
        image: fence.image ?? '',
        isActive: fence.isActive ?? false,
      };
    });
  });

  fences.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    if ((a.style || '').localeCompare(b.style || '')) return (a.style || '').localeCompare(b.style || '');
    if ((a.height || '').localeCompare(b.height || '')) return (a.height || '').localeCompare(b.height || '');
    if ((a.color || '').localeCompare(b.color || '')) return (a.color || '').localeCompare(b.color || '');
    if ((a.length || '').localeCompare(b.length || '')) return (a.length || '').localeCompare(b.length || '');
    return 0;
  });

  return fences;
};

export const getFence = (id: number, styles: Style[]) => {
  for (const style of styles) {
    const child = style.fences.find(fence => fence.id === id);
    if (child) {
      return child;
    }
  }
  return null;
};
