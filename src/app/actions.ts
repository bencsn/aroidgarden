"use server";

import { z } from "zod";

interface GenericIssue {
  code: string;
  message: string;
}

const specimentInputSchema = z.object({
  genus: z.string(),
  species: z.string(),
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
    console.log(error);
    if (error instanceof z.ZodError) {
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
