# Coding Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## External Libraries

[Material UI](https://mui.com/)

## Resources

[Wireframe](https://directidcdnstorage.blob.core.windows.net/test-data/Wireframe_v1.1.png?sv=2020-08-04&st=2022-01-10T17%3A20%3A32Z&se=2022-03-10T17%3A20%3A00Z&sr=b&sp=r&sig=yPsQJiFyAWpPoN3ZHLrypiXMtjcgCIJ6yzu3%2FGKCqDw%3D)\
[Data Source](https://directidcdnstorage.blob.core.windows.net/test-data/apollo-carter.json?sv=2020-08-04&st=2022-01-10T17%3A19%3A16Z&se=2022-03-01T17%3A19%3A00Z&sr=b&sp=r&sig=E8NsHdPpTnGACUPazODd52xdwXpjG7JF%2BfIdDd9tLwI%3D)

## Assumptions

- Total Credit and Total Debit should be rounded to 2 decimals
- Total Credit should be calculated as a sum of all transactions with creditDebitIndicator equaling "Credit"
- Total Debit should be calculated as a sum of all transactions with creditDebitIndicator equaling "Debit"
- Transactions section should display description, amount and date of every transaction

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
