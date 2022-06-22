# Bank App: Front-End

This the repository containing all code necessary to run the front-end of the bank app webb application. 
## Getting Started

Download the project and navigate to the project directory. From there, run:

### `npm install`

To download all necessary package dependencies needed to run the app. Once the dependencies have been downloaded, make sure that the bank-app-back-end app is running. For further instructions, see the "Getting Started" section provided in the [bank-app-back-end]("https://github.com/ninuinu/bank-app-back-end") README.md. Once the server is running type in the following in the project root:

### `npm start`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Technologies and Libraries
The front-end is written in Typescript and React, and makes use of the following libraries:
* Redux-Tool-kit - A library for managing a global state object across components
* Thunk - A middleware for Redux in order to process asynchronous API calls to the back-end
* MUI - A UI library for better looking components

## Project Structure

  
         
    .    
    ├── src                    
    │    ├── App.module.css       # Main App component styling  
    │    ├── App.tsx              # Main App component  
    │    ├── Globals.d.ts         # Config file for running css.modules with typescript
    │    ├── index.tsx            # index file that renders the App component at root
    │    │
    │    ├── api                  # API endpoints for calling the back-end
    │    ├── components           # React Components and their styling
    │    └── store                # Redux files (such as slicers)
    │   
    └── README.md
    .
## App Functionality

The app makes use of the following APIs:
* GET accounts
* GET transactions
* POST account(name) 

Which enables users to:

* View all accounts
* View a detailed overview of a single account
* View transactions for a single account
* View a detailed overview of a single transaction
* Update the name of an acccount

## Future Improvements

* Implement additional features (delete account, update contact info, etc.)
* Implement tests
* Implement authentication 
* Improve design

