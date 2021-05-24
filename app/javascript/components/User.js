import React from 'react'

const User = (props) =>  {
    const { id, name, age } = props.user;
    return (
      <>
        <h1>User List</h1>
        <h3>{name}</h3>
        <p>
          Age: {age}, User_id: {id}
        </p>
        <a href="/">back</a>
      </>
    );
}

export default User