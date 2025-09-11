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

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

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
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
