import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Usersliste() {
    const [listuser, setlistuser] = useState([])

    const fitchdata = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        setlistuser(data.data)
    }


    useEffect(() => {
        fitchdata()
    } ,[] )

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {listuser.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>


    )
}

export default Usersliste