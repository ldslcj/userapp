import React from 'react'

const Users = (props) => {
    const { users } = props
    const rednerUsers = () => {
        return users.map( user => {
            return (
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.age}</h2>
                    <a href = {`/users/${user.id}`}>Show</a>
                    <a href = {`/users/${user.id}/edit`}>Edit</a>
                    <a href = {`/users/${user.id}`} data-method='delete'>Delete</a>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Users List</h1>
            <a href='/users/new'>New</a>
            {rednerUsers()}
        </div>
    )
}

export default Users