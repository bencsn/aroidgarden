"use server";

import { z } from "zod";
import { GenericIssue } from "./utils/errors/GenericIssue";

const specimentInputSchema = z.object({
  genus: z.string().nonempty(),
  species: z.string().nonempty(),
  subspecies: z.string().optional(),
  variety: z.string().optional(),
  passcode: z.string().min(6),
});

export async function addSpecimen(data: FormData) {
  // Convert FormData to object and validate it
  const inputAsObject = Object.fromEntries(data.entries());
  let input: z.infer<typeof specimentInputSchema>;
  try {
    input = specimentInputSchema.parse(inputAsObject);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(error.issues);
      return { issues: error.issues };
    }
    return {
      issues: [
        {
          code: "unknown",
          message: "Unknown error",
        },
      ] as GenericIssue[],
    };
  }

  console.log(input);
  return {};
}
