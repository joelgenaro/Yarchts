import { UserSelect } from '@/db/schemas/users';
import { CategorySelect } from '@/db/schemas/categories';
import { StyleSelect } from '@/db/schemas/styles';
import { ColorSelect } from '@/db/schemas/colors';
import { HeightSelector } from '@/db/schemas/heights';
import { LengthSelect } from '@/db/schemas/lengths';
import { FenceSelect } from '@/db/schemas/fences';
import { Session } from "next-auth";
import { GateSelect } from '@/db/schemas/gates';
import { UserProfit } from './types';

// for calendar
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  extendedProps: {
    calendar: string;
  };
}

export interface CalendarCategory {
  label: string;
  value: string;
  activeClass?: string;
  className?: string;
}

// for companies
export interface CompanyViewProps {
  data: UserSelect[];
}

export interface CompanyGridProps {
  company: UserSelect;
}

// for style
export interface CreatableSelectionOptions {
  id?: number;
  value: string;
  label: string;
  image?: string;
  isFixed?: boolean;
  icon?: string;
}

export interface Style extends CategorySelect {
  styles: StyleSelect[];
  colors: ColorSelect[];
  heights: HeightSelector[];
  lengths: LengthSelect[];
  fences: FenceSelect[];
}

export interface StyleProps {
  styles: Style[];
  gates: GateSelect[];
  userProfit: UserProfit
}

export interface UserSession extends Session {
  user: {
    name: string;
    email: string;
    image?: string;
    id: number
  }
};
