
import React from 'react'

function Users({email, firstName, lastName, username, id, setAllUsers, allUsers}){
    

    // Handles the deletion of a User from the data base
    function handleDelete(){
        fetch(`/delete/${id}`, {
            method: 'DELETE',
        })
        .then((resp) => {
            setAllUsers((allUsers) => 
            allUsers.filter((user) => user.id !== id))
        })
    }

    // Handles the edit of the user
    function handleEdit(){
        console.log('im trying to edit')
    }

    return (
        <div id='usercard'>
            <h3>Hello there {firstName} {lastName}!</h3>
            <h4>Your email is: {email}</h4>
            <h5>Let us know if you would prefer to go by your usersname of: {username}</h5>
            <button id='editButton'
                onClick={handleEdit}>
                Edit User
            </button>
            <button id='deleteButton'
                onClick={handleDelete}>
                Delete User
            </button>
        </div>
    )
}

export default Users
