import * as fs from "fs";
import * as readline from "readline";
import { z } from "zod";

/**
 * This is a JSDoc comment. Similar to JavaDoc, it documents a public-facing
 * function for others to use. Most modern editors will show the comment when 
 * mousing over this function name. Try it in run-parser.ts!
 * 
 * File I/O in TypeScript is "asynchronous", meaning that we can't just
 * read the file and return its contents. You'll learn more about this 
 * in class. For now, just leave the "async" and "await" where they are. 
 * You shouldn't need to alter them.
 * 
 * @param path The path to the file being loaded.
 * @returns a "promise" to produce a 2-d array of cell values
 */
export async function parseCSV<T>(path: string, schema: z.ZodType<T> | undefined): Promise<T[] | string[][]> {

  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // handle different line endings
  });
  
  if (!schema) { // default behavior
    const result: string[][] = [];
    for await (const line of rl) {
      const values = line.split(",").map((v) => v.trim());
      result.push(values)
    }
    return result
  } 
  
  else { // if schema is given, validate data
    let rowNumber = 0;
    const result: T[] = [];

    for await (const line of rl) {
      const values = line.split(",").map((v) => v.trim());
      const safeLine = schema.safeParse(values)
      rowNumber++;

      if (safeLine.success) {
        result.push(safeLine.data)
      } else {
        throw new Error(`Row ${rowNumber} does not match provided schema.\n 
          ZodError: ${safeLine.error}`);
      }
    }
    return result
  }
}