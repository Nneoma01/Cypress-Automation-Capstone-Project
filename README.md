Project Overview
This project is an end-to-end test automation framework built using Cypress to validate key user flows on the QA Automation Labs website.
The goal of this project is to ensure that critical features such as navigation, authentication, and shopping functionalities work correctly across different environments.
The framework is designed to be scalable, maintainable, and CI-ready, following best practices in test automation.


Application Under Test (AUT)
The application under test is QA Automation Labs, an educational platform that provides learning resources, blog content, and an integrated e-commerce experience.
Primary URLs tested:
1. https://qaautomationlabs.com/
2. https://shop.qaautomationlabs.com/

Key features tested include:
1. Homepage navigation and menu validation
2. User login functionality
3. Shopping categories and product listings


Tools and Technologies Used
1. Cypress – End-to-end test automation
2. JavaScript – Test scripting language
3. Node.js – Runtime environment
4. Git – Version control
5. GitHub Actions – Continuous Integration (CI)


Framework Architecture (Page Object Model – POM)
This project follows the Page Object Model (POM) design pattern.
1. Each page of the application has its own class
2. Page classes contain element locators and page-specific actions
3. Test files focus only on test logic and assertions
   This appproach improves readabilty, reusability and maintainability.
   
Project Structure
   cypress/
 ├── e2e/
 │    ├── home.cy.js
 │    ├── login.cy.js
 │    └── shop.cy.js
 │
 ├── support/
 │    └── Pages/
 │         ├── homePage.js
 │         ├── loginPage.js
 │         └── shopPage.js



 Installation and Setup Instructions
 1. clone the repository 
 git clone https://github.com/Nneoma01/Cypress-Automation-Capstone-Project.git

2. navigate to project folder
   cd Cypress-Automation-Capstone-Project

3. install dependencies
   npm install


How to run tests
1. Cypress GUI mode : npx cypress open
2. Headless mode : npx cypress run


Test Coverage Summary
The automation suite currently covers the following scenarios:
1. Login functionality with valid credentials, invalid credentials and empty fields
2. Homepage menu and navigation validation
3. Shopping page validations


CI/CD Integration Explanation
This project is integrated with GitHub Actions to enable continuous integration.
Whenever code is pushed to the repository or a pull request is created, the Cypress tests automatically run in headless mode.
This helps to catch issues early, prevent regressions and Ensure consistent test execution across environments.


GitHub Actions Workflow Overview
The GitHub Actions workflow performs the following steps:
1. Triggers on push request
2. Sets up Node.js
3. Installs project dependencies
4. Runs Cypress tests in headless mode

  his project demonstrates the use of Cypress for modern web test automation, proper framework design using POM, and seamless CI/CD integration using GitHub Actions.


   
