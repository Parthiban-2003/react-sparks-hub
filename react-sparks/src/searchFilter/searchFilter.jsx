import { useState } from "react";

function SearchFilter() {
    const SearchLists = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ReactJS', 'JQuery'];
    const [search, setSearch] = useState('');
    return (
        <>
            <h1>Input Search Filter Displays:</h1>
            <input type="text" placeholder="Type Anything..." value={search}
                onChange={(e) => setSearch(e.target.value)} />

            <ul>
                {
                    SearchLists.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
                        .map((item) => {
                            return <li key={item}>{item}</li>
                        })
                }
            </ul>
        </>
    )
}

export default SearchFilter;