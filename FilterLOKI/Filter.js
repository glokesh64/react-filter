import React, { useState } from "react"
import Data from "./Cities.json"
const Filter = () => {
    const [search, setSearch] = useState("")
    return (
        <div>

            <center>
                <h3>Enter your city</h3>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <br />
                {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
                    return <div style={{ "border": "1px  solid black", "padding": "10px", "margin": "10px", "maxWidth": "70%" }}>
                        {city.name}

                    </div>
                })}


            </center>

        </div>
    )
}
export default Filter;