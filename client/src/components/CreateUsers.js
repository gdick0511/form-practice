import { useState } from 'react'

import React from 'react'

function CreateUsers({allUsers, setAllUsers}) {
    // State Management
    // Created this piece of state and set it up as an object, so that I may use it for the value of all input fields. This is preferred over creating a peice of state for each input field
    const [newUserInfo, setNewUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
    })

    // Handling the OnChange Event for the inputs on the Form
    function handleOnChange(e){
        console.log(e.target.value)
        setNewUserInfo((currentInputs) => ({
            ...currentInputs,
            [e.target.name]: e.target.value
        }))
    }

    // Handling Submit For New User Creation
    function handleSubmit(e){
        e.preventDefault()
        const newUser = {
            firstName: newUserInfo.firstName,
            lastName: newUserInfo.lastName,
            email: newUserInfo.email,
            username: newUserInfo.username,
        }
        fetch('/newuser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then((resp) => resp.json())
        .then((allUsers) => {
            setAllUsers((currentInputs) =>[allUsers,...currentInputs])
            setNewUserInfo({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
            })
        })
    }


    return (
        <div>
            <h3>New User Info</h3>
            <form onSubmit={handleSubmit} id="formInput">
                <label className="label">
                    First Name:
                    <input
                        type='text'
                        name='firstName'
                        value={newUserInfo.firstName}
                        onChange={handleOnChange}
                    ></input>
                </label>
                <label className="label">
                    Last Name:
                    <input
                        type='text'
                        name='lastName'
                        value={newUserInfo.lastName}
                        onChange={handleOnChange}
                    ></input>
                </label>
                <label className="label"> 
                    Email:
                    <input
                        type='text'
                        name='email'
                        value={newUserInfo.email}
                        onChange={handleOnChange}
                    ></input>
                </label>
                <label className="label">
                    User Name:
                    <input
                        type='text'
                        name='username'
                        value={newUserInfo.username}
                        onChange={handleOnChange} 
                    ></input>
                </label>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateUsers
