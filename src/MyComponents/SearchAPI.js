import React, { useState, useEffect } from "react";

const App = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await result.json();
            setData(json);
        };
        fetchData();
    }, []);


    const filteredData = data.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const usernameMatch = item.username.toLowerCase().includes(searchTerm.toLowerCase());
        const email = item.email.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || usernameMatch || email;
    });

    return (
        <div>
            <h1>Search</h1>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <ul>
                {filteredData.map(item => (
                <li key={item.id}>
                    <li>Name: {item.name} </li>
                    <li>Username: {item.username}</li>
                    <li>Email: {item.email} </li> <br/>
                    </li>))}
            </ul>
        </div>
    );
};

export default App;

