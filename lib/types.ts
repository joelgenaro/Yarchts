import { CreatableSelectionOptions } from "@/lib/interfaces";

// color type
export type color = "primary" | "info" | "warning" | "success" | "destructive" | "secondary";
export type TextAreaColor = "primary" | "info" | "warning" | "success" | "destructive";
export type InputColor = "primary" | "info" | "warning" | "success" | "destructive";

//  variant
export type InputVariant = "flat" | "underline" | "bordered" | "faded" | "ghost" | "flat-underline"
export type TextAreaVariant = "flat" | "underline" | "bordered" | "faded" | "ghost" | "flat-underline"

// shadow 
export type Shadow = "none" | "sm" | "md" | "lg" | "xl" | "2xl"

// radius 
export type Radius = "none" | "sm" | "md" | "lg" | "xl"

// for companies
export type CompanyData = {
    text: string;
    total: number;
    color: string;
    icon: JSX.Element;
};

// for style
export type ValidStylePropNames = 'heavyDutyEndPostPrice' | 'cornerPostPrice' | 'endPostPrice' | 'flatCapPrice' | 'gothicCapPrice' | 'newEnglandCapPrice' | 'federationCapPrice' | 'lftPrice' | 'thirdFeetGatePrice' | 'foruthFeetGatePrice' | 'fifthFeetGatePrice' | 'eighthFeetGatePrice' | 'tenthFeetGatePrice' | 'panelPrice' | 'postPrice';

export type StyleTableColumn = {
    id: number;
    category: string;
    style: string;
    height: string;
    color: string;
    length: string;
    panelPrice: string | null;
    postPrice: string | null;
    lftPrice: string | null;
    thirdFeetGatePrice: string | null;
    foruthFeetGatePrice: string | null;
    fifthFeetGatePrice: string | null;
    eighthFeetGatePrice: string | null;
    tenthFeetGatePrice: string | null;
    heavyDutyEndPostPrice: string | null;
    endPostPrice: string | null;
    cornerPostPrice: string | null;
    flatCapPrice: string | null;
    gothicCapPrice: string | null;
    newEnglandCapPrice: string | null;
    federationCapPrice: string | null;
    image: string | null;
    isActive: boolean;
};

export type FormState = {
    categoryId: number | null | undefined;
    category: CreatableSelectionOptions | null | undefined;
    styleId: number | null | undefined;
    style: CreatableSelectionOptions | null | undefined;
    styleOptions: CreatableSelectionOptions[];
    heightId: number | null | undefined;
    height: CreatableSelectionOptions | null | undefined;
    heightOptions: CreatableSelectionOptions[];
    colorId: number | null | undefined;
    color: CreatableSelectionOptions | null | undefined;
    colorOptions: CreatableSelectionOptions[];
    lengthId: number | null | undefined;
    length: CreatableSelectionOptions | null | undefined;
    lengthOptions: CreatableSelectionOptions[];
    heavyDutyEndPostPrice: number,
    cornerPostPrice: number,
    endPostPrice: number,
    flatCapPrice: number,
    gothicCapPrice: number,
    newEnglandCapPrice: number,
    federationCapPrice: number,
    lftPrice: number,
    thirdFeetGatePrice: number,
    foruthFeetGatePrice: number,
    fifthFeetGatePrice: number,
    eighthFeetGatePrice: number,
    tenthFeetGatePrice: number,
    panelPrice: number,
    postPrice: number,
    image: string | null | undefined;
}

