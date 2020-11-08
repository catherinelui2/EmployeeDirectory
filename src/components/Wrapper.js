import React, {useState, useEffect} from "react";
import API from "../utils/API";
import Header from "./Header";
import Main from "./Main";
import SearchBox from "./SearchBox";
import DataBody from "./DataBody";
import EmployeeContext from "../utils/EmployeeContext";
import styled from "styled-components";

const Layout = styled.div`
display: grid;
height: 100vh;
grid-template-rows: auto 1fr auto;`

const Wrapper = () => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");
    const [isAsc, setIsAsc] = useState(true);

    useEffect(() => {
        searchEmployee(search);
    }, [search]);

    const searchEmployee = async (query) => {
        try {
            const res = await API.search(query);
            setResults(res);
        } catch (error) {
            console.error("There was an error processing your result", error);
        }
    }

    const handleInputChange = event => {
        const { value } = event.target;
        console.log("value  ", value);
        setSearch(value);
    }

    const handleSortChange = () => {
        // sort by name
        const resultSorted = [...results].sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return isAsc ? -1 : 1;
            }
            if (nameA > nameB) {
                return isAsc ? 1 : -1;
            }
            // names must be equal
            return 0;
        });
        setResults(resultSorted);
        setIsAsc(!isAsc);
    }

    return (
        <EmployeeContext.Provider value={{
            search,
            results: results,
            handleInputChange,
            handleSortChange
        }}>
            <Layout>
            {/* <Header /> */}
                <Main>
                    <SearchBox />
                    <DataBody />
                </Main>
            </Layout>
        </EmployeeContext.Provider>
    )
}


export default Wrapper;

