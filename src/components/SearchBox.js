import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
import styled from "styled-components";

const StyledSearchBox = styled.form`

`;

const SearchBox = () => {
    const {search, handleInputChange} = useContext(EmployeeContext);

    return (
        <StyledSearchBox>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                value={search} 
                name="search" 
                type="text" 
                placeholder="Search for an employee" 
                id="search" onChange={handleInputChange} 
                />
            </div>
        </StyledSearchBox>
    )
}

export default SearchBox;