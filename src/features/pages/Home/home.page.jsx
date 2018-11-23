import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./home.page.scss";
import TableComponent from "../../components/table/table.component.jsx";
import {
  fetchSheetDataAction,
  fetchSaveSheetDataAction
} from "../../../common/state/sheet/sheet.actions.js";

class HomePage extends Component {
  componentDidMount() {
    this.props.getData();
  }

  saveNewData(data) {
    this.props.saveData(data);
  }

  render() {
    const { sheetData } = this.props;
    return (
      <div className={styles.homePage}>
        <TableComponent
          row={20}
          col={3}
          sheetData={sheetData}
          saveNewData={data => {
            this.saveNewData(data);
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sheetData: state.sheet.sheet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(new fetchSheetDataAction()),
    saveData: data => dispatch(new fetchSaveSheetDataAction(data))
  };
}

HomePage.propTypes = {
  sheetData: PropTypes.object,
  getData: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
