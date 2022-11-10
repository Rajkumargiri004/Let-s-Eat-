import React from "react";

const Category = ({ filterItem }) => {
  return (
    <div className="btn-container">

       <button className="filter-btn" onClick={() => filterItem("Menu")}>
        Menu
      </button>
      
      <button className="filter-btn" onClick={() => filterItem("breakfast")}>
        Breakfast
      </button>

      <button className="filter-btn" onClick={() => filterItem("shakes")}>
        shaKes
      </button>

      <button className="filter-btn" onClick={() => filterItem("lunch")}>
        Lunch
      </button>

      <button className="filter-btn" onClick={() => filterItem("Hotel")}>
        In Hotel
      </button>
    </div>
  );
};

export default Category;
