'use server';

/**
 * @fileOverview AI-powered mission statement generator for businesses.
 *
 * - generateMissionStatement - A function that generates a mission statement based on company information.
 * - GenerateMissionStatementInput - The input type for the generateMissionStatement function.
 * - GenerateMissionStatementOutput - The return type for the generateMissionStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMissionStatementInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('A brief description of the company and its goals.'),
  productsAndServices: z
    .string()
    .describe('A description of the products and services offered.'),
  coreValues: z.string().describe('The core values that drive the company.'),
});
export type GenerateMissionStatementInput = z.infer<
  typeof GenerateMissionStatementInputSchema
>;

const GenerateMissionStatementOutputSchema = z.object({
  missionStatement: z
    .string()
    .describe('A compelling mission statement for the company.'),
});
export type GenerateMissionStatementOutput = z.infer<
  typeof GenerateMissionStatementOutputSchema
>;

export async function generateMissionStatement(
  input: GenerateMissionStatementInput
): Promise<GenerateMissionStatementOutput> {
  return generateMissionStatementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMissionStatementPrompt',
  input: {schema: GenerateMissionStatementInputSchema},
  output: {schema: GenerateMissionStatementOutputSchema},
  prompt: `You are an expert in crafting mission statements for businesses.

  Based on the information provided about the company, create a compelling and concise mission statement that captures the company's purpose and values.

  Company Description: {{{companyDescription}}}
  Products and Services: {{{productsAndServices}}}
  Core Values: {{{coreValues}}}

  Mission Statement:`,
});

const generateMissionStatementFlow = ai.defineFlow(
  {
    name: 'generateMissionStatementFlow',
    inputSchema: GenerateMissionStatementInputSchema,
    outputSchema: GenerateMissionStatementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
