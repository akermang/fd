import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from '../app.page.jsx';
import DefaultLayout from './default/default-layout.page.jsx';
import i18n from '../../i18n';
import HomePage from '../features/pages/Home/home.page.jsx';
import { ROUTES } from '../common/constants';

const Root = ({ store }) => ({
  render () {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <App>
              <Switch>
                <DefaultLayout path={ROUTES.home} component={HomePage} />
              </Switch>
            </App>
          </Router>
        </Provider>
      </I18nextProvider>
    );
  }
});

export default Root;
