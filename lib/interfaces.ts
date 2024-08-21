import { UserSelect } from '@/db/schemas/users';

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

// for style
export interface CreatableSelectionOptions {
  id?: string;
  value: string;
  label: string;
  isFixed?: boolean;
  icon?: string;
}

// for companies
export interface CompanyViewProps {
  data: UserSelect[];
}

export interface CompanyGridProps {
  company: UserSelect;
}

