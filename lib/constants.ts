import { ValidStylePropNames } from "./types";

// for style
export const styleProperties: { label: string, name: ValidStylePropNames }[] = [{ label: '$/Lft Price', name: 'lftPrice' }, { label: '3 Feet Gate Price', name: 'thirdFeetGatePrice' }, { label: '4 Feet Gate Price', name: 'foruthFeetGatePrice' }, { label: '5 Feet Gate Price', name: 'fifthFeetGatePrice' }, { label: '8 Feet Gate Price', name: 'eighthFeetGatePrice' }, { label: '10 Feet Gate Price', name: 'tenthFeetGatePrice' }, { label: 'Panel Price', name: 'panelPrice' }, { label: 'Post Price', name: 'postPrice' }, { label: 'Heavy Duty End Post Price', name: 'heavyDutyEndPostPrice' }, { label: 'End Posts Price', name: 'endPostPrice' }, { label: 'Corner Posts Price', name: 'cornerPostPrice' }, { label: 'Flat Cap Price', name: 'flatCapPrice' }, { label: 'Gothic Cap Price', name: 'gothicCapPrice' }, { label: 'New England Cap Price', name: 'newEnglandCapPrice' }, { label: 'Federation Cap Price', name: 'federationCapPrice' }];

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