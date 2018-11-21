import { combineReducers } from 'redux';
import sharedReducer from './state/shared/shared.reducer';
import dialogReducer from './state/dialog/dialog.reducer';
import drawerReducer from './state/drawer/drawer.reducer';
import SheetReducer from './state/sheet/sheet.reducer';

const rootReducer = combineReducers({
  shared: sharedReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  sheet: SheetReducer
});

export default rootReducer;
