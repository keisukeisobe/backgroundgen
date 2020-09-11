import React from "react"
import './filter.css';

function Filter() {
  return (
    <>
      <h3 className="tertiary-header">Filter Sourcebooks</h3>
      <div className="filter-view">
        <div className="filter-mini-pill">
          Acquisitions Incorporated
        </div>
        <div className="filter-mini-pill">
          Baldur's Gate
        </div>
        <div className="filter-mini-pill">
          Curse of Strahd
        </div>
        <div className="filter-mini-pill">
          Eberron
        </div>
        <div className="filter-mini-pill">
          Ravnica
        </div>
      </div> 
    </>
  );
}

export default Filter;