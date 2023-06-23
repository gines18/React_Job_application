import React from "react";
import "./Dropdown.css";
import "./DropdownData.jsx";

export default function Dropdown(props) {
  return (
    <>
      <div className="container-dropdown">
        <div className="dropdown">
          <h1 id="details">{props.details}</h1>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Please Select
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item">{props.dropdown}</a>
            </li>
            <li>
              <a className="dropdown-item">{props.dropdown2}</a>
            </li>
            <li>
              <a className="dropdown-item">{props.dropdown3}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
