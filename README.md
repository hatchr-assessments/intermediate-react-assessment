# React Customer Dashboard Assessment

## Introduction

This task is designed to test your React skills in creating a dashboard for customer management. The tasks in this assessment will challenge you to create functional components, implement services to handle API requests, and implement a strategy to make a search feature more efficient.

As an intermediate React developer, you are expected to have a good understanding of the fundamentals of React. You should be comfortable working with components, APIs, forms, and have solid knowledge of how to handle data efficiently in an application.

The assessment includes six tasks that build on each other and should take approximately 90 minutes to complete. We ask that you limit your total working time to 90 minutes for this assessment. Although the tasks are designed to be achievable within this timeframe, we encourage you to submit your assessment regardless of if you completed every question or not.

## The API

This project uses json-server (https://github.com/typicode/json-server) as a mock customer data REST API 

To spin up the mock backend you need to run the following command in the terminal:

`json-server --watch db.json --port 3004`

This will start a local server on port 3004

eg GET to `http://localhost:3004/customers` fetches all customers. While DELETE to `http://localhost:3004/customers/1` deletes the customer with `"id": 1`

## Task steps

1. Implement **`CustomerService`** methods for getting a list of customers, getting the details of a specific customer, updating a customer's details, adding a new customer and deleting an existing customer. Use the **`axios`** library to make the relevant HTTP requests to the mocked API. Make sure that your mock API is running (i.e. with `json-server --watch db.json --port 3004`).
2. Create a new component called **`CustomerListComponent`**. This component should display a list of customers, including their name and email address. Use the mocked customer data API to display the list of customers in the component.
3. Create a new component called **`CustomerFormComponent`**. This component should allow users to add a new customer with their name and email address. Use reactive forms to implement the form and validation. After submitting the form, add the new customer to the list in the **`CustomerListComponent`**.
4. Extend the **`CustomerListComponent`** created in the previous question to allow users to filter the list of customers by name. Add an input field to the component that allows users to enter a search query, and update the list of customers to show only those whose name matches the query.
5. Implement a mechanism for the search feature you added to the **`CustomerListComponent`** that you believe would improve the performance this feature. (eg. batch buffer, caching, debounce time, rate limiting)

## How to Submit

1. Fork the repository
2. Clone the repository to your local machine
3. Create a branch for task 1 and make your changes 
4. Create a branch for task 2 and your changes
4. Push your changes to your fork
5. Submit a pull request to the original repository
6. You can comment your PR with next steps, blockers, and comments if you would like

Note: Please submit the pull request within the 90 minute time window

Good luck, and we look forward to reviewing your submission!
