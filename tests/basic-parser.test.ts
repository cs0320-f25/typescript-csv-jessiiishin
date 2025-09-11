import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const EXAMS_CSV_PATH = path.join(__dirname, "../data/exams.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV can successfully parse csvs with empty columns", async () => {
  const results = await parseCSV(EXAMS_CSV_PATH)

  expect(results).toHaveLength(6);

  expect(results[1][0]).toEqual("Nala Thomas");
  expect(results[1][1]).toEqual("A");
  expect(results[1][2]).toEqual("");
  
  expect(results[2][0]).toEqual("");
  expect(results[2][1]).toEqual("");
  expect(results[2][2]).toEqual("");

  expect(results[3][0]).toEqual("Logan Bush");
  expect(results[3][1]).toEqual("");
  expect(results[3][2]).toEqual("95");

  expect(results[4][0]).toEqual("Ronald Duke");
  expect(results[4][1]).toEqual("");
  expect(results[4][2]).toEqual("95");

  expect(results[5][0]).toEqual("Rey Olson");
  expect(results[5][1]).toEqual("B");
  expect(results[5][2]).toEqual("90");
});

test("parseCSV ")

test("parseCSV groups strings that are wrapped with quotations", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH)
  
  expect(results).toHaveLength(4);
  expect(results[1][0]).toEqual("Oscar Wilde");
  expect(results[1][1]).toEqual("Be yourself; everyone else is already taken.");

  expect(results[2][0]).toEqual("Frank Zappa");
  expect(results[2][1]).toEqual("So many books, so little time");

  expect(results[3][0]).toEqual("Frank Zappa");
  expect(results[3][1]).toEqual("So many books, so little time");

  expect(results[4][0]).toEqual("W.C. Fields");
  expect(results[4][1]).toEqual("I am free of all prejudice. I hate everyone equally.");
});

