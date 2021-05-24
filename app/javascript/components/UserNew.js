import React from 'react'

const UserNew = (props) => {
    return (
        <div>
            <h1>Add New User</h1>
            <form action='/users' method ='post'>
                <input placeholder = 'name' name="user[name]"/>
                <input placeholder = 'age' name="user[age]"/>
                <button type="submit">Add</button>
            </form>
            
        </div>
    )
}

export default UserNew