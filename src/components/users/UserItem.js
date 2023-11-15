import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * class based components
 * There is a couple ways to add states to a class based component:
 * (1) constructor (2) ?
 */
// class UserItem extends Component {
//   /**
//    * define states
//    */
//   // (1) constructor
//   // constructor() {
//   //   super(); // must call
//   //   this.state = {};
//   // }
//   // (2)
//   // state = {}

//   /**
//    * define props
//    */
//   // static defaultProps = {
//   //   user: {
//   //     id: 1,
//   //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //     login: 'mojombo',
//   //     html_url: 'https://github.com/mojombo',
//   //   },
//   // };

//   render() {
//     const { avatar_url, login, html_url } = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url}
//           alt=''
//           className='round-img'
//           style={{ width: '60px' }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a
//             href={html_url}
//             className='btn btn-dark btn-sm my-1'
//           >
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

/**
 * functional based components
 */
const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          className='btn btn-dark btn-sm my-1'
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, // ptor (snippets)
};

export default UserItem;
