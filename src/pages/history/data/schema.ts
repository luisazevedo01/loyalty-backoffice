import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const scanSchema = z.object({
  id: z.string(),
  client: z.string(),
  typeOfLoyalty: z.string(),
  store: z.string(),
  date: z.string(),
})

export type Scan = z.infer<typeof scanSchema>
