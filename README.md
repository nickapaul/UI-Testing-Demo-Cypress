# UI Automation Pipeline Demo

This repository contains a UI automation pipeline demo project, utilizing Cypress for UI testing and integrating with GitHub Actions for continuous integration and deployment. The setup is designed to facilitate the running of Cypress tests, generation of JUnit XML reports, and archiving of failure screenshots and videos for thorough analysis.

## Features

- **Cypress Integration**: Employs Cypress for comprehensive UI testing, offering a powerful framework for executing browser-based tests.
- **GitHub Actions Workflow**: Utilizes GitHub Actions to automate Cypress test executions based on specific triggers, streamlining the testing process.
- **JUnit Reporting**: Supports the generation of JUnit XML reports, enhancing test report visualization and integration with various CI tools.
- **Artifact Archiving**: Automatically archives failure screenshots and videos, simplifying the process of identifying and resolving issues.

## Prerequisites

To get started with this project, you will need:

- Node.js and npm (Node Package Manager)
- Git (for cloning the repository)

## Setup Instructions

### Clone the Repository

1. Clone the project repository to your local machine using Git:
   ```bash
   git clone <repository-url>

### Install Dependencies

2. Navigate to the project directory and install the required dependencies:
   ```bash
   cd <project-directory>
   npm install

## Running Tests

* To run Cypress tests manually, execute the following command in the terminal:
   ```bash
   npx cypress run

* For generating JUnit XML reports and specifying the output directory, use:
   ```bash
   npx cypress run --reporter junit --reporter-options "mochaFile=results/my-test-output.xml,toConsole=true"


## GitHub Actions Workflow
The project is configured with a GitHub Actions workflow named "UI Automation Pipeline Demo". This workflow is triggered manually (workflow_dispatch) and performs the following steps:
* **Checkout**: Checks out the source code for the workflow run.
* **Install Dependencies**: Installs the project dependencies using npm.
* **Run Cypress Tests and Generate JUnit XML Report**: Executes the Cypress tests and generates a JUnit XML report.
* **Archive Failure Screenshots**: Archives any failure screenshots generated during the test run.
* **Archive Video**: Archives videos of the test runs.
* **Publish Test Results**: Publishes the test results using the EnricoMi/publish-unit-test-result-action@v2.


### Workflow Configuration
Here is an excerpt from the manual.yml GitHub Actions workflow configuration:
```yml
name: UI Automation Pipeline Demo
on:
  workflow_dispatch:
permissions:
  checks: write
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install Dependencies
        run: npm install      
      - name: Run Cypress Tests and Generate JUnit XML Report        
        run: npx cypress run --reporter junit --reporter-options "mochaFile=results/my-test-output.xml,toConsole=true"
      - name: Archive Failure Screenshots 
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Screenshots
          path: cypress/screenshots/todo.cy.js/*
      - name: Archive Video 
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Video
          path: cypress/videos/*
      - name: Publish Test Results
        uses: EnricoMi/publish-unit-test-result-action@v2        
        if: always()
        with:
          files: |
```

## Artifacts
The workflow archives the following artifacts for each run:

* Failure screenshots (if any)
* Videos of the test runs
These artifacts can be found in the "Actions" tab of the GitHub repository, under the specific run.

## Contributing
Contributions to the project are welcome! Please refer to the project's contribution guidelines for more information on how you can contribute.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.