import { useEffect, useState } from "react"

const UseUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("reviewData.json")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return [users, setUsers];
}

export default UseUsers;