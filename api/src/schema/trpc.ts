import * as z from 'zod';

// Organisation ---------------------------------------
export type GetProduct = z.infer<typeof GetProduct>;
export const GetProduct = z.object({
  id: z.string(),
});
