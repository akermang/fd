import React from "react";
import PropTypes from "prop-types";
import styles from "./table.component.scss";
import RowComponent from "../row/row.component.jsx";

const TableComponent = props => {
  const { row, col, sheetData, saveNewData } = props;

  function renderRows(num) {
    const rows = [];
    for (let i = 0; i < num; i++) {
      rows.push(
        <RowComponent
          key={i}
          rowNumber={i + 1}
          col={col}
          sheetData={sheetData}
          saveNewData={saveNewData}
        />
      );
    }
    return rows;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableHead}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
      {renderRows(row)}
    </div>
  );
};

TableComponent.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired
};

export default TableComponent;
