import createAsyncAction from "../../../createAsyncAction";
import HttpService from "../../services/http.service";
import ApiService from "../../services/api.service";

// export const SYNC_EXAMPLE = 'EXAMPLE';
export const FETCH_SHEET_DATA = "FETCH_SHEET_DATA";
export const FETCH_SAVE_SHEET_DATA = "FETCH_SAVE_SHEET_DATA";

/**
 * Async actions
 * */
export const fetchSheetDataAction = createAsyncAction(FETCH_SHEET_DATA, () => {
  const options = ApiService.getOptions("getdata");
  return HttpService.fetch({ ...options });
});

export const fetchSaveSheetDataAction = createAsyncAction(
  FETCH_SAVE_SHEET_DATA,
  data => {
    const options = ApiService.getOptions("savedata");
    return HttpService.fetch({ ...options, body: JSON.stringify( data ) });
  }
);

/**
 * Sync actions
 * */
// export function SyncExampleAction(payload) {
//  return {
//    type: SYNC_EXAMPLE,
//    payload
//  }
// }
