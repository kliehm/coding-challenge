import * as React from 'react';
import axios from 'axios';
import SVG from 'react-inlinesvg';
import './App.scss';

const API = 'https://makeup-api.herokuapp.com/api/v1/products.json';

interface State {
  products: [];
  isLoading: boolean;
  error: object;
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount(): void {
    this.setState({ isLoading: true });
    axios.get(API)
      .then((result) => {
        this.setState({
          products: result.data,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({
        error,
        isLoading: false,
      }));
  }

  render(): React.ReactElement {
    const { products, isLoading, error } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {isLoading
            && <SVG src="../../logo.svg" className="App-logo" alt="logo" />}
          <p>
            Edit
            {' '}
            <code>src/App.jsx</code>
            {' '}
            and save to reload.
          </p>
          {!error
            ? <p>{products}</p>
            : <p>{error}</p>}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
