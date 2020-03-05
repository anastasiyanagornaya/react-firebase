import React from 'react';

export default function UsersList({ users }) {
    return (
            <ul>
              { users.map(user => (
                  <li>
                    <div>{user.first_name}</div>
                    {user.last_name && <div>{user.last_name}</div>}
                  </li>
                ))
              }
            </ul>
    )
}