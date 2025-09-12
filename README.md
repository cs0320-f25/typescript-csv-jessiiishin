# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
1. parseCSV currently cannot group content that are wrapped in quotation marks
    so "hello, my name is" will become ["hello,] [my name is"]. It also doesn't understand
    that the double quotes are supposed to wrap the content. AKA the deliminator is only 
    ',' which limits the ways this parseCSV can be used.

2. It only returns in string, meaning I would have to convert the data into appropriate
    types manually which is annoying. It would be convenient for it to be able to convert
    specific fields into specific data types before handing it over to me, so that I don't
    have to worry about that after.

3. It currently has no safeguarding to csv files that have bad structure (missing columns,
    for example).

4. Similarly, it does not check whether the data in the csv file corresponds to what the
    user might expect, as shown with "expect(results[2]).toEqual(["Bob", "thirty"])" in 
    the basic parser test file.

    Like #2, it might be beneficial to allow users to input what types they are expecting
    and inform them if the data is not that type or convert it accordingly.

- #### Step 2: Use an LLM to help expand your perspective.

    I tried a few different versions that ranged from a one-liner to what was provided in the handout.
    It came up with:

    Edge Cases
    1. Quoting rules (escaped quotes, quoted fields)
    2. Delimiter flexibility (have the ability to choose other delimiter than ',')
    3. Handle line endings (\n)
    4. Handle empty values
    5. Handle files with and without headers
    6. Trim or not trim whitespace

    Extensions
    1. Streaming mode (parse line by line instead of files?)
    2. Infer types from fields
    3. Validation (let users supply a schema or validator to check each row) ?
    4. Error handling with bad input
    5. Async support (read from files, network streams, or in-browser File objects) ?
    6. Allow devs to specify type of parsed object
    7. Have a config object that exposes options
    8. Error reporting
    9. Export & parse (CSV -> JSON, JSON -> CSV)
    10. Multi character delimiters??
    11. Locale aware parsing (1.234,56 vs 1,234.56)??

    It seemed like it gave me usually the same answers just rephrased. The more detailed instructions I provided, the more suggestions it returned. Sometimes it gave me steps to write the CSV parser even though I didn't ask for it.

    Some of its suggestions overlapped with my initial thoughts, like the quoting rules or delimiters. 

- #### Step 3: use an LLM to help expand your perspective.

    1. **Quotation Wrapping:** (functionality)
        From LLM & me.

        As a user, I am able to store data that includes delimiters, like numbers that include commas, and still use the CSV parser to get the entirety of the data so that data isn't broken up unintentionally.
        
        Acceptance Criteria:
            - The user can retrieve data wrapped in double quotations (or something else) wholly even when it has delimiters in it
            - The CSV parser does not split on the delimiter if it's wrapped in double quotations (or whatever that indicates that the content is grouped)
            - The CSV parser correctly handles ncludes escape double quotations (quotations in the middle of quotations like "something "more" and more")
    
    2. **Type Inference / Config:** (extension)
        From LLM and me.
        
        As a user, I am able to specify what type of data each column should contain and have the parser return the data in that type, so that I can validate the data and not worry about typecasting later while using it.

        Acceptance Criteria:
            - CSV parser infers types from column data.
            - User can specify what data type each column contains.
            - Parser will validate the type and report if something does not align (connects to #3)

    3. **Error & Bad Input Handling:** (extension)
        From LLM and me.
        
        As a user, I am able to parse CSV files that may be partly broken or incomplete. I am also able to get reports on where there may be potential issues so that I can fix the CSV files or be aware of the issues to avoid further errors while using the data.

        Acceptance Criteria:
            - The CSV parser reports what row numbers may have broken data.
            - The CSV parser parses incomplete CSV files properly by putting "" (or something else like undefined) in place of missing columns.

    4. **Delimiter Flexibility:** (extension)
        From LLM.

        As a user, I am able to parse CSV files that do not use "," as the delimiter, meaning I do not have to manually change the delimiters of my CSV files to use the parser. I am able to efficiently work with many different CSV files. 

        Acceptance Criteria:
            - The CSV parser receives what delimiter it should split by and splits CSV file's data accordingly.
            - The CSV parser does not break when using a different delimiter.

    

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
    ChatGPT for Task B.

#### Total estimated time it took to complete project:
    5 hours
#### Link to GitHub Repo:  
