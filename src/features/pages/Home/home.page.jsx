import React, { Component } from "react";
import { connect } from "react-redux";
// import propTypes from 'prop-types';
import { translate } from "react-i18next";
import styles from "./home.page.scss";
import {
  fetchSheetDataAction,
  fetchSaveSheetDataAction
} from "../../../common/state/sheet/sheet.actions.js";
class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount(){
    this.props.getData().then(res => console.log("GetData res:", res))
  }
  saveNewData(data){
    let d = {row: 4, col: "c",  text: "mos4"};
    this.props.saveData(d).then(res => console.log("SaveData res;", res))
  }

  render() {
    return <div className={styles.homePage}>
    home page
    <button onClick={()=>{this.saveNewData("gal")}}>test</button>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    sheetData: state.sheet
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

// HomePage.propTypes = {
//   dispatch: propTypes.func.isRequired,
//   t: propTypes.func.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(HomePage)
);
