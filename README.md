This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
Storybook is on top of that and using Create React App webpack configuration.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the storybook.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the production version of storybook under `storybook-static` folder.<br />

## SCSS and CSS modules

Both SCSS and CSS modules are enabled.<br />
In order to use CSS modules with storybook, you will need to add `.module.scss` suffix to your SCSS file.
Example can be seen in [Input.module.scss](src/stories/2-Input/Input.module.scss)

## Utils

### searchBooks

Calling `searchBooks` will trigger the API call to IT Bookstore API to search for books.
In order to be able to use the API you will need CORS extension in your browser.

Example:
```js
// autocompleteValue is set by input
const [autocompleteValue, setAutocompleteValue] = useState('');
const [results, setResults] = useState([]);

useEffect(() => {
  // In the effect we get the results and put them in state
  async function fetchBooks() {
    const books = await searchBooks(autocompleteValue);
    setResults(books);
  }
  if (autocompleteValue.trim().length > 2) {
    fetchBooks();
  }
}, [autocompleteValue, setResults]);
```

### useDecoratedChangeHandler

Calling `useDecoratedChangeHandler` with your `onChange` handler as parameter will decorate your handler so it logs the value in the Storybook console.
Example can be seen in [Input.stories.jsx](src/stories/2-Input/Input.stories.jsx)
