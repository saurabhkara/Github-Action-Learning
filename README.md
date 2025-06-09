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
