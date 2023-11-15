import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * class based components
 */
// export class Navbar extends Component {
//   static defaultProps = {
//     title: 'iFlytek.com',
//     icon: 'fab fa-github',
//     description: 'This is components default props',
//   };
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string,
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon}></i> {this.props.title}
//         </h1>
//         <p>{this.props.description}</p>
//       </nav>
//     );
//   }
// }

/**
 * functional based components
 */
const Navbar = ({ title, description, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <p>{description}</p>
    </nav>
  );
};
// functional way to declare the default props and prop types
Navbar.defaultProps = {
  title: 'Navbar',
  description: 'This is components default props',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Navbar;
