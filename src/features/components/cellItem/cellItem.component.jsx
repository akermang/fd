import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./cellItem.component.scss";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

class CellitemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      inputValue: ""
    };
  }

  onBlur(e, row, colKey){
    this.onSaveData(row, colKey)
    this.cancelEditMode();
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
    console.log(this.state.inputValue);
    this.cancelEditMode();
  }

  toggleEditMode(text) {
    this.setState({ isEditMode: true });
  }

  cancelEditMode() {
    this.setState({ isEditMode: false });
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
      return " ";
    }
  }

  render() {
    const { row, colKey, sheetData } = this.props;
    let text = "";
    sheetData ? (text = this.renderData(row, colKey, sheetData)) : null;

    return (
      <div className={styles.itemContainer}>
        {!this.state.isEditMode && (
          <div
            className={styles.editContainer}
            onClick={text => this.toggleEditMode(text)}
          >
            {text}
          </div>
        )}
        {this.state.isEditMode && (
          <div className={styles.editContainer}>
            <TextField
              onBlur={e  => this.onBlur(e, row, colKey)}
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

// CellitemComponent.propTypes = {
//   example: PropTypes.string.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     example: state.example.text
//   };
// }

export default CellitemComponent;
