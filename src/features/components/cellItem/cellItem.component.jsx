import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./cellItem.component.scss";
import TextField from "@material-ui/core/TextField";

class CellitemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      inputValue: "",
      isEdited: false,
      cellData: this.renderData(this.row, this.colKey, this.sheetData) || ""
    };
  }

  onBlur(e, row, colKey) {
    this.onSaveData(row, colKey);
  }

  keyPress(e, row, colKey) {
    if (e.keyCode == 13) {
      this.onSaveData(row, colKey);
    }
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  onSaveData(row, colKey) {
    let olldData = this.renderData(row, colKey, this.props.sheetData);
    let newData = { row: row, col: colKey, text: this.state.inputValue };
    if (olldData !== newData.text) {
      this.props.saveNewData(newData);
      this.setState({ isEdited: true });
    }
    this.cancelEditMode();
  }

  toggleEditMode(text) {
    this.setState({ isEditMode: true });
    this.setState({ inputValue: text });
  }

  cancelEditMode() {
    this.setState({ isEditMode: false });
  }

  renderData(row, col, data) {
    let dataText = "";
    row && col && data.cells && data.cells[row] && data.cells[row][col]
      ? (dataText = data.cells[row][col])
      : null;
      return (dataText? dataText: "")
  }

  render() {
    const { row, colKey, sheetData } = this.props;
    let text = this.state.inputValue;
    let isEdited = this.state.isEdited;
    sheetData ? (text = this.renderData(row, colKey, sheetData)) : null;

    return (
      <div className={styles.itemContainer}>
        {!this.state.isEditMode && (
          <div
            className={styles.editContainer}
            onClick={e => this.toggleEditMode(text)}
          >
            {isEdited ? this.state.inputValue : text}
          </div>
        )}
        {this.state.isEditMode && (
          <div className={styles.editContainer}>
            <TextField
              onBlur={e => this.onBlur(e, row, colKey)}
              autoFocus
              variant="outlined"
              onKeyDown={e => this.keyPress(e, row, colKey)}
              defaultValue={text}
              onChange={event => this.onInputChange(event)}
            />
          </div>
        )}
      </div>
    );
  }
}

CellitemComponent.propTypes = {
  row: PropTypes.number.isRequired,
  colKey: PropTypes.string.isRequired
};

export default CellitemComponent;
