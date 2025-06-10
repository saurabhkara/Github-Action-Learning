### YAML

YAML ain't markup language

### Github Action

## First Practice

```
name: Greeting #Workflow
on: push #Event will trigger on push
jobs: #job
  greet: #job named greet
    runs-on: ubuntu-latest #will run on ubuntu machine
    steps:
      - name: "greet user" #This is a descriptive name for the step
        run: echo "Hello world!"

```

## Second Practice

Expression, Context

```
name: deploy dist #Workflow name
on: [push, workflow_dispatch] #Workflow triggers on push and manual dispatch
jobs: #jobs to run in the workflow
  test: # Job name
    runs-on: ubuntu-latest #runner environment(machine) to run the job
    steps: #steps to execute in the job
      - name: Get code # Step name
        run: | # | operator is used to run multiple lines of commands
          echo "Repo Cloning"
          echo "Repo ${{toJson(github)}}" #to print the repository information
          git clone https://github.com/${{github.repository}}.git

```

## Third Practice

Market Place for actions

```
name: marketPlaceexplore # Workflow name
on: [push, workflow_dispatch] #Workflow triggers on push and manual dispatch
jobs: # Define jobs to run in the workflow
  market: # Job name
    runs-on: ubuntu-latest # Runner environment(machine) to run the job
    steps: # Steps to execute in the job
      - name: get the code # Step name
        uses: actions/checkout@v4 #this step checks out the repository code and clones it to the runner
      - name: install node # Step to install Node.js
        uses: actions/setup-node@v4 # This action sets up a Node.js environment
        with:
          node-version: "20" # Specify the Node.js version to use
      - name: Get Node Version # Step to verify Node.js version
        run: node -v
      - name: install dependencies # Step to install project dependencies
        run: yarn install
      - name: Run testcases # Step to run the test cases
        run: yarn test

```

## To skip workflow trigger add [skip ci]

example

```
git commit -m "readme file updated [skip ci]"
git push
```
