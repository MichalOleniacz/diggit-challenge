import React, { Component } from "react";
import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
class Dropdown extends Component {
  handleClick = (element) => {};
  render() {
    const { dropdownData, displayed } = this.props;
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdownBtn}>
          {displayed}
          <FontAwesomeIcon
            icon={faSortDown}
            className={styles.icon}
          />
        </button>
        <div className={styles.dropdownContent}>
          {dropdownData.map((element) => {
            return (
              <a
                key={element.id}
                onClick={() => this.handleClick(element)}>
                {element.name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dropdown;
