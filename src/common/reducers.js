import { combineReducers } from 'redux';
import authReducer from './state/auth/auth.reducer';
import sharedReducer from './state/shared/shared.reducer';
import dialogReducer from './state/dialog/dialog.reducer';
import drawerReducer from './state/drawer/drawer.reducer';
import SheetReducer from './state/sheet/sheet.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  shared: sharedReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  sheet: SheetReducer
});

export default rootReducer;
