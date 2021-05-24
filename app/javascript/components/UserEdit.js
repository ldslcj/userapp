import React from 'react'

const UserEdit = (props) => {
    const {name, age, id} = props.user
    return (
        <div>
            <h1>Edit User Info</h1>
            <form action={`/users/${id}`} method ='post'>
                <input type = 'hidden' name = '_method' value = 'patch' />
                <input defaultValue={name} placeholder = 'name' name="user[name]"/>
                <input defaultValue={age} placeholder = 'age' name="user[age]"/>
                <button type="submit">Update</button>
            </form>
            
        </div>
    )
}

export default UserEdit