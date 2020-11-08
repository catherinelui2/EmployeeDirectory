import React from "react";

const EmployeeContext = React.createContext({
    results: [],
    search: "",
    handleInputChange: () => {},
    handleSortChange: () => {}
});

export default EmployeeContext;