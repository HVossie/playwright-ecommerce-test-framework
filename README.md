# Playwright E-commerce Test Automation Framework

![Playwright Tests](https://github.com/HVossie/playwright-ecommerce-test-framework/actions/workflows/playwright.yml/badge.svg)

An end-to-end test automation framework built with Playwright and TypeScript for core e-commerce user journeys such as login, product selection, and cart validation.

This project was built to practice structured UI automation, reusable test design, cross-browser coverage, and CI-based test execution in a clean portfolio-ready setup.

## Features

- End-to-end UI test automation with Playwright
- Cross-browser coverage for Chromium, Firefox, and WebKit
- Page Object Model structure for reusable page interactions
- Positive and negative login test coverage
- Cart add/remove test coverage
- HTML reporting for test review
- GitHub Actions workflow for automated test runs

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## Test Coverage

The current suite covers these user flows:

### Authentication

- Successful login with valid credentials
- Error handling for invalid login attempts

### Product and Cart

- Add a product to the cart
- Verify the product appears in the cart
- Remove a product from the cart
- Verify the cart updates correctly after removal

## How to Run

1. Clone the repository

```bash
git clone https://github.com/HVossie/playwright-ecommerce-test-framework.git
```

2. Navigate into the project

```bash
cd playwright-ecommerce-test-framework
```

3. Install dependencies

```bash
npm install
```

4. Install Playwright browsers

```bash
npx playwright install
```

5. Run the test suite

```bash
npx playwright test
```

6. Open the HTML report

```bash
npx playwright show-report
```

## Test Execution

The suite runs across:

- Chromium
- Firefox
- WebKit

For a visible browser run during debugging:

```bash
npx playwright test --headed
```

## Project Structure

```text
playwright-ecommerce-test-framework/
|-- .github/
|   `-- workflows/
|       `-- playwright.yml      # CI workflow for automated test execution
|-- pages/                      # Page Object Model classes
|   |-- CartPage.ts
|   |-- LoginPage.ts
|   `-- ProductsPage.ts
|-- screenshots/                # Images used in the README
|-- tests/                      # Playwright test specifications
|   |-- cart.spec.ts
|   `-- login.spec.ts
|-- playwright.config.ts        # Playwright configuration
|-- package.json
|-- package-lock.json
|-- README.md
`-- .gitignore
```

## Test Report Preview

### Test Summary
![Test Report Overview](screenshots/report-overview.png)

### Test Details
![Test Detail](screenshots/test-detail.png)

### Test Execution
![Test Run](screenshots/test-run.png)

## What I Learned

- Building end-to-end UI automation with Playwright
- Structuring tests with the Page Object Model
- Writing reusable and maintainable test code
- Running the same suite across multiple browsers
- Using GitHub Actions for automated test execution
- Reviewing failures and traces through Playwright reporting tools

## Possible Improvements

- Add checkout flow coverage
- Add API-level test coverage alongside UI tests
- Expand test scenarios for additional edge cases
- Improve test data handling for larger suites
- Add more advanced reporting or dashboards

## Author

- Hanroux Vos
