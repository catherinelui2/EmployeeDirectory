import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
import styled from "styled-components";

const StyledDataBody = styled.div``;

const DataBody = () => {
    const { results, handleSortChange } = useContext(EmployeeContext);

    const handleOnClick = () => {
        handleSortChange();
    };

    return (
        <StyledDataBody>
            {
                <>
                    <table>
                        <tbody>
                            <tr>
                                <th>Image</th>
                                <th onClick={handleOnClick}>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                            {results.map((result) => (
                                <tr key={result.name}>
                                    <th>
                                        <img alt={result.name} src={result.img} />
                                    </th>
                                    <th>{result.name}</th>
                                    <th>{result.phone}</th>
                                    <th>{result.email}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }
        </StyledDataBody>
    );
};

export default DataBody;
