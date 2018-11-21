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
      isEdited: false
    };
  }

  data() {
    this.sheetData
      ? this.renderData(this.row, this.colKey, this.sheetData)
      : null;
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
    let d = { row: row, col: colKey, text: this.state.inputValue };
    this.props.saveNewData(d);
    this.cancelEditMode();
  }

  toggleEditMode(text) {
    this.setState({ isEditMode: true });
    this.setState({ inputValue: text });
  }

  cancelEditMode() {
    this.setState({ isEditMode: false });
    this.setState({ isEdited: true });
  }

  renderData(row, col, data) {
    let dataText = "";
    let line = "";
    if (row && col && data.cells) {
      data.cells[row] ? (line = data.cells[row]) : null;
      line[col] ? (dataText = line[col]) : null;
    }
    if (dataText) {
      return dataText;
    } else {
      return "";
    }
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
