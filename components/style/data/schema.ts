import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
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
