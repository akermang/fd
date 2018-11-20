import sheetState from "./sheet.state";
import { FETCH_SHEET_DATA, FETCH_SAVE_SHEET_DATA } from "./sheet.actions";
import { SUCCESS_SUFFIX } from '../../constants';

const SheetReducer = (state = sheetState, action) => {
  switch (action.type) {
    case `${FETCH_SHEET_DATA}${SUCCESS_SUFFIX}`:
      return { ...state, sheet: action.payload };

      case `${FETCH_SAVE_SHEET_DATA}${SUCCESS_SUFFIX}`:
      return { ...state, sheet: action.payload };

    default:
      return state;
  }
};

export default SheetReducer;
