import { FormState, GateLabor, OurStyleFormState, ourStyleFormValidStylePropNames, StyleLaborForm, UserProfit, ValidStylePropNames } from "@/lib/types";
import { z } from "zod";
import { CategoryRemoval } from "@/lib/types";

// for style
export const styleProperties: { label: string, name: ValidStylePropNames }[] = [{ label: '$/Lft Price', name: 'lftPrice' }, { label: '3 Feet Gate Price', name: 'thirdFeetGatePrice' }, { label: '4 Feet Gate Price', name: 'foruthFeetGatePrice' }, { label: '5 Feet Gate Price', name: 'fifthFeetGatePrice' }, { label: '8 Feet Gate Price', name: 'eighthFeetGatePrice' }, { label: '10 Feet Gate Price', name: 'tenthFeetGatePrice' }, { label: 'Panel Price', name: 'panelPrice' }, { label: 'Post Price', name: 'postPrice' }, { label: 'Heavy Duty End Post Price', name: 'heavyDutyEndPostPrice' }, { label: 'End Posts Price', name: 'endPostPrice' }, { label: 'Corner Posts Price', name: 'cornerPostPrice' }, { label: 'Flat Cap Price', name: 'flatCapPrice' }, { label: 'Gothic Cap Price', name: 'gothicCapPrice' }, { label: 'New England Cap Price', name: 'newEnglandCapPrice' }, { label: 'Federation Cap Price', name: 'federationCapPrice' }];

export const ourStyleProperties: { label: string, name: ourStyleFormValidStylePropNames }[] = [{ label: '$/Lft Price', name: 'ourLftPrice' }, { label: '3 Feet Gate Price', name: 'ourThirdFeetGatePrice' }, { label: '4 Feet Gate Price', name: 'ourForuthFeetGatePrice' }, { label: '5 Feet Gate Price', name: 'ourFifthFeetGatePrice' }, { label: '8 Feet Gate Price', name: 'ourEighthFeetGatePrice' }, { label: '10 Feet Gate Price', name: 'ourTenthFeetGatePrice' }, { label: 'Panel Price', name: 'ourPanelPrice' }, { label: 'Post Price', name: 'ourPostPrice' }, { label: 'Heavy Duty End Post Price', name: 'ourHeavyDutyEndPostPrice' }, { label: 'End Posts Price', name: 'ourEndPostPrice' }, { label: 'Corner Posts Price', name: 'ourCornerPostPrice' }, { label: 'Flat Cap Price', name: 'ourFlatCapPrice' }, { label: 'Gothic Cap Price', name: 'ourGothicCapPrice' }, { label: 'New England Cap Price', name: 'ourNewEnglandCapPrice' }, { label: 'Federation Cap Price', name: 'ourFederationCapPrice' }];

export const creatableSelectionStyles = {
    multiValue: (base: any, state: any) => {
        return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
    },
    multiValueLabel: (base: any, state: any) => {
        return state.data.isFixed
            ? { ...base, color: "#626262", paddingRight: 6 }
            : base;
    },
    multiValueRemove: (base: any, state: any) => {
        return state.data.isFixed ? { ...base, display: "none" } : base;
    },
    option: (provided: any, state: any) => ({
        ...provided,
        fontSize: "14px",
    }),
};

export const styleForm: FormState = {
    categoryId: null,
    category: null,
    styleId: null,
    style: null,
    styleOptions: [],
    heightId: null,
    height: null,
    heightOptions: [],
    colorId: null,
    color: null,
    colorOptions: [],
    lengthId: null,
    length: null,
    lengthOptions: [],
    heavyDutyEndPostPrice: 0,
    cornerPostPrice: 0,
    endPostPrice: 0,
    flatCapPrice: 0,
    gothicCapPrice: 0,
    newEnglandCapPrice: 0,
    federationCapPrice: 0,
    lftPrice: 0,
    thirdFeetGatePrice: 0,
    foruthFeetGatePrice: 0,
    fifthFeetGatePrice: 0,
    eighthFeetGatePrice: 0,
    tenthFeetGatePrice: 0,
    panelPrice: 0,
    postPrice: 0,
    image: '',
};

export const statuses = [
    {
        value: "Activated",
        label: "Activated",
    },
    {
        value: "Deactivated",
        label: "Deactivated",
    },
]

export const styleSchema = z.object({
    id: z.number(),
    category: z.string(),
    style: z.string(),
    height: z.string(),
    color: z.string(),
    length: z.string(),
    panelPrice: z.string(),
    postPrice: z.string(),
    lftPrice: z.string(),
    thirdFeetGatePrice: z.string(),
    foruthFeetGatePrice: z.string(),
    fifthFeetGatePrice: z.string(),
    eighthFeetGatePrice: z.string(),
    tenthFeetGatePrice: z.string(),
    heavyDutyEndPostPrice: z.string(),
    endPostPrice: z.string(),
    cornerPostPrice: z.string(),
    flatCapPrice: z.string(),
    gothicCapPrice: z.string(),
    newEnglandCapPrice: z.string(),
    federationCapPrice: z.string(),
    isActive: z.boolean(),
    image: z.string()
});

export const styleLaborForm: StyleLaborForm = {
    category: null,
    categoryOptions: [],
    style: null,
    styleOptions: [],
    laborPrice: '0',
    minProfit: '0',
};

export const categoryRemoval: CategoryRemoval = {
    category: null,
    removalCharge: '0',
};

export const gateLabor: GateLabor = {
    gate: null,
    laborPrice: '0',
};

export const userProfit: UserProfit = {
    minProfit: '0',
    holePrice: '0',
};

export const ourStyleFormState: OurStyleFormState = {
    id: null,
    category: null,
    style: null,
    height: null,
    color: null,
    length: null,
    ourHeavyDutyEndPostPrice: 0,
    ourCornerPostPrice: 0,
    ourEndPostPrice: 0,
    ourFlatCapPrice: 0,
    ourGothicCapPrice: 0,
    ourNewEnglandCapPrice: 0,
    ourFederationCapPrice: 0,
    ourLftPrice: 0,
    ourThirdFeetGatePrice: 0,
    ourForuthFeetGatePrice: 0,
    ourFifthFeetGatePrice: 0,
    ourEighthFeetGatePrice: 0,
    ourTenthFeetGatePrice: 0,
    ourPanelPrice: 0,
    ourPostPrice: 0,
    image: ''
};
