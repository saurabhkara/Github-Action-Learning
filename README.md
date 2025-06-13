## YAML

YAML ain't markup language

YAML is a human-readable data serialization language used for configuration files and data exchange.

## Github Action

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline

### First Practice

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

### Second Practice

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

### Third Practice

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

## Parallel and Sequentially workflow

Parallel execution, where multiple jobs run concurrently, is the default behavior.

To run jobs sequentially, you need to define dependencies using needs keyword.

### Fourth Practice

```
name: TestAndDeploy
on: [push, workflow_dispatch]
jobs:
  testcase:
    runs-on: ubuntu-latest
    steps:
      - name: clone the repo
        uses: actions/checkout@v4
      - name: Install node js
        uses: actions/setup-node@v4 # This action sets up a Node.js environment
        with:
          node-version: "20"
      - name: Install Dependencies
        run: |
          yarn install
          yarn test
  deploy:
    needs: testcase #this job will start running once it testcase job will be done
    runs-on: ubuntu-latest
    steps:
      - name: clone the repo
        uses: actions/checkout@v4
      - name: install node
        uses: actions/setup-node@v4
      - name: Install Dependencies
        run: yarn install
      - name: Build the project
        run: echo "Building Project"
```

## Caching

To make your workflows faster and more efficient, you can create and use caches for dependencies and other commonly reused files

### Fifth Practice

```
name: Cache and Deploy
on: [workflow_dispatch,push]
jobs:
  CloneRepo:
    runs-on: ubuntu-latest
    steps:
      - name: clone the repo
        uses: actions/checkout@v4
      - name: Install the node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Cache Dependencies
        uses: actions/cache@v4 # this action is used to cache the job
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
      - name: Install dependencies and test
        run: |
          yarn install
  BuildDeploy:
    needs: CloneRepo
    runs-on: ubuntu-latest
    steps:
      - name: clone the repo
        uses: actions/checkout@v4
      - name: Install the node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Get Cached Dependencies
        uses: actions/cache@v4 # action to get cached data
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Build the react project
        run: |
          yarn install
          yarn build
      - name: Print
        run: echo " Build generated successfully"
```

## Filter

Filter the branches and files

### sixth Practice

```

name: filterBranch
on:
  push:
    branches:
      - main
    paths-ignore:
      - ".github/workflows/*"
      - "README.md"
jobs:
  filter:
    runs-on: ubuntu-latest
    steps:
      - name: run the workflow
        run: echo 'Successfully running'

```
