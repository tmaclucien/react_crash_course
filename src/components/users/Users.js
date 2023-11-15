import React, { Component } from 'react';
import UserItem from './UserItem';
import Loading from '../layouts/Loading';
import PropTypes from 'prop-types';

/**
 * class based component
 */
// class Users extends Component {
//   // state = {
//   //   users: [
//   //     {
//   //       id: 1,
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //       login: 'mojombo',
//   //       html_url: 'https://github.com/mojombo',
//   //     },
//   //     {
//   //       id: 2,
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//   //       login: 'defunkt',
//   //       html_url: 'https://github.com/defunkt',
//   //     },
//   //     {
//   //       id: 3,
//   //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//   //       login: 'pjhyett',
//   //       html_url: 'https://github.com/pjhyett',
//   //     },
//   //   ],
//   // };
//   render() {
//     return (
//       <div className='grid-3'>
//         {this.props.users.map((user) => {
//           return (
//             <UserItem
//               user={user}
//               key={user.id}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

/**
 * functional based component
 */
const Users = ({ users, isLoading }) => {
  if (isLoading) return <Loading />;
  return (
    <div className='grid-3'>
      {users.map((user) => {
        return (
          <UserItem
            user={user}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Users;
