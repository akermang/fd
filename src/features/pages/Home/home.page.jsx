import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./home.page.scss";
import {
  fetchSheetDataAction,
  fetchSaveSheetDataAction
} from "../../../common/state/sheet/sheet.actions.js";
import TableComponent from "../../components/table/table.component.jsx";

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
    openDialog: (title, component) =>
      dispatch(new OpenDrawerAction(title, component)),
    openDrawer: () => dispatch(new OpenDrawerAction()),
    getData: () => dispatch(new fetchSheetDataAction()),
    saveData: data => dispatch(new fetchSaveSheetDataAction(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
