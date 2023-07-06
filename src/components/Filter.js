import React from "react";

function Filter ({ onCategoryChange }) {
    return (
    <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    )
}
export default Filter

//itemsToDisplay is filtering
//handeCategoryChange is the value of the option
//selectedCategory is the current state that is in which is "All" in thge beginning no filter