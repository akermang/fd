import React from "react";
import PropTypes from "prop-types";
import styles from "./row.component.scss";
import CellitemComponent from "../cellItem/cellItem.component.jsx";

const RowComponent = props => {
  const { rowNumber, col, sheetData, saveNewData } = props;

  function renderCells(num) {
    var rows = [];
    for (let i = 0; i < num; i++) {
      const colKeys = { "0": "a", "1": "b", "2": "c" };
      rows.push(
        <CellitemComponent
          key={i}
          row={rowNumber}
          colKey={colKeys[i]}
          sheetData={sheetData}
          saveNewData={saveNewData}
        />
      );
    }
    return rows;
  }

  return (
    <div className={styles.row}>
      <span className={styles.rowNumber}>{rowNumber}</span>
      {renderCells(col)}
    </div>
  );
};

RowComponent.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  sheetData: PropTypes.object,
  saveNewData: PropTypes.func.isRequired

};

export default RowComponent;
