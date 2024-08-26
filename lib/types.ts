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
export type State = {
    errors?: {
        styleId?: string[];
        heightId?: string[];
        colorId?: string[];
        lengthId?: string[];
        panelPrice?: string[];
        postPrice?: string[];
        lftPrice?: string[];
        thirdFeetGatePrice?: string[];
        foruthFeetGatePrice?: string[];
        fifthFeetGatePrice?: string[];
        eighthFeetGatePrice?: string[];
        tenthFeetGatePrice?: string[];
        heavyDutyEndPostPrice?: string[];
        endPostPrice?: string[];
        cornerPostPrice?: string[];
        flatCapPrice?: string[];
        gothicCapPrice?: string[];
        newEnglandCapPrice?: string[];
        federationCapPrice?: string[];
    };
    message?: string | null;
};

export type ValidStylePropNames = 'heavyDutyEndPostPrice' | 'cornerPostPrice' | 'endPostPrice' | 'flatCapPrice' | 'gothicCapPrice' | 'newEnglandCapPrice' | 'federationCapPrice' | 'lftPrice' | 'thirdFeetGatePrice' | 'foruthFeetGatePrice' | 'fifthFeetGatePrice' | 'eighthFeetGatePrice' | 'tenthFeetGatePrice' | 'panelPrice' | 'postPrice';

export type StyleTableColumn = {
    id: number;
    category: string;
    style: string;
    height: string;
    color: string;
    length: string;
    panelPrice: string;
    postPrice: string;
    lftPrice: string;
    thirdFeetGatePrice: string;
    foruthFeetGatePrice: string;
    fifthFeetGatePrice: string;
    eighthFeetGatePrice: string;
    tenthFeetGatePrice: string;
    heavyDutyEndPostPrice: string;
    endPostPrice: string;
    cornerPostPrice: string;
    flatCapPrice: string;
    gothicCapPrice: string;
    newEnglandCapPrice: string;
    federationCapPrice: string;
    image?: string;
};

