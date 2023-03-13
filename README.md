# React Customer Dashboard Assessment

## Introduction

This assessment is designed to test your React fundamentals. The tasks in this assessment will challenge you to create functional components, implement a service to handle API requests, and use routing to navigate between components.

As a junior React developer, you are expected to have a good understanding of the fundamentals of React and be able to create basic applications. You should be comfortable working with components, services, and routing, and have a basic knowledge of how to handle data in an application.

The assessment includes six tasks that build on each other and should take approximately 90 minutes to complete. We ask that you limit your total working time to 90 minutes for this assessment. Although the tasks are designed to be achievable within this timeframe, we encourage you to submit your assessment regardless of if you completed every question or not.

## The API

This project uses json-server (https://github.com/typicode/json-server) as a mock customer data REST API 

To spin up the mock backend you need to run the following command in the terminal:

`json-server --watch db.json --port 3004`

This will start a local server on port 3004

eg GET to `http://localhost:3004/customers` fetches all customers. While DELETE to `http://localhost:3004/customers/1` deletes the customer with `"id": 1`

## Task steps

1. Create a new component called **`CustomerListComponent`**. This component should display a list of customers, including their name and email address. Use the mocked **`customers`** data provided to you to display the list of customers in the component.
2. Add a new service called **`CustomerService`** to the application. The **`CustomerService`** should provide methods for getting a list of customers, getting the details of a specific customer, and updating a customer's details. Use the **`axios`** library to make the relevant HTTP requests to the mocked API.
3. Extend the **`CustomerListComponent`** created in the previous question to allow users to filter the list of customers by name. Add an input field to the component that allows users to enter a search query, and update the list of customers to show only those whose name matches the query. Use the **`filter()`** method to perform the filtering on the customer data returned from the **`CustomerService`**.
4. Create a new component called **`CustomerDetailsComponent`**. This component should display the details of a single customer, including their name, email address, and a list of their orders. Use the **`CustomerService`** to make the relevant HTTP requests to the mocked API to get the customer and order details.
5. Extend the **`CustomerListComponent`** created in the previous question to allow users to click on a customer in the list and view their details in the **`CustomerDetailsComponent`**. When a user clicks on a customer in the list, navigate to the **`CustomerDetailsComponent`** and display the selected customer's details.
6. Discuss and suggest any improvements or changes you could make to this project improve performance, state management, or SEO. Explain your reasoning for your proposed changes.

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
