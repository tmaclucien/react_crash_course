import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello From React</h1>
//     </div>
//   );
// }

/**
 * class based component
 * react component class includes all lifecycle methods and stuff like that, so we need to extends from it
 */
class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  /**
   * lifecycle hook
   */
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get('https://api.github.com/users', {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      },
    });
    // this.state.users = res.data // this is the wrong way to directly change the state, not the way do in the react
    this.setState({ users: res.data, isLoading: false });
  }

  /**
   * search users
   */
  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const res = await axios.get('https://api.github.com/search/users', {
      params: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        q: text,
      },
    });
    // this.state.users = res.data // this is the wrong way to directly change the state, not the way do in the react
    this.setState({ users: res.data.items, isLoading: false });
  };

  /**
   * render is actually a lifecycle method, it runs at a certain point when the component loaded. There is other lifecycle methods as well that u can run at the certain points, but the render method is the only one that actually required, because it renders the output
   * @returns output component
   */
  render() {
    const title = 'tmaclucien@gmail.com';
    const numbers = [1, 2, 3];
    return (
      /**
       * method: jsx
       */
      // (1) jsx must be returned with one root element
      // <div className='App'>
      //   <h1>Hello From React</h1>
      //   <label htmlFor='name'>name</label>
      // </div>
      // (2) if we do not want to any parent element, we can use fragment,for example, use <></> or <React.Fragment></React.Fragment>, they are called "ghost element".
      // <Fragment>
      //   <h1>Hello From React</h1>
      //   <label htmlFor='name'>name</label>
      //   <p>{title}</p>
      //   <p>{this.customMethod()}</p>
      // </Fragment>
      <>
        <Navbar
          title={title}
          icon='fab fa-github'
          description='This is github finder project'
        />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users
            users={this.state.users}
            isLoading={this.state.isLoading}
          />
        </div>
      </>

      /**
       * method: pure js
       * element params: (1) tag name (2) attrs (3) content
       */
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, 'Hello From React'),
      //   React.createElement('label', { htmlFor: 'name' }, 'name')
      // )
    );
  }
}

export default App;
